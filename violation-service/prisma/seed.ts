import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Violation-service seed started...');

  const AY  = '2024/2025';
  const SEM = 1;

  // Sample violations — uses denormalized data (no FK to other services)
  const violations = [
    {
      // Violation 1: RINGAN - already APPROVED_BK
      studentId:    'seed-student-001',
      studentNisn:  '0012345601',
      studentName:  'Andi Pratama',
      studentClass: '10 IPA 1',
      reportedBy:   'seed-gurumapel-001',
      reportedByName: 'Drs. Ahmad Fauzi',
      reporterRole: 'GURUMAPEL',
      categoryId:   'seed-cat-vio-001',
      categoryCode: 'VIO-R-001',
      categoryName: 'Terlambat Masuk Sekolah',
      categorySeverity: 'RINGAN' as const,
      description:  'Siswa terlambat 20 menit tanpa keterangan yang jelas',
      violationDate: new Date('2025-01-10'),
      points:       5,
      status:       'APPROVED_BK' as const,
      academicYear: AY,
      semester:     SEM,
    },
    {
      // Violation 2: SEDANG - PENDING (awaiting approval)
      studentId:    'seed-student-002',
      studentNisn:  '0012345602',
      studentName:  'Rina Wulandari',
      studentClass: '10 IPA 1',
      reportedBy:   'seed-walikelas-001',
      reportedByName: 'Budi Santoso, S.Pd',
      reporterRole: 'WALIKELAS',
      categoryId:   'seed-cat-vio-002',
      categoryCode: 'VIO-S-001',
      categoryName: 'Tidak Masuk Tanpa Keterangan',
      categorySeverity: 'SEDANG' as const,
      description:  'Siswa tidak masuk sekolah tanpa memberikan surat keterangan selama 2 hari',
      violationDate: new Date('2025-02-05'),
      points:       15,
      status:       'PENDING' as const,
      academicYear: AY,
      semester:     SEM,
    },
    {
      // Violation 3: RINGAN - APPROVED_WALI
      studentId:    'seed-student-003',
      studentNisn:  '0012345603',
      studentName:  'Fajar Nugroho',
      studentClass: '10 IPS 1',
      reportedBy:   'seed-walikelas-002',
      reportedByName: 'Ani Rahayu, S.Pd',
      reporterRole: 'WALIKELAS',
      categoryId:   'seed-cat-vio-003',
      categoryCode: 'VIO-R-006',
      categoryName: 'Gadget Aktif Saat KBM',
      categorySeverity: 'RINGAN' as const,
      description:  'Siswa menggunakan handphone saat pelajaran matematika berlangsung',
      violationDate: new Date('2025-01-20'),
      points:       10,
      status:       'APPROVED_WALI' as const,
      academicYear: AY,
      semester:     SEM,
      approvedByWaliAt:   new Date('2025-01-21'),
      approvedByWaliName: 'Ani Rahayu, S.Pd',
      waliKelasNotes:     'Sudah dikonfirmasi, HP disita 1 hari',
    },
    {
      // Violation 4: BERAT - REJECTED
      studentId:    'seed-student-001',
      studentNisn:  '0012345601',
      studentName:  'Andi Pratama',
      studentClass: '10 IPA 1',
      reportedBy:   'seed-gurumapel-001',
      reportedByName: 'Drs. Ahmad Fauzi',
      reporterRole: 'GURUMAPEL',
      categoryId:   'seed-cat-vio-004',
      categoryCode: 'VIO-B-003',
      categoryName: 'Pencurian',
      categorySeverity: 'BERAT' as const,
      description:  'Dugaan pencurian buku teman sekelas',
      violationDate: new Date('2025-01-15'),
      points:       75,
      status:       'REJECTED' as const,
      rejectedAt:   new Date('2025-01-16'),
      rejectedByName: 'Sri Sari Dewi, S.Pd',
      rejectionReason: 'Setelah penyelidikan, tidak terbukti ada pencurian. Buku ditemukan di laci sendiri.',
      academicYear: AY,
      semester:     SEM,
    },
  ];

  for (const v of violations) {
    // Use findFirst + create to avoid complex unique issues
    const existing = await prisma.violation.findFirst({
      where: {
        studentNisn:   v.studentNisn,
        violationDate: v.violationDate,
        categoryCode:  v.categoryCode,
      },
    });

    if (!existing) {
      await prisma.violation.create({ data: { ...v } });
    }
  }

  console.log('✅ Violations seeded:', violations.length);

  // ─── STATISTICS ──────────────────────────────────────────────────────────────
  const statsData = [
    {
      studentId: 'seed-student-001', studentName: 'Andi Pratama',
      classId: 'seed-class-001', className: '10 IPA 1',
      totalViolations: 2, approvedCount: 1, rejectedCount: 1, pendingCount: 0,
      totalPoints: 5, ringanCount: 1, sedangCount: 0, beratCount: 0,
      academicYear: AY, semester: SEM,
    },
    {
      studentId: 'seed-student-002', studentName: 'Rina Wulandari',
      classId: 'seed-class-001', className: '10 IPA 1',
      totalViolations: 1, pendingCount: 1, approvedCount: 0, rejectedCount: 0,
      totalPoints: 0, ringanCount: 0, sedangCount: 1, beratCount: 0,
      academicYear: AY, semester: SEM,
    },
    {
      studentId: 'seed-student-003', studentName: 'Fajar Nugroho',
      classId: 'seed-class-002', className: '10 IPS 1',
      totalViolations: 1, pendingCount: 0, approvedCount: 1, rejectedCount: 0,
      totalPoints: 10, ringanCount: 1, sedangCount: 0, beratCount: 0,
      academicYear: AY, semester: SEM,
    },
  ];

  for (const stat of statsData) {
    await prisma.violationStatistics.upsert({
      where: { studentId_academicYear_semester: { studentId: stat.studentId, academicYear: AY, semester: SEM } },
      update: stat,
      create: { ...stat, appealedCount: 0 },
    });
  }

  console.log('✅ Violation statistics seeded');
  console.log('✅ Violation-service seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
