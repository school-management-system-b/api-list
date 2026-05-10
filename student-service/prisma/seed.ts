import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Student-service seed started...');

  const AY = '2024/2025';

  // ─── 1. ACADEMIC YEAR ────────────────────────────────────────────────────────
  await prisma.academicYear.upsert({
    where:  { year: AY },
    update: {},
    create: {
      year:          AY,
      startDate:     new Date('2024-07-15'),
      endDate:       new Date('2025-06-20'),
      semester1Start: new Date('2024-07-15'),
      semester1End:  new Date('2024-12-20'),
      semester2Start: new Date('2025-01-06'),
      semester2End:  new Date('2025-06-20'),
      isActive:      true,
    },
  });
  console.log('✅ Academic year created');

  // ─── 2. CLASSES ──────────────────────────────────────────────────────────────
  // Wali kelas IDs — reference usernames seeded in auth-service
  // In practice these come from user-service lookup. For seed we use descriptive names.
  const classData = [
    { code: 'X-IPA-1',   name: '10 IPA 1',  level: '10', major: 'IPA',  waliKelasName: 'Budi Santoso, S.Pd'  },
    { code: 'X-IPS-1',   name: '10 IPS 1',  level: '10', major: 'IPS',  waliKelasName: 'Ani Rahayu, S.Pd'    },
    { code: 'XI-IPA-1',  name: '11 IPA 1',  level: '11', major: 'IPA',  waliKelasName: 'Rudi Hartono, S.Pd'  },
    { code: 'XI-IPS-1',  name: '11 IPS 1',  level: '11', major: 'IPS',  waliKelasName: null                   },
    { code: 'XII-IPA-1', name: '12 IPA 1',  level: '12', major: 'IPA',  waliKelasName: null                   },
    { code: 'XII-IPS-1', name: '12 IPS 1',  level: '12', major: 'IPS',  waliKelasName: null                   },
  ];

  const classMap: Record<string, string> = {};
  for (const c of classData) {
    const cls = await prisma.class.upsert({
      where:  { code_academicYear: { code: c.code, academicYear: AY } },
      update: { waliKelasName: c.waliKelasName },
      create: {
        code:         c.code,
        name:         c.name,
        level:        c.level,
        major:        c.major,
        academicYear: AY,
        capacity:     36,
        currentTotal: 0,
        waliKelasName: c.waliKelasName,
        isActive:     true,
        createdBy:    'SYSTEM',
      },
    });
    classMap[c.code] = cls.id;
  }
  console.log('✅ Classes created:', Object.keys(classMap).join(', '));

  // ─── 3. STUDENTS ─────────────────────────────────────────────────────────────
  // parentEmail maps which ortu user is linked
  const studentsData = [
    {
      nisn: '0012345601', nis: 'S001', name: 'Andi Pratama',
      classCode: 'X-IPA-1', gender: 'MALE' as const,
      birthPlace: 'Nganjuk', birthDate: new Date('2007-03-15'),
      religion: 'ISLAM' as const, address: 'Jl. Merdeka No. 1',
      city: 'Nganjuk', province: 'Jawa Timur',
      fatherName: 'Ali Mahmud', motherName: 'Fatimah',
      academicYear: AY, entryYear: '2024', entryDate: new Date('2024-07-15'),
      email: 'andi.siswa@sman1berbek.sch.id', // linked to SISWA user
    },
    {
      nisn: '0012345602', nis: 'S002', name: 'Rina Wulandari',
      classCode: 'X-IPA-1', gender: 'FEMALE' as const,
      birthPlace: 'Nganjuk', birthDate: new Date('2007-05-20'),
      religion: 'ISLAM' as const, address: 'Jl. Pahlawan No. 5',
      city: 'Nganjuk', province: 'Jawa Timur',
      fatherName: 'Hasan Basri', motherName: 'Siti Aisyah',
      academicYear: AY, entryYear: '2024', entryDate: new Date('2024-07-15'),
      email: 'rina.siswa@sman1berbek.sch.id',
    },
    {
      nisn: '0012345603', nis: 'S003', name: 'Fajar Nugroho',
      classCode: 'X-IPS-1', gender: 'MALE' as const,
      birthPlace: 'Nganjuk', birthDate: new Date('2007-08-10'),
      religion: 'ISLAM' as const, address: 'Jl. Kenangan No. 12',
      city: 'Nganjuk', province: 'Jawa Timur',
      fatherName: 'Nugroho Wibowo', motherName: 'Sri Wahyuni',
      academicYear: AY, entryYear: '2024', entryDate: new Date('2024-07-15'),
      email: 'fajar.siswa@sman1berbek.sch.id',
    },
    {
      nisn: '0012345604', nis: 'S004', name: 'Dewi Rahmawati',
      classCode: 'XI-IPA-1', gender: 'FEMALE' as const,
      birthPlace: 'Kediri', birthDate: new Date('2006-02-28'),
      religion: 'ISLAM' as const, address: 'Jl. Mawar No. 3',
      city: 'Nganjuk', province: 'Jawa Timur',
      fatherName: 'Rahmad Hidayat', motherName: 'Dewi Susanti',
      academicYear: AY, entryYear: '2023', entryDate: new Date('2023-07-15'),
    },
    {
      nisn: '0012345605', nis: 'S005', name: 'Bima Sakti',
      classCode: 'XI-IPS-1', gender: 'MALE' as const,
      birthPlace: 'Madiun', birthDate: new Date('2006-11-05'),
      religion: 'ISLAM' as const, address: 'Jl. Anggrek No. 7',
      city: 'Nganjuk', province: 'Jawa Timur',
      fatherName: 'Sakti Wijaya', motherName: 'Lestari',
      academicYear: AY, entryYear: '2023', entryDate: new Date('2023-07-15'),
    },
    {
      nisn: '0012345606', nis: 'S006', name: 'Putri Maharani',
      classCode: 'XII-IPA-1', gender: 'FEMALE' as const,
      birthPlace: 'Surabaya', birthDate: new Date('2005-07-14'),
      religion: 'ISLAM' as const, address: 'Jl. Dahlia No. 2',
      city: 'Nganjuk', province: 'Jawa Timur',
      fatherName: 'Maharani Putra', motherName: 'Indah Sari',
      academicYear: AY, entryYear: '2022', entryDate: new Date('2022-07-15'),
    },
  ];

  for (const s of studentsData) {
    const classId = classMap[s.classCode];
    const cls = classData.find(c => c.code === s.classCode);

    await prisma.student.upsert({
      where:  { nisn: s.nisn },
      update: { totalPoints: 100 },
      create: {
        nisn:          s.nisn,
        nis:           s.nis,
        name:          s.name,
        classId:       classId,
        className:     cls?.name ?? s.classCode,
        classLevel:    cls?.level ?? '10',
        classMajor:    cls?.major,
        gender:        s.gender,
        birthPlace:    s.birthPlace,
        birthDate:     s.birthDate,
        religion:      s.religion,
        address:       s.address,
        city:          s.city,
        province:      s.province,
        fatherName:    s.fatherName,
        motherName:    s.motherName,
        academicYear:  s.academicYear,
        entryYear:     s.entryYear,
        entryDate:     s.entryDate,
        totalPoints:   100,
        positivePoints: 0,
        negativePoints: 0,
        status:        'ACTIVE',
        isActive:      true,
        createdBy:     'SYSTEM',
      },
    });
  }
  console.log('✅ Students created:', studentsData.length);
  console.log('✅ Student-service seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
