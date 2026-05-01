const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const services = [
  'auth-service',
  'user-service',
  'student-service',
  'violation-service',
  'achievement-service',
  'category-service',
  'notification-service',
  'reporting-service',
  'counseling-service',
  'schedule-service'
];

console.log('🚀 Starting Database Migration for all services...');

services.forEach(service => {
  const serviceDir = path.join(process.cwd(), service);
  
  if (fs.existsSync(serviceDir)) {
    console.log(`\n-----------------------------------------`);
    console.log(`📦 Migrating: ${service}...`);
    try {
      // Run npx prisma migrate deploy inside the service directory
      execSync('npx prisma migrate deploy', { 
        cwd: serviceDir, 
        stdio: 'inherit',
        shell: true 
      });
      console.log(`✅ Success: ${service}`);
    } catch (error) {
      console.error(`❌ Failed: ${service}`);
      console.error(`Error details: ${error.message}`);
    }
  }
});

console.log('\n-----------------------------------------');
console.log('🏁 Migration process finished!');
