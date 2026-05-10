import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Achievement-service seed started...');

  const AY  = '2024/2025';
  const SEM = 1;

  const achievements = [
    {
      // APPROVED_BK - Juara 1 Olimpiade Matematika Tingkat Kabupaten
      studentId:    'seed-student-001',
      studentNisn:  '0012345601',
      studentName:  'Andi Pratama',
      studentClass: '10 IPA 1',
      reportedBy:   'seed-gurumapel-001',
      reportedByName: 'Drs. Ahmad Fauzi',
      reporterRole: 'GURUMAPEL',
      categoryId:   'seed-cat-ach-001',
      categoryCode: 'ACH-AKD-001',
      categoryName: 'Olimpiade Matematika',
      categoryType: 'ACADEMIC' as const,
      title:        'Juara 1 Olimpiade Matematika Tingkat Kabupaten Nganjuk',
      description:  'Siswa berhasil meraih juara 1 dalam olimpiade matematika tingkat kabupaten yang diselenggarakan oleh Dinas Pendidikan Kabupaten Nganjuk.',
      achievementDate: new Date('2025-01-25'),
      location:     'Aula SMAN 1 Nganjuk',
      organizer:    'Dinas Pendidikan Kabupaten Nganjuk',
      level:        'KABUPATEN' as const,
      rank:         'JUARA_1' as const,
      isTeamAchievement: false,
      points:       100,
      basePoints:   50,
      levelMultiplier: 2.0,
      rankMultiplier:  2.0,
      status:       'APPROVED_BK' as const,
      approvedAt:   new Date('2025-01-27'),
      approvedByName: 'Sri Sari Dewi, S.Pd',
      bkNotes:      'Prestasi luar biasa! Bangga dengan pencapaian siswa ini.',
      isPublished:  true,
      publishedAt:  new Date('2025-01-28'),
      academicYear: AY,
      semester:     SEM,
    },
    {
      // PENDING - Baru diajukan
      studentId:    'seed-student-002',
      studentNisn:  '0012345602',
      studentName:  'Rina Wulandari',
      studentClass: '10 IPA 1',
      reportedBy:   'seed-walikelas-001',
      reportedByName: 'Budi Santoso, S.Pd',
      reporterRole: 'WALIKELAS',
      categoryId:   'seed-cat-ach-002',
      categoryCode: 'ACH-SEN-003',
      categoryName: 'Lomba Tari',
      categoryType: 'ARTS' as const,
      title:        'Juara 2 Festival Tari Pelajar Tingkat Kecamatan',
      description:  'Siswa berhasil meraih juara 2 dalam festival tari pelajar yang diselenggarakan oleh Kecamatan Berbek.',
      achievementDate: new Date('2025-02-10'),
      location:     'Balai Desa Berbek',
      organizer:    'Kecamatan Berbek',
      level:        'KECAMATAN' as const,
      rank:         'JUARA_2' as const,
      isTeamAchievement: false,
      points:       30,
      basePoints:   25,
      levelMultiplier: 1.5,
      rankMultiplier:  1.5,
      status:       'PENDING' as const,
      isPublished:  false,
      academicYear: AY,
      semester:     SEM,
    },
    {
      // APPROVED_WALI - Disetujui wali kelas, menunggu BK
      studentId:    'seed-student-003',
      studentNisn:  '0012345603',
      studentName:  'Fajar Nugroho',
      studentClass: '10 IPS 1',
      reportedBy:   'seed-walikelas-002',
      reportedByName: 'Ani Rahayu, S.Pd',
      reporterRole: 'WALIKELAS',
      categoryId:   'seed-cat-ach-003',
      categoryCode: 'ACH-OLR-001',
      categoryName: 'Kejuaraan Sepak Bola',
      categoryType: 'SPORTS' as const,
      title:        'Juara 3 Turnamen Sepak Bola Pelajar Se-Kabupaten',
      description:  'Tim sepak bola sekolah berhasil meraih juara 3 dalam turnamen bergengsi tingkat kabupaten. Fajar berperan sebagai striker utama.',
      achievementDate: new Date('2025-01-30'),
      location:     'Stadion Mini Kabupaten Nganjuk',
      organizer:    'KONI Kabupaten Nganjuk',
      level:        'KABUPATEN' as const,
      rank:         'JUARA_3' as const,
      isTeamAchievement: true,
      teamName:     'Tim Sepak Bola SMAN 1 Berbek',
      studentRole:  'Striker',
      points:       38,
      basePoints:   30,
      levelMultiplier: 2.0,
      rankMultiplier:  1.25,
      status:       'APPROVED_WALI' as const,
      isPublished:  false,
      academicYear: AY,
      semester:     SEM,
    },
    {
      // REJECTED
      studentId:    'seed-student-004',
      studentNisn:  '0012345604',
      studentName:  'Dewi Rahmawati',
      studentClass: '11 IPA 1',
      reportedBy:   'seed-walikelas-003',
      reportedByName: 'Rudi Hartono, S.Pd',
      reporterRole: 'WALIKELAS',
      categoryId:   'seed-cat-ach-004',
      categoryCode: 'ACH-TKN-001',
      categoryName: 'Lomba Robotik',
      categoryType: 'TECHNOLOGY' as const,
      title:        'Peserta Lomba Robotik Nasional',
      description:  'Siswa mengikuti lomba robotik tingkat nasional sebagai peserta.',
      achievementDate: new Date('2024-12-01'),
      location:     'Jakarta',
      organizer:    'Kemendikbudristek',
      level:        'NASIONAL' as const,
      rank:         'PESERTA' as const,
      isTeamAchievement: false,
      points:       20,
      basePoints:   40,
      levelMultiplier: 4.0,
      rankMultiplier:  0.5,
      status:       'REJECTED' as const,
      rejectedAt:   new Date('2024-12-05'),
      rejectedByName: 'Sri Sari Dewi, S.Pd',
      rejectionReason: 'Bukti sertifikat tidak terlampir. Mohon lengkapi dokumen pendukung.',
      isPublished:  false,
      academicYear: AY,
      semester:     SEM,
    },
  ];

  for (const a of achievements) {
    const existing = await prisma.achievement.findFirst({
      where: {
        studentNisn:     a.studentNisn,
        achievementDate: a.achievementDate,
        categoryCode:    a.categoryCode,
      },
    });

    if (!existing) {
      await prisma.achievement.create({
        data: {
          ...a,
          createdBy: a.reportedBy,
        },
      });
    }
  }

  console.log('✅ Achievements seeded:', achievements.length);

  // ─── STATISTICS ──────────────────────────────────────────────────────────────
  const statsData = [
    {
      studentId: 'seed-student-001', studentName: 'Andi Pratama',
      classId: 'seed-class-001', className: '10 IPA 1',
      totalAchievements: 1, approvedCount: 1, pendingCount: 0, rejectedCount: 0,
      totalPoints: 100, academicCount: 1, nonAcademicCount: 0,
      nationalCount: 0, kabupatenCount: 1, firstPlaceCount: 1,
      academicYear: AY, semester: SEM,
    },
    {
      studentId: 'seed-student-002', studentName: 'Rina Wulandari',
      classId: 'seed-class-001', className: '10 IPA 1',
      totalAchievements: 1, approvedCount: 0, pendingCount: 1, rejectedCount: 0,
      totalPoints: 0, artsCount: 1,
      academicYear: AY, semester: SEM,
    },
    {
      studentId: 'seed-student-003', studentName: 'Fajar Nugroho',
      classId: 'seed-class-002', className: '10 IPS 1',
      totalAchievements: 1, approvedCount: 0, pendingCount: 1, rejectedCount: 0,
      totalPoints: 0, sportsCount: 1,
      academicYear: AY, semester: SEM,
    },
  ];

  for (const stat of statsData) {
    await prisma.achievementStatistics.upsert({
      where: {
        studentId_academicYear_semester: {
          studentId:   stat.studentId,
          academicYear: AY,
          semester:    SEM,
        },
      },
      update: stat,
      create: {
        ...stat,
        sportsCount:        (stat as any).sportsCount ?? 0,
        artsCount:          (stat as any).artsCount ?? 0,
        scienceCount:       0,
        technologyCount:    0,
        schoolCount:        0,
        districtCount:      0,
        regencyCount:       (stat as any).kabupatenCount ?? 0,
        provinceCount:      0,
        nationalCount:      (stat as any).nationalCount ?? 0,
        internationalCount: 0,
        secondPlaceCount:   0,
        thirdPlaceCount:    0,
        firstPlaceCount:    (stat as any).firstPlaceCount ?? 0,
        isTopAchiever:      (stat as any).firstPlaceCount > 0,
      },
    });
  }

  console.log('✅ Achievement statistics seeded');
  console.log('✅ Achievement-service seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
