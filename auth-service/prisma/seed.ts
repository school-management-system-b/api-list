import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Auth-service seed started...');

  const PASSWORD = await bcrypt.hash('password123', 12);

  // ─── 1. ROLES ───────────────────────────────────────────────────────────────
  const roles = [
    { code: 'SUPERADMIN', name: 'Super Administrator', description: 'Full access to all modules', level: 100, isSystem: true },
    { code: 'BK',         name: 'Guru BK',             description: 'Bimbingan Konseling',         level: 70  },
    { code: 'WALIKELAS',  name: 'Wali Kelas',           description: 'Wali Kelas Siswa',            level: 60  },
    { code: 'GURUMAPEL',  name: 'Guru Mata Pelajaran',  description: 'Guru Mata Pelajaran',         level: 50  },
    { code: 'ORANGTUA',   name: 'Orang Tua / Wali',     description: 'Orang Tua atau Wali Siswa',   level: 20  },
    { code: 'SISWA',      name: 'Siswa',                description: 'Siswa Sekolah',               level: 10  },
  ];

  const roleMap: Record<string, string> = {};
  for (const r of roles) {
    const role = await prisma.role.upsert({
      where:  { code: r.code },
      update: { name: r.name, description: r.description, level: r.level },
      create: { ...r, isSystem: r.isSystem ?? false },
    });
    roleMap[r.code] = role.id;
  }
  console.log('✅ Roles created');

  // ─── 2. MODULES ─────────────────────────────────────────────────────────────
  const modules = [
    { code: 'DASHBOARD',    name: 'Dashboard',            icon: 'LayoutDashboard', path: '/dashboard',          order: 1  },
    { code: 'USERS',        name: 'Manajemen User',        icon: 'Users',           path: '/dashboard/users',    order: 2  },
    { code: 'SISWA',        name: 'Data Siswa',            icon: 'GraduationCap',   path: '/dashboard/siswa',    order: 3  },
    { code: 'PELANGGARAN',  name: 'Data Pelanggaran',      icon: 'AlertTriangle',   path: '/dashboard/pelanggaran', order: 4 },
    { code: 'PRESTASI',     name: 'Data Prestasi',         icon: 'Trophy',          path: '/dashboard/prestasi', order: 5  },
    { code: 'KATEGORI',     name: 'Kategori',              icon: 'Tag',             path: '/dashboard/kategori', order: 6  },
    { code: 'KELAS',        name: 'Data Kelas',            icon: 'School',          path: '/dashboard/kelas',    order: 7  },
    { code: 'MAPEL',        name: 'Mata Pelajaran',        icon: 'BookOpen',        path: '/dashboard/mapel',    order: 8  },
    { code: 'LAPORAN',      name: 'Laporan',               icon: 'FileText',        path: '/dashboard/laporan',  order: 9  },
    { code: 'KONSELING',    name: 'Konseling',             icon: 'HeartHandshake',  path: '/dashboard/konseling',order: 10 },
    { code: 'RANKING',      name: 'Ranking',               icon: 'Medal',           path: '/dashboard/ranking',  order: 11 },
    { code: 'NOTIFIKASI',   name: 'Notifikasi',            icon: 'Bell',            path: '/dashboard/notifikasi',order: 12},
    { code: 'PENGATURAN',   name: 'Pengaturan',            icon: 'Settings',        path: '/dashboard/pengaturan',order: 13},
  ];

  const moduleMap: Record<string, string> = {};
  for (const m of modules) {
    const mod = await prisma.module.upsert({
      where:  { code: m.code },
      update: { name: m.name, icon: m.icon, path: m.path, order: m.order },
      create: { ...m },
    });
    moduleMap[m.code] = mod.id;
  }
  console.log('✅ Modules created');

  // ─── 3. MODULE ACCESS PER ROLE ───────────────────────────────────────────────
  const accessConfig: Record<string, string[]> = {
    SUPERADMIN: Object.keys(moduleMap),
    BK:         ['DASHBOARD', 'SISWA', 'PELANGGARAN', 'PRESTASI', 'KATEGORI', 'KELAS', 'LAPORAN', 'KONSELING', 'RANKING', 'NOTIFIKASI', 'PENGATURAN'],
    WALIKELAS:  ['DASHBOARD', 'SISWA', 'PELANGGARAN', 'PRESTASI', 'LAPORAN', 'RANKING', 'NOTIFIKASI', 'PENGATURAN'],
    GURUMAPEL:  ['DASHBOARD', 'SISWA', 'PELANGGARAN', 'PRESTASI', 'RANKING', 'NOTIFIKASI', 'PENGATURAN'],
    ORANGTUA:   ['DASHBOARD', 'NOTIFIKASI', 'PENGATURAN'],
    SISWA:      ['DASHBOARD', 'NOTIFIKASI', 'PENGATURAN'],
  };

  for (const [roleCode, moduleCodes] of Object.entries(accessConfig)) {
    const roleId = roleMap[roleCode];
    if (!roleId) continue;
    for (const moduleCode of moduleCodes) {
      const moduleId = moduleMap[moduleCode];
      if (!moduleId) continue;
      const isSuperadmin = roleCode === 'SUPERADMIN';
      const canInput = ['SUPERADMIN', 'BK', 'WALIKELAS', 'GURUMAPEL'].includes(roleCode);
      await prisma.moduleAccess.upsert({
        where: { roleId_moduleId: { roleId, moduleId } },
        update: {},
        create: {
          roleId, moduleId,
          canView:     true,
          canCreate:   canInput,
          canUpdate:   canInput,
          canDelete:   isSuperadmin,
          canViewAll:  ['SUPERADMIN', 'BK'].includes(roleCode),
          canDownload: ['SUPERADMIN', 'BK', 'WALIKELAS'].includes(roleCode),
          canApprove:  ['SUPERADMIN', 'BK'].includes(roleCode),
        },
      });
    }
  }
  console.log('✅ Module access configured');

  // ─── 4. USERS ────────────────────────────────────────────────────────────────
  const users = [
    // SUPERADMIN
    { username: 'admin',       email: 'admin@sman1berbek.sch.id',         name: 'Administrator Sistem',   roleCode: 'SUPERADMIN' },
    // BK
    { username: 'bk.sari',     email: 'bk.sari@sman1berbek.sch.id',       name: 'Sri Sari Dewi, S.Pd',    roleCode: 'BK'         },
    // WALIKELAS
    { username: 'wk.budi',     email: 'wk.budi@sman1berbek.sch.id',       name: 'Budi Santoso, S.Pd',     roleCode: 'WALIKELAS'  },
    { username: 'wk.ani',      email: 'wk.ani@sman1berbek.sch.id',        name: 'Ani Rahayu, S.Pd',       roleCode: 'WALIKELAS'  },
    { username: 'wk.rudi',     email: 'wk.rudi@sman1berbek.sch.id',       name: 'Rudi Hartono, S.Pd',     roleCode: 'WALIKELAS'  },
    // GURUMAPEL
    { username: 'guru.mat',    email: 'guru.matematika@sman1berbek.sch.id',name: 'Drs. Ahmad Fauzi',       roleCode: 'GURUMAPEL'  },
    { username: 'guru.bio',    email: 'guru.biologi@sman1berbek.sch.id',   name: 'Dra. Siti Nurhaliza',    roleCode: 'GURUMAPEL'  },
    { username: 'guru.fis',    email: 'guru.fisika@sman1berbek.sch.id',    name: 'Drs. Wahyu Prasetyo',    roleCode: 'GURUMAPEL'  },
    // ORANGTUA
    { username: 'ortu.ali',    email: 'ali.bapak@gmail.com',              name: 'Ali Mahmud',             roleCode: 'ORANGTUA'   },
    { username: 'ortu.siti',   email: 'siti.ibu@gmail.com',               name: 'Siti Aisyah',            roleCode: 'ORANGTUA'   },
    { username: 'ortu.hasan',  email: 'hasan.wali@gmail.com',             name: 'Hasan Basri',            roleCode: 'ORANGTUA'   },
    // SISWA
    { username: 'siswa.andi',  email: 'andi.siswa@sman1berbek.sch.id',    name: 'Andi Pratama',           roleCode: 'SISWA'      },
    { username: 'siswa.rina',  email: 'rina.siswa@sman1berbek.sch.id',    name: 'Rina Wulandari',         roleCode: 'SISWA'      },
    { username: 'siswa.fajar', email: 'fajar.siswa@sman1berbek.sch.id',   name: 'Fajar Nugroho',          roleCode: 'SISWA'      },
  ];

  const userIds: Record<string, string> = {};
  for (const u of users) {
    const user = await prisma.user.upsert({
      where: { username: u.username },
      update: {},
      create: {
        username:          u.username,
        email:             u.email,
        password:          PASSWORD,
        name:              u.name,
        isEmailVerified:   true,
        mustChangePassword: false,
        isActive:          true,
      },
    });
    userIds[u.username] = user.id;

    const roleId = roleMap[u.roleCode];
    if (roleId) {
      await prisma.userRole.upsert({
        where: { userId_roleId: { userId: user.id, roleId } },
        update: {},
        create: { userId: user.id, roleId },
      });
    }
  }
  console.log('✅ Users created');
  console.log('');
  console.log('🔑 Login Credentials (password: password123)');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  for (const u of users) {
    console.log(`   [${u.roleCode.padEnd(10)}] username: ${u.username.padEnd(15)} | email: ${u.email}`);
  }
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ Auth-service seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
