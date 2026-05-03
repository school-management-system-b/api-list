const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function debug() {
  const username = 'testuser' + Date.now();
  const password = 'Password123!';
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log('Creating user...');
  const user = await prisma.user.create({
    data: {
      username,
      email: username + '@test.com',
      password: hashedPassword,
      name: 'Test User',
      isActive: true
    }
  });
  console.log('User created:', user.id);

  console.log('Finding user...');
  const found = await prisma.user.findUnique({ where: { username } });
  console.log('User found:', found ? 'YES' : 'NO');

  if (found) {
    console.log('Comparing password...');
    const match = await bcrypt.compare(password, found.password);
    console.log('Password match:', match);
  }
}

debug();
