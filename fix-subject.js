const fs = require('fs');

let c = fs.readFileSync('schedule-service/prisma/schema.prisma', 'utf8');
const replacement = `model Subject {
  id            String     @id @default(uuid())
  code          String     @unique
  name          String
  description   String?    @db.Text
  
  isActive      Boolean    @default(true)
  createdBy     String     @default("SYSTEM")
  updatedBy     String?
  deletedAt     DateTime?

  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt
  
  schedules     Schedule[]

  @@map("subjects")
}`;

c = c.replace(/model Subject\s+\{[\s\S]*?@@map\("subjects"\)\s*\}/, replacement);
fs.writeFileSync('schedule-service/prisma/schema.prisma', c);
