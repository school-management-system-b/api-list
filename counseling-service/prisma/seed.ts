import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Counseling-service seed started...');

  const sessions = [
    {
      studentId:    'seed-student-002',
      studentName:  'Rina Wulandari',
      studentClass: '10 IPA 1',
      counselorId:  'seed-user-bk',
      counselorName: 'Sri Sari Dewi, S.Pd',
      sessionDate:  new Date('2025-02-07T09:00:00'),
      startTime:    '09:00',
      endTime:      '10:00',
      type:         'INDIVIDUAL' as const,
      category:     'DISCIPLINARY' as const,
      subject:      'Tidak Masuk Tanpa Keterangan',
      description:  'Siswa dipanggil untuk mengklarifikasi ketidakhadiran selama 2 hari tanpa surat keterangan.',
      outcome:      'Siswa mengakui tidak masuk karena sakit namun tidak membawa surat. Orang tua sudah dikonfirmasi via telepon. Siswa berjanji akan membawa surat dokter.',
      needsParentCall: true,
      status:       'COMPLETED' as const,
      createdBy:    'seed-user-bk',
    },
    {
      studentId:    'seed-student-001',
      studentName:  'Andi Pratama',
      studentClass: '10 IPA 1',
      counselorId:  'seed-user-bk',
      counselorName: 'Sri Sari Dewi, S.Pd',
      sessionDate:  new Date('2025-03-01T10:00:00'),
      startTime:    '10:00',
      endTime:      '11:00',
      type:         'INDIVIDUAL' as const,
      category:     'ACADEMIC' as const,
      subject:      'Konsultasi Persiapan Olimpiade',
      description:  'Sesi konsultasi untuk mempersiapkan siswa mengikuti olimpiade matematika tingkat provinsi.',
      outcome:      'Siswa sangat termotivasi. Jadwal latihan tambahan sudah disepakati bersama guru matematika.',
      needsParentCall: false,
      status:       'COMPLETED' as const,
      createdBy:    'seed-user-bk',
    },
    {
      studentId:    'seed-student-005',
      studentName:  'Bima Sakti',
      studentClass: '11 IPS 1',
      counselorId:  'seed-user-bk',
      counselorName: 'Sri Sari Dewi, S.Pd',
      sessionDate:  new Date('2025-03-15T13:00:00'),
      startTime:    '13:00',
      endTime:      '14:00',
      type:         'INDIVIDUAL' as const,
      category:     'CAREER' as const,
      subject:      'Konsultasi Pemilihan Jurusan',
      description:  'Siswa meminta saran untuk pemilihan jurusan di perguruan tinggi.',
      needsParentCall: false,
      status:       'SCHEDULED' as const,
      createdBy:    'seed-user-bk',
    },
  ];

  for (const s of sessions) {
    await prisma.counselingSession.create({ data: s });
  }
  console.log('✅ Counseling sessions created:', sessions.length);
  console.log('✅ Counseling-service seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
