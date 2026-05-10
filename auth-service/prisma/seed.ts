import { PrismaClient } from '../src/generated/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);

  // 1. Roles
  const roles = [
    { code: 'SUPERADMIN', name: 'Super Administrator', level: 99, isSystem: true },
    { code: 'ADMIN', name: 'Administrator Sekolah', level: 90, isSystem: true },
    { code: 'BK', name: 'Guru Bimbingan Konseling', level: 80, isSystem: true },
    { code: 'WALIKELAS', name: 'Wali Kelas', level: 70, isSystem: true },
    { code: 'GURUMAPEL', name: 'Guru Mata Pelajaran', level: 60, isSystem: true },
    { code: 'ORANGTUA', name: 'Orang Tua', level: 10, isSystem: true },
    { code: 'SISWA', name: 'Siswa', level: 1, isSystem: true },
  ];

  console.log('Upserting roles...');
  const roleMap: Record<string, string> = {};
  for (const r of roles) {
    const role = await prisma.role.upsert({
      where: { code: r.code },
      update: { name: r.name, level: r.level },
      create: r,
    });
    roleMap[r.code] = role.id;
  }

  // 2. Users
  const users = [
    { id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', username: 'superadmin', email: 'superadmin@example.com', name: 'Super Admin', roles: ['SUPERADMIN'] },
    { id: 'b1fdeca0-0d1c-5f09-cc7e-7cc0ce491b22', username: 'admin', email: 'admin@school.com', name: 'Admin Sekolah', roles: ['ADMIN'] },
    { id: 'c2daeb1b-1e2d-6e1a-dd8f-8dd1df5a2c33', username: 'guru_bk', email: 'bk@school.com', name: 'Guru BK (Pak Budi)', roles: ['BK'] },
    { id: 'd3c6a69e-532f-6d9a-a612-e33fef2ffec0', username: 'wali_kelas', email: 'walikelas@school.com', name: 'Wali Kelas (Bu Ani)', roles: ['WALIKELAS'] },
    { id: '94d7b70f-6430-7eab-b723-f440f0300fd1', username: 'guru_mapel', email: 'guru@school.com', name: 'Guru Mapel (Pak Joko)', roles: ['GURUMAPEL'] },
    { id: 'e2d5c58d-421e-5c89-9501-d22fdf1fedd9', username: 'ortu_udin', email: 'ortu.udin@example.com', name: 'Orang Tua Udin', roles: ['ORANGTUA'] },
    { id: 'f1c4b47c-310d-4b78-8490-c11fdc0edcd8', username: 'siswa_udin', email: 'udin@student.com', name: 'Udin Sedunia', roles: ['SISWA'] },
  ];

  console.log('Seeding users...');
  for (const u of users) {
    const user = await prisma.user.upsert({
      where: { username: u.username },
      update: { name: u.name, isActive: true },
      create: {
        id: u.id,
        username: u.username,
        email: u.email,
        name: u.name,
        password,
        isActive: true,
        isEmailVerified: true,
        mustChangePassword: false,
      },
    });

    // Assign Roles
    for (const roleCode of u.roles) {
      await prisma.userRole.upsert({
        where: {
          userId_roleId: {
            userId: user.id,
            roleId: roleMap[roleCode],
          },
        },
        update: {},
        create: {
          userId: user.id,
          roleId: roleMap[roleCode],
        },
      });
    }
  }

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
