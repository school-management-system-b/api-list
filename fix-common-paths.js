const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const services = [
  'api-gateway',
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

services.forEach(service => {
  const pkgPath = path.join(rootDir, service, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    
    // Fix common dependency path
    if (pkg.dependencies && pkg.dependencies['@microservices/common']) {
      pkg.dependencies['@microservices/common'] = 'file:../common';
      
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
      console.log(`Fixed common path in ${pkgPath}`);
    }
  }
});
