const fs = require('fs');
const path = require('path');

const services = [
  'auth-service',
  'user-service',
  'student-service',
  'category-service',
  'violation-service',
  'achievement-service',
  'notification-service',
  'reporting-service',
  'counseling-service',
  'schedule-service'
];

let mergedSchema = `
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "linux-musl-openssl-3.0.x", "rhel-openssl-3.0.x"]
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
`;

const modelsSeen = new Set();

for (const service of services) {
  const schemaPath = path.join(__dirname, '..', service, 'prisma', 'schema.prisma');
  if (fs.existsSync(schemaPath)) {
    const content = fs.readFileSync(schemaPath, 'utf8');
    const lines = content.split('\n');
    let inModel = false;
    let modelName = '';
    let currentModelBody = [];

    for (const line of lines) {
      if (line.startsWith('model ') || line.startsWith('enum ')) {
        inModel = true;
        modelName = line.split(' ')[1];
        if (!modelsSeen.has(modelName)) {
           currentModelBody.push(line);
        } else {
           inModel = false; // skip this model
        }
      } else if (inModel) {
        currentModelBody.push(line);
        if (line.startsWith('}')) {
          inModel = false;
          modelsSeen.add(modelName);
          mergedSchema += '\n' + currentModelBody.join('\n');
          currentModelBody = [];
        }
      }
    }
  }
}

fs.writeFileSync(path.join(__dirname, 'schema.prisma'), mergedSchema);
console.log('Merged schema written');
