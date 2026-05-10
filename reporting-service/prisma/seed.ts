import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Reporting-service seed started...');

  // ─── NOTIFICATION TEMPLATES ───────────────────────────────────────────────────
  const templates = [
    {
      code:     'VIOLATION_CREATED',
      name:     'Notifikasi Pelanggaran Baru',
      subject:  'Laporan Pelanggaran - {{studentName}}',
      body:     'Yth. Orang Tua/Wali {{studentName}},\n\nDengan hormat kami sampaikan bahwa putra/putri Anda {{studentName}} kelas {{studentClass}} telah tercatat melakukan pelanggaran:\n\nJenis Pelanggaran: {{violationType}}\nTanggal: {{date}}\nPoin: -{{points}}\n\nMohon untuk memberikan perhatian lebih kepada putra/putri Anda.\n\nHormat kami,\nGuru BK SMAN 1 Berbek',
      channels: ['INTERNAL', 'EMAIL'],
    },
    {
      code:     'VIOLATION_APPROVED_BK',
      name:     'Pelanggaran Disetujui BK',
      subject:  'Pelanggaran Dikonfirmasi - {{studentName}}',
      body:     'Pelanggaran siswa {{studentName}} telah dikonfirmasi oleh BK. Poin -{{points}} telah diterapkan.',
      channels: ['INTERNAL'],
    },
    {
      code:     'ACHIEVEMENT_CREATED',
      name:     'Notifikasi Prestasi Baru',
      subject:  'Prestasi Baru - {{studentName}}',
      body:     'Selamat! {{studentName}} kelas {{studentClass}} telah meraih prestasi:\n\n{{title}}\n\nPoin: +{{points}}\n\nBangga atas pencapaian putra/putri Anda!\n\nHormat kami,\nSMAN 1 Berbek',
      channels: ['INTERNAL', 'EMAIL'],
    },
    {
      code:     'ACHIEVEMENT_APPROVED_BK',
      name:     'Prestasi Disetujui BK',
      subject:  'Prestasi Dikonfirmasi - {{studentName}}',
      body:     'Prestasi {{studentName}} telah diverifikasi oleh BK. Poin +{{points}} telah ditambahkan.',
      channels: ['INTERNAL'],
    },
    {
      code:     'PARENT_SUMMON',
      name:     'Surat Panggilan Orang Tua',
      subject:  '⚠️ Panggilan Orang Tua - {{studentName}}',
      body:     'Yth. Orang Tua/Wali {{studentName}},\n\nDengan hormat, kami mengundang Bapak/Ibu untuk hadir ke sekolah guna membahas perkembangan putra/putri Anda.\n\nNama Siswa : {{studentName}}\nKelas      : {{studentClass}}\nTotal Poin : {{totalPoints}}\n\nKami mohon kehadiran Bapak/Ibu pada:\nHari/Tanggal : (akan dikonfirmasi)\nTempat       : Ruang BK SMAN 1 Berbek\n\nDemikian surat panggilan ini kami sampaikan. Atas perhatian dan kerjasamanya kami ucapkan terima kasih.\n\nHormat kami,\nGuru BK SMAN 1 Berbek',
      channels: ['EMAIL', 'WHATSAPP'],
    },
    {
      code:     'ACCOUNT_ACTIVATED',
      name:     'Aktivasi Akun',
      subject:  'Selamat Datang di SMAN 1 Berbek - Informasi Akun',
      body:     'Halo {{name}},\n\nAkun Anda untuk sistem Poin Siswa SMAN 1 Berbek telah berhasil dibuat.\n\nDetail Login:\nUsername : {{username}}\nEmail    : {{email}}\nPassword : {{password}}\n\nSilakan login di: {{loginUrl}}\n\nAnda diminta untuk mengganti password setelah login pertama kali.\n\nHormat kami,\nSMAN 1 Berbek',
      channels: ['EMAIL'],
    },
    {
      code:     'WELCOME_SISWA',
      name:     'Selamat Datang Siswa',
      subject:  'Selamat Datang di SMAN 1 Berbek!',
      body:     'Halo {{name}},\n\nSelamat datang di SMAN 1 Berbek! Akun poin siswa Anda telah aktif.\n\nUsername: {{username}}\nPassword: {{password}}\n\nLogin di: {{loginUrl}}\n\nSemangat belajar ya! 🎓',
      channels: ['EMAIL'],
    },
  ];

  for (const t of templates) {
    await prisma.notificationTemplate.upsert({
      where:  { code: t.code },
      update: { name: t.name, subject: t.subject, body: t.body },
      create: { ...t, isActive: true },
    });
  }
  console.log('✅ Notification templates created:', templates.length);

  // ─── SAMPLE NOTIFICATIONS ────────────────────────────────────────────────────
  const sampleNotifications = [
    {
      userId:        'seed-user-superadmin',
      type:          'SYSTEM',
      title:         'Sistem berhasil diinisialisasi',
      message:       'Seed data berhasil dimuat. Semua service siap digunakan.',
      category:      'SYSTEM' as const,
      recipientName: 'Administrator',
      status:        'SENT' as const,
      readAt:        new Date(),
    },
    {
      userId:        'seed-user-bk',
      type:          'VIOLATION_CREATED',
      title:         'Pelanggaran Baru: Rina Wulandari',
      message:       'Pelanggaran baru dari Rina Wulandari (10 IPA 1) menunggu persetujuan Anda.',
      category:      'VIOLATION' as const,
      recipientName: 'Sri Sari Dewi, S.Pd',
      data:          { violationId: 'seed-violation-002', studentName: 'Rina Wulandari' },
      status:        'SENT' as const,
    },
    {
      userId:        'seed-user-bk',
      type:          'ACHIEVEMENT_CREATED',
      title:         'Prestasi Baru: Rina Wulandari',
      message:       'Prestasi baru dari Rina Wulandari menunggu verifikasi BK.',
      category:      'ACHIEVEMENT' as const,
      recipientName: 'Sri Sari Dewi, S.Pd',
      data:          { achievementId: 'seed-achievement-002', studentName: 'Rina Wulandari' },
      status:        'SENT' as const,
    },
  ];

  for (const n of sampleNotifications) {
    await prisma.notification.create({ data: n });
  }
  console.log('✅ Sample notifications created');
  console.log('✅ Reporting-service seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
