import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Category-service seed started...');

  const AY = '2024/2025';

  // ─── 1. CLASSES (mirrored from student-service) ──────────────────────────────
  const classData = [
    { code: 'X-IPA-1',   name: '10 IPA 1',  level: '10', major: 'IPA',  waliKelasName: 'Budi Santoso, S.Pd'  },
    { code: 'X-IPS-1',   name: '10 IPS 1',  level: '10', major: 'IPS',  waliKelasName: 'Ani Rahayu, S.Pd'    },
    { code: 'XI-IPA-1',  name: '11 IPA 1',  level: '11', major: 'IPA',  waliKelasName: 'Rudi Hartono, S.Pd'  },
    { code: 'XI-IPS-1',  name: '11 IPS 1',  level: '11', major: 'IPS',  waliKelasName: null                   },
    { code: 'XII-IPA-1', name: '12 IPA 1',  level: '12', major: 'IPA',  waliKelasName: null                   },
    { code: 'XII-IPS-1', name: '12 IPS 1',  level: '12', major: 'IPS',  waliKelasName: null                   },
  ];

  for (const c of classData) {
    await prisma.class.upsert({
      where:  { code_academicYear: { code: c.code, academicYear: AY } },
      update: { waliKelasName: c.waliKelasName },
      create: {
        code:          c.code,
        name:          c.name,
        level:         c.level,
        major:         c.major,
        academicYear:  AY,
        capacity:      36,
        currentTotal:  0,
        waliKelasName: c.waliKelasName,
        isActive:      true,
        createdBy:     'SYSTEM',
      },
    });
  }
  console.log('✅ Classes synced');

  // ─── 2. SUBJECTS ─────────────────────────────────────────────────────────────
  const subjects = [
    { code: 'MTK',  name: 'Matematika'            },
    { code: 'BIO',  name: 'Biologi'               },
    { code: 'FIS',  name: 'Fisika'                },
    { code: 'KIM',  name: 'Kimia'                 },
    { code: 'BIN',  name: 'Bahasa Indonesia'       },
    { code: 'BING', name: 'Bahasa Inggris'         },
    { code: 'SEJ',  name: 'Sejarah'               },
    { code: 'GEO',  name: 'Geografi'              },
    { code: 'EKO',  name: 'Ekonomi'               },
    { code: 'SOS',  name: 'Sosiologi'             },
    { code: 'PJOK', name: 'Pendidikan Jasmani'    },
    { code: 'PKWU', name: 'Prakarya & Kewirausahaan' },
    { code: 'PAI',  name: 'Pendidikan Agama Islam' },
    { code: 'PPKn', name: 'PPKn'                  },
    { code: 'TIK',  name: 'Teknologi Informasi'   },
    { code: 'SBK',  name: 'Seni Budaya'           },
  ];

  for (const s of subjects) {
    await prisma.subject.upsert({
      where:  { code: s.code },
      update: { name: s.name },
      create: { code: s.code, name: s.name, isActive: true, createdBy: 'SYSTEM' },
    });
  }
  console.log('✅ Subjects created:', subjects.length);

  // ─── 3. VIOLATION CATEGORIES ─────────────────────────────────────────────────
  const violationCategories = [
    // RINGAN
    { code: 'VIO-R-001', name: 'Terlambat Masuk Sekolah',        severity: 'RINGAN' as const, defaultPoints: 5,  sanctionTemplate: 'Mendapat teguran lisan dari guru piket'          },
    { code: 'VIO-R-002', name: 'Tidak Memakai Seragam Lengkap',  severity: 'RINGAN' as const, defaultPoints: 5,  sanctionTemplate: 'Mendapat teguran lisan dan panggilan orang tua'   },
    { code: 'VIO-R-003', name: 'Tidak Mengerjakan PR',           severity: 'RINGAN' as const, defaultPoints: 5,  sanctionTemplate: 'Mengerjakan PR di sekolah'                         },
    { code: 'VIO-R-004', name: 'Membuang Sampah Sembarangan',    severity: 'RINGAN' as const, defaultPoints: 3,  sanctionTemplate: 'Membersihkan area yang dikotori'                   },
    { code: 'VIO-R-005', name: 'Tidak Membawa Buku Pelajaran',   severity: 'RINGAN' as const, defaultPoints: 3,  sanctionTemplate: 'Mendapat teguran lisan'                            },
    { code: 'VIO-R-006', name: 'Gadget Aktif Saat KBM',          severity: 'RINGAN' as const, defaultPoints: 10, sanctionTemplate: 'HP disita selama 1 hari'                           },
    // SEDANG
    { code: 'VIO-S-001', name: 'Tidak Masuk Tanpa Keterangan',   severity: 'SEDANG' as const, defaultPoints: 15, sanctionTemplate: 'Panggilan orang tua'                              },
    { code: 'VIO-S-002', name: 'Berkelahi Ringan',                severity: 'SEDANG' as const, defaultPoints: 20, sanctionTemplate: 'Surat perjanjian dan panggilan orang tua'          },
    { code: 'VIO-S-003', name: 'Merokok di Lingkungan Sekolah',  severity: 'SEDANG' as const, defaultPoints: 25, sanctionTemplate: 'Surat perjanjian dan skorsing 1 hari'              },
    { code: 'VIO-S-004', name: 'Merusak Fasilitas Sekolah',      severity: 'SEDANG' as const, defaultPoints: 20, sanctionTemplate: 'Mengganti kerusakan dan surat perjanjian'          },
    { code: 'VIO-S-005', name: 'Membolos Pelajaran',             severity: 'SEDANG' as const, defaultPoints: 15, sanctionTemplate: 'Panggilan orang tua dan tugas tambahan'            },
    // BERAT
    { code: 'VIO-B-001', name: 'Terlibat Perkelahian Massal',    severity: 'BERAT' as const,  defaultPoints: 50, sanctionTemplate: 'Skorsing dan surat perjanjian resmi'               },
    { code: 'VIO-B-002', name: 'Membawa/Mengonsumsi Narkoba',    severity: 'BERAT' as const,  defaultPoints: 100,sanctionTemplate: 'Dikeluarkan dari sekolah'                          },
    { code: 'VIO-B-003', name: 'Pencurian',                      severity: 'BERAT' as const,  defaultPoints: 75, sanctionTemplate: 'Skorsing dan proses hukum'                         },
    { code: 'VIO-B-004', name: 'Pelecehan Seksual',              severity: 'BERAT' as const,  defaultPoints: 100,sanctionTemplate: 'Dikeluarkan dari sekolah dan proses hukum'         },
  ];

  for (const cat of violationCategories) {
    await prisma.category.upsert({
      where:  { code: cat.code },
      update: { name: cat.name, severity: cat.severity, defaultPoints: cat.defaultPoints },
      create: {
        code:             cat.code,
        name:             cat.name,
        type:             'VIOLATION',
        severity:         cat.severity,
        defaultPoints:    cat.defaultPoints,
        sanctionTemplate: cat.sanctionTemplate,
        isActive:         true,
        isSystem:         false,
        createdBy:        'SYSTEM',
      },
    });
  }
  console.log('✅ Violation categories created:', violationCategories.length);

  // ─── 4. ACHIEVEMENT CATEGORIES ───────────────────────────────────────────────
  const achievementCategories = [
    { code: 'ACH-AKD-001', name: 'Olimpiade Matematika',     achievementType: 'ACADEMIC' as const,     basePoints: 50  },
    { code: 'ACH-AKD-002', name: 'Olimpiade IPA',            achievementType: 'ACADEMIC' as const,     basePoints: 50  },
    { code: 'ACH-AKD-003', name: 'Lomba Bahasa Inggris',     achievementType: 'ACADEMIC' as const,     basePoints: 40  },
    { code: 'ACH-OLR-001', name: 'Kejuaraan Sepak Bola',     achievementType: 'SPORTS' as const,       basePoints: 30  },
    { code: 'ACH-OLR-002', name: 'Kejuaraan Bulu Tangkis',   achievementType: 'SPORTS' as const,       basePoints: 30  },
    { code: 'ACH-OLR-003', name: 'Kejuaraan Renang',         achievementType: 'SPORTS' as const,       basePoints: 30  },
    { code: 'ACH-SEN-001', name: 'Lomba Seni Lukis',         achievementType: 'ARTS' as const,         basePoints: 25  },
    { code: 'ACH-SEN-002', name: 'Festival Musik',           achievementType: 'ARTS' as const,         basePoints: 25  },
    { code: 'ACH-SEN-003', name: 'Lomba Tari',               achievementType: 'ARTS' as const,         basePoints: 25  },
    { code: 'ACH-TKN-001', name: 'Lomba Robotik',            achievementType: 'TECHNOLOGY' as const,   basePoints: 40  },
    { code: 'ACH-TKN-002', name: 'Olimpiade Komputer',       achievementType: 'TECHNOLOGY' as const,   basePoints: 40  },
    { code: 'ACH-AGM-001', name: 'Musabaqah Tilawatil Quran',achievementType: 'RELIGIOUS' as const,    basePoints: 30  },
    { code: 'ACH-AGM-002', name: 'Lomba Ceramah Agama',      achievementType: 'RELIGIOUS' as const,    basePoints: 25  },
    { code: 'ACH-SOS-001', name: 'Lomba Kepemimpinan',       achievementType: 'SOCIAL' as const,       basePoints: 20  },
    { code: 'ACH-SOS-002', name: 'Kegiatan Sosial Terbaik',  achievementType: 'SOCIAL' as const,       basePoints: 20  },
  ];

  for (const cat of achievementCategories) {
    await prisma.category.upsert({
      where:  { code: cat.code },
      update: { name: cat.name, achievementType: cat.achievementType, basePoints: cat.basePoints },
      create: {
        code:            cat.code,
        name:            cat.name,
        type:            'ACHIEVEMENT',
        achievementType: cat.achievementType,
        basePoints:      cat.basePoints,
        defaultPoints:   cat.basePoints ?? 0,
        isActive:        true,
        isSystem:        false,
        createdBy:       'SYSTEM',
      },
    });
  }
  console.log('✅ Achievement categories created:', achievementCategories.length);

  // ─── 5. POINTS CONFIGURATION ─────────────────────────────────────────────────
  await prisma.pointsConfiguration.upsert({
    where:  { configKey: 'STARTING_POINTS' },
    update: {},
    create: {
      configKey:   'STARTING_POINTS',
      configValue: { value: 100 },
      description: 'Initial points for every student',
    },
  });

  await prisma.pointsConfiguration.upsert({
    where:  { configKey: 'LEVEL_MULTIPLIERS' },
    update: {},
    create: {
      configKey:   'LEVEL_MULTIPLIERS',
      configValue: {
        SEKOLAH:      1.0,
        KECAMATAN:    1.5,
        KABUPATEN:    2.0,
        PROVINSI:     3.0,
        NASIONAL:     4.0,
        INTERNASIONAL: 5.0,
      },
      description: 'Point multiplier per achievement level',
    },
  });

  await prisma.pointsConfiguration.upsert({
    where:  { configKey: 'RANK_MULTIPLIERS' },
    update: {},
    create: {
      configKey:   'RANK_MULTIPLIERS',
      configValue: {
        JUARA_1:      2.0,
        JUARA_2:      1.5,
        JUARA_3:      1.25,
        HARAPAN_1:    1.1,
        HARAPAN_2:    1.05,
        HARAPAN_3:    1.0,
        FINALIS:      0.75,
        PESERTA:      0.5,
        LULUS_SELEKSI: 0.5,
      },
      description: 'Point multiplier per achievement rank',
    },
  });

  console.log('✅ Points configuration created');
  console.log('✅ Category-service seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
