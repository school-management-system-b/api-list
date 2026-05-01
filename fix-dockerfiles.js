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
  const dockerfilePath = path.join(rootDir, service, 'Dockerfile');
  if (fs.existsSync(dockerfilePath)) {
    let content = fs.readFileSync(dockerfilePath, 'utf8');
    
    // Add npm install for common folder in the first stage (builder)
    // We look for the first occurrence of "COPY common ./common"
    const searchStr = 'COPY common ./common';
    const installStr = '\nRUN cd common && npm install --registry=https://registry.npmjs.org/';
    
    const index = content.indexOf(searchStr);
    if (index !== -1) {
      const insertPos = index + searchStr.length;
      // Check if we already added it
      if (!content.includes('cd common && npm install')) {
        content = content.slice(0, insertPos) + installStr + content.slice(insertPos);
        fs.writeFileSync(dockerfilePath, content);
        console.log(`Updated ${dockerfilePath}`);
      }
    }
  }
});
