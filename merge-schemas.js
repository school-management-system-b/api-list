const fs = require('fs');
const path = require('path');

const services = [
    "auth-service",
    "user-service",
    "student-service",
    "category-service",
    "violation-service",
    "achievement-service",
    "reporting-service",
    "counseling-service",
    "schedule-service"
];

let masterSchema = `
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
`;

const modelsMap = new Map();
const enumsMap = new Map();

services.forEach(svc => {
    const schemaPath = path.join(__dirname, svc, 'prisma', 'schema.prisma');
    if (!fs.existsSync(schemaPath)) return;
    
    const content = fs.readFileSync(schemaPath, 'utf8');
    
    // Quick regex to extract models and enums
    // This assumes standard formatting: "model Name { ... }" and "enum Name { ... }"
    
    // Extract models
    const modelMatches = content.matchAll(/model\s+(\w+)\s+{([\s\S]*?)\n}/g);
    for (const match of modelMatches) {
        const name = match[1];
        const body = match[2];
        if (!modelsMap.has(name)) {
            modelsMap.set(name, `model ${name} {${body}\n}`);
        } else {
            // Merge rules: Just keep the first one found, assuming duplicated models are structurally identical across services.
            // (The user duplicated them across services so they can share tables like 'classes' and 'subjects')
        }
    }
    
    // Extract enums
    const enumMatches = content.matchAll(/enum\s+(\w+)\s+{([\s\S]*?)\n}/g);
    for (const match of enumMatches) {
        const name = match[1];
        const body = match[2];
        if (!enumsMap.has(name)) {
            enumsMap.set(name, `enum ${name} {${body}\n}`);
        }
    }
});

for (const [name, definition] of modelsMap.entries()) {
    masterSchema += `\n${definition}\n`;
}

for (const [name, definition] of enumsMap.entries()) {
    masterSchema += `\n${definition}\n`;
}

fs.writeFileSync(path.join(__dirname, 'master-schema.prisma'), masterSchema);
console.log(`Generated master-schema.prisma with ${modelsMap.size} models and ${enumsMap.size} enums.`);
