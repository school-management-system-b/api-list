export const violationCategories = [
  {
    code: 'PELANGGARAN_KEDISIPLINAN',
    name: 'Pelanggaran Kedisiplinan',
    type: 'VIOLATION',
    icon: 'Shield',
    order: 1,
    children: [
      {
        code: 'TERLAMBAT_MASUK',
        name: 'Terlambat Masuk Sekolah',
        description: 'Siswa datang terlambat ke sekolah',
        severity: 'RINGAN',
        defaultPoints: 5,
        sanctionTemplate: '- Peringatan lisan\n- Surat pernyataan',
        icon: 'Clock',
      },
      {
        code: 'TIDAK_PAKAI_SERAGAM',
        name: 'Tidak Memakai Seragam Lengkap',
        severity: 'SEDANG',
        defaultPoints: 10,
        sanctionTemplate: '- Teguran tertulis\n- Panggilan orang tua jika berulang',
        icon: 'Shirt',
      },
    ],
  },
  {
    code: 'PELANGGARAN_AKADEMIK',
    name: 'Pelanggaran Akademik',
    type: 'VIOLATION',
    icon: 'BookOpen',
    order: 2,
    children: [
      {
        code: 'TIDAK_MENGERJAKAN_PR',
        name: 'Tidak Mengerjakan PR/Tugas',
        severity: 'RINGAN',
        defaultPoints: 5,
        icon: 'FileX',
      },
    ],
  },
];

export const achievementCategories = [
  {
    code: 'PRESTASI_AKADEMIK',
    name: 'Prestasi Akademik',
    type: 'ACHIEVEMENT',
    achievementType: 'ACADEMIC',
    icon: 'GraduationCap',
    order: 1,
    children: [
      {
        code: 'OLIMPIADE_MATEMATIKA',
        name: 'Olimpiade Matematika',
        achievementType: 'ACADEMIC',
        basePoints: 50,
        icon: 'Calculator',
      },
    ],
  },
];
