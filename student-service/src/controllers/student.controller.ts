import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';
import { createStudentSchema, updateStudentSchema } from '../validators/student.validator';

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
  const duplicateNisn = await prisma.student.findUnique({ where: { nisn: value.nisn } });
  if (duplicateNisn) return sendError(res, 400, `NISN ${value.nisn} sudah terdaftar`);

  // Validasi NIS unik (jika ada)
  if (value.nis) {
    const duplicateNis = await prisma.student.findUnique({ where: { nis: value.nis } });
    if (duplicateNis) return sendError(res, 400, `NIS ${value.nis} sudah terdaftar`);
  }

  // Get class info for denormalization
  const classInfo = await prisma.class.findUnique({ where: { id: value.classId } });
  if (!classInfo) return sendError(res, 400, 'Invalid classId');

  const student = await prisma.student.create({
    data: {
      ...value,
      className: classInfo.name,
      classLevel: classInfo.level,
      classMajor: classInfo.major,
      createdBy: (req as any).user?.id || 'SYSTEM',
    },
  });

  // Update class currentTotal
  await prisma.class.update({
    where: { id: value.classId },
    data: { currentTotal: { increment: 1 } },
  });

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
