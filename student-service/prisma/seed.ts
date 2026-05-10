import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function main() {
  const academicYear = '2024/2025';
  
  // 1. Academic Year
  await prisma.academicYear.upsert({
    where: { year: academicYear },
    update: { isActive: true },
    create: {
      year: academicYear,
      startDate: new Date('2024-07-01'),
      endDate: new Date('2025-06-30'),
      semester1Start: new Date('2024-07-01'),
      semester1End: new Date('2024-12-20'),
      semester2Start: new Date('2025-01-06'),
      semester2End: new Date('2025-06-20'),
      isActive: true,
    },
  });

  // 2. Class
  const class10ipa1 = await prisma.class.upsert({
    where: { code: '10-IPA-1' },
    update: { 
      waliKelasId: 'd3c6a69e-532f-6d9a-a612-e33fef2ffec0', 
      waliKelasName: 'Bu Ani' 
    },
    create: {
      code: '10-IPA-1',
      name: '10 IPA 1',
      level: '10',
      major: 'IPA',
      academicYear,
      waliKelasId: 'd3c6a69e-532f-6d9a-a612-e33fef2ffec0',
      waliKelasName: 'Bu Ani',
      createdBy: 'system',
    },
  });

  // 3. Student (Udin)
  await prisma.student.upsert({
    where: { nisn: '0012345678' },
    update: { 
      userId: 'f1c4b47c-310d-4b78-8490-c11fdc0edcd8',
      parentId: 'e2d5c58d-421e-5c89-9501-d22fdf1fedd9'
    },
    create: {
      id: 'f1c4b47c-310d-4b78-8490-c11fdc0edcd8', // Using same ID as userId for simplicity or use unique
      userId: 'f1c4b47c-310d-4b78-8490-c11fdc0edcd8',
      parentId: 'e2d5c58d-421e-5c89-9501-d22fdf1fedd9',
      nisn: '0012345678',
      nis: '2425001',
      name: 'Udin Sedunia',
      classId: class10ipa1.id,
      className: class10ipa1.name,
      classLevel: class10ipa1.level,
      classMajor: class10ipa1.major,
      gender: 'MALE',
      birthPlace: 'Nganjuk',
      birthDate: new Date('2009-05-15'),
      religion: 'ISLAM',
      address: 'Jl. Raya Berbek No. 123',
      city: 'Nganjuk',
      province: 'Jawa Timur',
      academicYear,
      entryYear: '2024',
      entryDate: new Date('2024-07-15'),
      waliKelasId: 'd3c6a69e-532f-6d9a-a612-e33fef2ffec0',
      waliKelasName: 'Bu Ani',
      createdBy: 'system',
    },
  });

  console.log('Student service seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
