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

const depsToAdd = {
  "amqplib": "^0.10.3",
  "axios-retry": "^4.0.0"
};

const devDepsToAdd = {
  "@types/amqplib": "^0.10.5"
};

services.forEach(service => {
  const pkgPath = path.join(rootDir, service, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    
    // Add dependencies
    pkg.dependencies = pkg.dependencies || {};
    Object.keys(depsToAdd).forEach(dep => {
      if (!pkg.dependencies[dep]) {
        pkg.dependencies[dep] = depsToAdd[dep];
      }
    });
    
    // Add devDependencies
    pkg.devDependencies = pkg.devDependencies || {};
    Object.keys(devDepsToAdd).forEach(dep => {
      if (!pkg.devDependencies[dep]) {
        pkg.devDependencies[dep] = devDepsToAdd[dep];
      }
    });
    
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    console.log(`Updated ${pkgPath}`);
  }
});
