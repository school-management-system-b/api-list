import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Schedule-service seed started...');

  // ─── SUBJECTS ─────────────────────────────────────────────────────────────────
  const subjects = [
    { code: 'MTK',  name: 'Matematika'               },
    { code: 'BIO',  name: 'Biologi'                  },
    { code: 'FIS',  name: 'Fisika'                   },
    { code: 'KIM',  name: 'Kimia'                    },
    { code: 'BIN',  name: 'Bahasa Indonesia'          },
    { code: 'BING', name: 'Bahasa Inggris'            },
    { code: 'SEJ',  name: 'Sejarah'                  },
    { code: 'GEO',  name: 'Geografi'                 },
    { code: 'EKO',  name: 'Ekonomi'                  },
    { code: 'PJOK', name: 'Pendidikan Jasmani'       },
    { code: 'PAI',  name: 'Pendidikan Agama Islam'   },
    { code: 'PPKn', name: 'PPKn'                     },
    { code: 'TIK',  name: 'Teknologi Informasi'      },
    { code: 'SBK',  name: 'Seni Budaya'              },
  ];

  const subjectMap: Record<string, string> = {};
  for (const s of subjects) {
    const sub = await prisma.subject.upsert({
      where:  { code: s.code },
      update: { name: s.name },
      create: { code: s.code, name: s.name, createdBy: 'SYSTEM' },
    });
    subjectMap[s.code] = sub.id;
  }
  console.log('✅ Subjects created:', subjects.length);

  // ─── SCHEDULES (X IPA 1 sample) ───────────────────────────────────────────────
  const schedules = [
    { classId: 'seed-class-001', className: '10 IPA 1', subjectCode: 'MTK',  day: 'MONDAY' as const,    startTime: '07:00', endTime: '08:30', teacherId: 'seed-gurumapel-001', teacherName: 'Drs. Ahmad Fauzi'   },
    { classId: 'seed-class-001', className: '10 IPA 1', subjectCode: 'BIO',  day: 'MONDAY' as const,    startTime: '08:30', endTime: '10:00', teacherId: 'seed-gurumapel-002', teacherName: 'Dra. Siti Nurhaliza' },
    { classId: 'seed-class-001', className: '10 IPA 1', subjectCode: 'FIS',  day: 'TUESDAY' as const,   startTime: '07:00', endTime: '08:30', teacherId: 'seed-gurumapel-003', teacherName: 'Drs. Wahyu Prasetyo' },
    { classId: 'seed-class-001', className: '10 IPA 1', subjectCode: 'BIN',  day: 'TUESDAY' as const,   startTime: '08:30', endTime: '10:00', teacherId: 'seed-gurumapel-001', teacherName: 'Drs. Ahmad Fauzi'   },
    { classId: 'seed-class-001', className: '10 IPA 1', subjectCode: 'BING', day: 'WEDNESDAY' as const, startTime: '07:00', endTime: '08:30', teacherId: 'seed-gurumapel-002', teacherName: 'Dra. Siti Nurhaliza' },
    { classId: 'seed-class-001', className: '10 IPA 1', subjectCode: 'MTK',  day: 'THURSDAY' as const,  startTime: '07:00', endTime: '08:30', teacherId: 'seed-gurumapel-001', teacherName: 'Drs. Ahmad Fauzi'   },
    { classId: 'seed-class-001', className: '10 IPA 1', subjectCode: 'PJOK', day: 'FRIDAY' as const,    startTime: '07:00', endTime: '08:30', teacherId: 'seed-gurumapel-003', teacherName: 'Drs. Wahyu Prasetyo' },
  ];

  for (const sch of schedules) {
    const subjectId = subjectMap[sch.subjectCode];
    if (!subjectId) continue;

    await prisma.schedule.create({
      data: {
        classId:     sch.classId,
        className:   sch.className,
        subjectId:   subjectId,
        subjectName: subjects.find(s => s.code === sch.subjectCode)?.name,
        teacherId:   sch.teacherId,
        teacherName: sch.teacherName,
        day:         sch.day,
        startTime:   sch.startTime,
        endTime:     sch.endTime,
        academicYear: '2024/2025',
        semester:    1,
        isActive:    true,
      },
    });
  }
  console.log('✅ Schedules created:', schedules.length);
  console.log('✅ Schedule-service seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
