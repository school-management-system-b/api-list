import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// These IDs should match the user IDs created by auth-service seed.
// user-service seed can run after auth-service seed,
// or use known UUIDs for deterministic seeding.
// We use findFirst to look up by email from auth-service reference.
async function main() {
  console.log('🌱 User-service seed started...');

  // Profile data keyed by email (must match auth-service users)
  const profiles = [
    {
      email: 'admin@sman1berbek.sch.id',
      phone: '081234567890',
      position: 'Kepala Administrator',
      department: 'Administrasi',
      gender: 'MALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'bk.sari@sman1berbek.sch.id',
      phone: '081234567891',
      position: 'Guru Bimbingan Konseling',
      department: 'BK',
      gender: 'FEMALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'wk.budi@sman1berbek.sch.id',
      phone: '081234567892',
      position: 'Wali Kelas X IPA 1',
      department: 'Guru',
      gender: 'MALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'wk.ani@sman1berbek.sch.id',
      phone: '081234567893',
      position: 'Wali Kelas X IPS 1',
      department: 'Guru',
      gender: 'FEMALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'wk.rudi@sman1berbek.sch.id',
      phone: '081234567894',
      position: 'Wali Kelas XI IPA 1',
      department: 'Guru',
      gender: 'MALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'guru.matematika@sman1berbek.sch.id',
      phone: '081234567895',
      position: 'Guru Mata Pelajaran',
      department: 'Guru',
      mapel: 'Matematika',
      gender: 'MALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'guru.biologi@sman1berbek.sch.id',
      phone: '081234567896',
      position: 'Guru Mata Pelajaran',
      department: 'Guru',
      mapel: 'Biologi',
      gender: 'FEMALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'guru.fisika@sman1berbek.sch.id',
      phone: '081234567897',
      position: 'Guru Mata Pelajaran',
      department: 'Guru',
      mapel: 'Fisika',
      gender: 'MALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'ali.bapak@gmail.com',
      phone: '081234567898',
      gender: 'MALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'siti.ibu@gmail.com',
      phone: '081234567899',
      gender: 'FEMALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'hasan.wali@gmail.com',
      phone: '081234567900',
      gender: 'MALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'andi.siswa@sman1berbek.sch.id',
      phone: '081234567901',
      gender: 'MALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'rina.siswa@sman1berbek.sch.id',
      phone: '081234567902',
      gender: 'FEMALE' as const,
      religion: 'ISLAM' as const,
    },
    {
      email: 'fajar.siswa@sman1berbek.sch.id',
      phone: '081234567903',
      gender: 'MALE' as const,
      religion: 'ISLAM' as const,
    },
  ];

  // Map usernames from auth-service reference
  const usernameByEmail: Record<string, string> = {
    'admin@sman1berbek.sch.id':            'admin',
    'bk.sari@sman1berbek.sch.id':          'bk.sari',
    'wk.budi@sman1berbek.sch.id':          'wk.budi',
    'wk.ani@sman1berbek.sch.id':           'wk.ani',
    'wk.rudi@sman1berbek.sch.id':          'wk.rudi',
    'guru.matematika@sman1berbek.sch.id':  'guru.mat',
    'guru.biologi@sman1berbek.sch.id':     'guru.bio',
    'guru.fisika@sman1berbek.sch.id':      'guru.fis',
    'ali.bapak@gmail.com':                 'ortu.ali',
    'siti.ibu@gmail.com':                  'ortu.siti',
    'hasan.wali@gmail.com':                'ortu.hasan',
    'andi.siswa@sman1berbek.sch.id':       'siswa.andi',
    'rina.siswa@sman1berbek.sch.id':       'siswa.rina',
    'fajar.siswa@sman1berbek.sch.id':      'siswa.fajar',
  };

  // Name by email
  const nameByEmail: Record<string, string> = {
    'admin@sman1berbek.sch.id':            'Administrator Sistem',
    'bk.sari@sman1berbek.sch.id':          'Sri Sari Dewi, S.Pd',
    'wk.budi@sman1berbek.sch.id':          'Budi Santoso, S.Pd',
    'wk.ani@sman1berbek.sch.id':           'Ani Rahayu, S.Pd',
    'wk.rudi@sman1berbek.sch.id':          'Rudi Hartono, S.Pd',
    'guru.matematika@sman1berbek.sch.id':  'Drs. Ahmad Fauzi',
    'guru.biologi@sman1berbek.sch.id':     'Dra. Siti Nurhaliza',
    'guru.fisika@sman1berbek.sch.id':      'Drs. Wahyu Prasetyo',
    'ali.bapak@gmail.com':                 'Ali Mahmud',
    'siti.ibu@gmail.com':                  'Siti Aisyah',
    'hasan.wali@gmail.com':                'Hasan Basri',
    'andi.siswa@sman1berbek.sch.id':       'Andi Pratama',
    'rina.siswa@sman1berbek.sch.id':       'Rina Wulandari',
    'fajar.siswa@sman1berbek.sch.id':      'Fajar Nugroho',
  };

  for (const p of profiles) {
    const userId = `ref-${p.email}`; // Placeholder - in real scenario comes from auth-service
    const username = usernameByEmail[p.email];
    const name = nameByEmail[p.email];

    await prisma.userProfile.upsert({
      where:  { email: p.email },
      update: {
        phone:    p.phone,
        position: (p as any).position,
        department: (p as any).department,
        mapel:    (p as any).mapel,
        gender:   p.gender,
        religion: p.religion,
      },
      create: {
        userId:     userId,  // Will be overwritten by actual sync from auth-service
        username:   username,
        email:      p.email,
        name:       name,
        phone:      p.phone,
        position:   (p as any).position,
        department: (p as any).department,
        mapel:      (p as any).mapel,
        gender:     p.gender,
        religion:   p.religion,
        isActive:   true,
        createdBy:  'SYSTEM',
      },
    });
  }

  console.log('✅ User profiles created');
  console.log('✅ User-service seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
