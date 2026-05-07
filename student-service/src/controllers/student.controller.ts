import { Request, Response } from 'express';
import axios from 'axios';
import prisma from '../config/prisma';

import { sendResponse, sendError } from '../utils/response';
import { createStudentSchema, updateStudentSchema } from '../validators/student.validator';
import { getConsolidatedProfile } from './consolidated.controller';

export const getStudents = async (req: Request, res: Response) => {
  const offset = parseInt(req.headers['x-paging-offset'] as string) || 0;
  const limit = parseInt(req.headers['x-paging-limit'] as string) || 25;
  const search = req.headers['x-paging-search'] as string;
  const classId = req.query.classId as string;
  const status = req.query.status as any;

  const where = {
    deletedAt: null,
    ...(classId && { classId }),
    ...(status && { status }),
    ...(search && {
      OR: [
        { name: { contains: search, mode: 'insensitive' as any } },
        { nisn: { contains: search, mode: 'insensitive' as any } },
        { nis: { contains: search, mode: 'insensitive' as any } },
      ],
    }),
  };

  const [items, total] = await Promise.all([
    prisma.student.findMany({
      where,
      skip: offset,
      take: limit,
      include: { class: true },
      orderBy: { name: 'asc' },
    }),
    prisma.student.count({ where }),
  ]);

  return sendResponse(res, 200, true, 'Students retrieved', {
    items,
    pagination: {
      offset,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
};

export const getStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item = await prisma.student.findUnique({
    where: { id },
    include: {
      class: true,
      pointsHistory: {
        take: 10,
        orderBy: { recordedAt: 'desc' },
      },
    },
  });

  if (!item) return sendError(res, 404, 'Student not found');

  return sendResponse(res, 200, true, 'Student detail retrieved', item);
};

export const createStudent = async (req: Request, res: Response) => {
  const { error, value } = createStudentSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  // Validasi NISN unik
  if (value.nisn) {
    const duplicateNisn = await prisma.student.findUnique({ where: { nisn: value.nisn } });
    if (duplicateNisn) return sendError(res, 400, `NISN ${value.nisn} sudah terdaftar`);
  }

  // Validasi NIS unik (jika ada)
  if (value.nis) {
    const duplicateNis = await prisma.student.findUnique({ where: { nis: value.nis } });
    if (duplicateNis) return sendError(res, 400, `NIS ${value.nis} sudah terdaftar`);
  }

  // Get class info for denormalization
  const classInfo = await prisma.class.findUnique({ where: { id: value.classId } });
  if (!classInfo) return sendError(res, 400, 'Invalid classId');

  // Destructure fields that are not in the database model
  const { createAccount, email: studentEmail, ...cleanValue } = value;

  const studentData = {
    ...cleanValue,
    nisn: value.nisn || value.nis || `NISN-${Date.now()}`,
    birthPlace: value.birthPlace || 'Unknown',
    birthDate: value.birthDate || new Date(),
    religion: value.religion || 'ISLAM',
    address: value.address || 'Unknown',
    city: value.city || 'Unknown',
    province: value.province || 'Unknown',
    academicYear: value.academicYear || '2024/2025',
    entryYear: value.entryYear || '2024',
    entryDate: value.entryDate || new Date(),
    userId: value.userId || null,
  };

  const student = await prisma.student.create({
    data: {
      ...studentData,
      className: classInfo.name,
      classLevel: classInfo.level,
      classMajor: classInfo.major,
      waliKelasId: classInfo.waliKelasId,
      waliKelasName: classInfo.waliKelasName,
      createdBy: (req as any).user?.id || 'SYSTEM',
    },
  });

  // Update class currentTotal
  await prisma.class.update({
    where: { id: value.classId },
    data: { currentTotal: { increment: 1 } },
  });

  // Handle Automatic Account Creation
  if (createAccount && studentEmail) {
    try {
      const authServiceUrl = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';
      const internalSecret = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';
      
      // Ensure URL is clean (handle trailing slashes and prefix)
      let baseUrl = authServiceUrl.endsWith('/') ? authServiceUrl.slice(0, -1) : authServiceUrl;
      const fullUrl = `${baseUrl}/api/v1/auth/internal/users`;
      
      const authResponse = await axios.post(fullUrl, {
        username: studentData.nis, // Use NIS as username
        email: studentEmail,
        name: studentData.name,
        roleCode: 'SISWA'
      }, {
        headers: { 'x-internal-secret': internalSecret }
      });

      if (authResponse.data.success) {
        const userId = authResponse.data.data.id;
        await prisma.student.update({
          where: { id: student.id },
          data: { userId }
        });
      }
    } catch (err: any) {
      const errorDetail = err.response?.data?.message || err.message;
      console.error(`Failed to create auth account for student ${studentData.name}:`, errorDetail);
      if (err.response) {
        console.error('Response Status:', err.response.status);
        console.error('Response Data:', JSON.stringify(err.response.data));
      }
      // We don't fail the whole request because the student was already created
    }
  }

  return sendResponse(res, 201, true, 'Student created', student);

};

export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = updateStudentSchema.validate(req.body);
  if (error) return sendError(res, 400, error.details[0].message);

  const existingStudent = await prisma.student.findUnique({ where: { id } });
  if (!existingStudent) return sendError(res, 404, 'Student not found');

  // Validasi NISN unik
  if (value.nisn && value.nisn !== existingStudent.nisn) {
    const duplicate = await prisma.student.findUnique({ where: { nisn: value.nisn } });
    if (duplicate) return sendError(res, 400, `NISN ${value.nisn} sudah terdaftar`);
  }

  // Jika pindah kelas, update denormalized info & total siswa per kelas
  if (value.classId && value.classId !== existingStudent.classId) {
    const newClassInfo = await prisma.class.findUnique({ where: { id: value.classId } });
    if (!newClassInfo) return sendError(res, 400, 'Invalid classId');

    value.className = newClassInfo.name;
    value.classLevel = newClassInfo.level;
    value.classMajor = newClassInfo.major;
    value.waliKelasId = newClassInfo.waliKelasId;
    value.waliKelasName = newClassInfo.waliKelasName;

    await prisma.$transaction([
      prisma.class.update({
        where: { id: existingStudent.classId },
        data: { currentTotal: { decrement: 1 } },
      }),
      prisma.class.update({
        where: { id: value.classId },
        data: { currentTotal: { increment: 1 } },
      }),
      prisma.student.update({
        where: { id },
        data: {
          ...value,
          updatedBy: (req as any).user?.id || 'SYSTEM',
        },
      }),
    ]);
  } else {
    await prisma.student.update({
      where: { id },
      data: {
        ...value,
        updatedBy: (req as any).user?.id || 'SYSTEM',
      },
    });
  }

  return sendResponse(res, 200, true, 'Student updated successfully');
};

export const syncPoints = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { pointsChange, sourceType, sourceId, sourceDescription, academicYear, semester } = req.body;
  const recordedBy = (req as any).headers['x-user-id'] || 'SYSTEM';

  if (!pointsChange || !sourceType || !sourceId || !sourceDescription || !academicYear || !semester) {
    return sendError(res, 400, 'Missing required fields for points sync');
  }

  const student = await prisma.student.findUnique({ where: { id } });
  if (!student) return sendError(res, 404, 'Student not found');

  const newTotal = student.totalPoints + pointsChange;
  const positivePoints = sourceType === 'ACHIEVEMENT' ? student.positivePoints + pointsChange : student.positivePoints;
  const negativePoints = sourceType === 'VIOLATION' ? student.negativePoints + Math.abs(pointsChange) : student.negativePoints;

  await prisma.$transaction([
    prisma.student.update({
      where: { id },
      data: {
        totalPoints: newTotal,
        positivePoints,
        negativePoints,
      },
    }),
    prisma.studentPointsHistory.create({
      data: {
        studentId: id,
        studentName: student.name,
        previousTotal: student.totalPoints,
        pointsChange,
        newTotal,
        sourceType,
        sourceId,
        sourceDescription,
        academicYear,
        semester,
        recordedBy,
      },
    }),
  ]);

  return sendResponse(res, 200, true, 'Points synced successfully');
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  const student = await prisma.student.findUnique({ where: { id } });
  if (!student) return sendError(res, 404, 'Student not found');

  await prisma.$transaction([
    prisma.student.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        isActive: false,
        updatedBy: (req as any).user?.id || 'SYSTEM',
      },
    }),
    prisma.class.update({
      where: { id: student.classId },
      data: { currentTotal: { decrement: 1 } },
    }),
  ]);

  return sendResponse(res, 200, true, 'Student deleted successfully');
};

export const getMyProfile = async (req: Request, res: Response) => {
  const userId = req.headers['x-user-id'] as string;
  const rawRoles = req.headers['x-user-roles'] as string;
  
  if (!userId) return sendError(res, 401, 'Unauthorized: Missing user context');

  let student;
  
  // Parse roles to check if user is ORANG_TUA
  let isParent = false;
  try {
    const roles = rawRoles ? JSON.parse(rawRoles) : [];
    isParent = roles.includes('ORANG_TUA') || roles.includes('ORANGTUA');
  } catch (e) {
    console.error('Error parsing roles in getMyProfile:', e);
  }

  if (isParent) {
    // Find first student associated with this parent
    student = await prisma.student.findFirst({
      where: { parentId: userId, deletedAt: null },
    });
  } else {
    // Find student associated with this user
    student = await prisma.student.findUnique({
      where: { userId, deletedAt: null },
    });
  }

  if (!student) {
    return sendError(res, 404, isParent 
      ? 'No student linked to this parent account' 
      : 'Student profile not found for this user'
    );
  }

  // Inject student ID into params so we can reuse getConsolidatedProfile
  req.params.id = student.id;
  return getConsolidatedProfile(req, res);
};

export const linkParentByNis = async (req: Request, res: Response) => {
  const { parentId, nis, parentName } = req.body;

  if (!parentId || !nis) {
    return sendError(res, 400, 'Missing parentId or nis');
  }

  try {
    const student = await prisma.student.findUnique({
      where: { nis }
    });

    if (!student) {
      return sendError(res, 404, `Student with NIS ${nis} not found`);
    }

    await prisma.student.update({
      where: { id: student.id },
      data: {
        parentId
      }
    });


    return sendResponse(res, 200, true, 'Parent linked to student successfully');
  } catch (err: any) {
    return sendError(res, 500, err.message);
  }
};

export const assignWaliKelas = async (req: Request, res: Response) => {
  const { teacherId, teacherName, className } = req.body;

  if (!teacherId || !teacherName || !className) {
    return sendError(res, 400, 'Missing teacherId, teacherName, or className');
  }

  try {
    // 1. Find the class
    const classInfo = await prisma.class.findFirst({
      where: { 
        OR: [
          { name: className },
          { code: className }
        ]
      }
    });

    if (!classInfo) {
      return sendError(res, 404, `Class ${className} not found`);
    }

    // 2. Update the Class record
    await prisma.class.update({
      where: { id: classInfo.id },
      data: {
        waliKelasId: teacherId,
        waliKelasName: teacherName
      }
    });

    // 3. Sync to all Students in that class
    await prisma.student.updateMany({
      where: { classId: classInfo.id },
      data: {
        waliKelasId: teacherId,
        waliKelasName: teacherName
      }
    });

    return sendResponse(res, 200, true, `Teacher ${teacherName} assigned as Wali Kelas for ${className}`);
  } catch (err: any) {
    return sendError(res, 500, err.message);
  }
};

export const bulkCreateStudents = async (req: Request, res: Response) => {


  const { students } = req.body;
  if (!Array.isArray(students)) return sendError(res, 400, 'Invalid payload: students must be an array');

  const results = [];
  const authServiceUrl = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';
  const internalSecret = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';

  for (const studentData of students) {
    try {
      // 1. Find class by name or default to first available if not found (simple logic for now)
      let classId = studentData.classId;
      if (!classId && studentData.kelas) {
        const classInfo = await prisma.class.findFirst({ where: { name: studentData.kelas } });
        classId = classInfo?.id;
      }

      if (!classId) {
        results.push({ success: false, name: studentData.nama, message: 'Class not found' });
        continue;
      }

      // 2. Create student
      const student = await prisma.student.create({
        data: {
          name: studentData.nama,
          nis: studentData.nis?.toString(),
          nisn: (studentData.nisn || studentData.nis)?.toString() || `NISN-${Date.now()}`,
          gender: studentData.gender === 'P' ? 'FEMALE' : 'MALE',
          classId: classId,
          className: studentData.kelas,
          classLevel: '10', // Default
          birthPlace: studentData.tempat_lahir || 'Unknown',
          birthDate: studentData.tanggal_lahir ? new Date(studentData.tanggal_lahir) : new Date(),
          religion: 'ISLAM', // Default
          address: studentData.alamat || 'Unknown',
          city: studentData.kota || 'Unknown',
          province: studentData.provinsi || 'Unknown',
          academicYear: '2024/2025', // Default
          entryYear: '2024', // Default
          entryDate: new Date(),
          createdBy: (req as any).user?.id || 'SYSTEM',
        }
      });


      // 3. Create Account if email provided
      if (studentData.createAccount && studentData.email) {
        let baseUrl = authServiceUrl.endsWith('/') ? authServiceUrl.slice(0, -1) : authServiceUrl;
        const fullUrl = `${baseUrl}/api/v1/auth/internal/users`;

        await axios.post(fullUrl, {
          username: studentData.nis,
          email: studentData.email,
          name: studentData.nama,
          roleCode: 'SISWA'
        }, {
          headers: { 'x-internal-secret': internalSecret }
        }).then(async (authRes) => {
          if (authRes.data.success) {
            await prisma.student.update({
              where: { id: student.id },
              data: { userId: authRes.data.data.id }
            });
          }
        }).catch(err => {
          const errorDetail = err.response?.data?.message || err.message;
          console.error(`Bulk: Failed to create account for ${studentData.nama}:`, errorDetail);
        });
      }

      results.push({ success: true, id: student.id, name: student.name });
    } catch (err: any) {
      results.push({ success: false, name: studentData.nama, message: err.message });
    }
  }

  return sendResponse(res, 200, true, 'Bulk import completed', { results });
};

export const getConsolidatedMyChild = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  if (!userId) return sendError(res, 401, 'Unauthorized');

  // 1. Find the parent student link (assuming parent's userId is used)
  const student = await prisma.student.findFirst({
    where: { parentId: userId },
    include: {
      pointsHistory: {
        orderBy: { recordedAt: 'desc' },
        take: 10
      }
    }
  });

  if (!student) {
    return sendError(res, 404, 'Data anak tidak ditemukan');
  }

  return sendResponse(res, 200, true, 'Data anak berhasil diambil', {
    student: {
      id: student.id,
      name: student.name,
      nis: student.nis,
      className: student.className,
      totalPoints: student.totalPoints,
      negativePoints: student.negativePoints,
      positivePoints: student.positivePoints,
    },
    pointsHistory: student.pointsHistory
  });
};
