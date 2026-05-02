const fs = require('fs');

const data = `

-- ==========================================
-- 2.1 MODULE ACCESS (auth-service) → table: module_access
-- ==========================================
INSERT INTO "module_access" (id, "roleId", "moduleId", "canView", "canCreate", "canUpdate", "canDelete", "canViewAll", "canDownload", "canApprove", "createdAt", "updatedAt")
VALUES
  -- Superadmin (role-001) has all access to all modules
  ('ma-101', 'role-001', 'mod-001', true, true, true, true, true, true, true, NOW(), NOW()),
  ('ma-102', 'role-001', 'mod-002', true, true, true, true, true, true, true, NOW(), NOW()),
  ('ma-103', 'role-001', 'mod-003', true, true, true, true, true, true, true, NOW(), NOW()),
  ('ma-104', 'role-001', 'mod-004', true, true, true, true, true, true, true, NOW(), NOW()),
  ('ma-105', 'role-001', 'mod-005', true, true, true, true, true, true, true, NOW(), NOW()),
  ('ma-106', 'role-001', 'mod-006', true, true, true, true, true, true, true, NOW(), NOW()),
  ('ma-107', 'role-001', 'mod-007', true, true, true, true, true, true, true, NOW(), NOW()),
  ('ma-108', 'role-001', 'mod-008', true, true, true, true, true, true, true, NOW(), NOW()),

  -- Wali Kelas (role-003)
  ('ma-301', 'role-003', 'mod-001', true, false, false, false, false, false, false, NOW(), NOW()),
  ('ma-303', 'role-003', 'mod-003', true, true, true, false, false, false, true, NOW(), NOW()),
  ('ma-304', 'role-003', 'mod-004', true, true, true, false, false, false, true, NOW(), NOW()),
  ('ma-307', 'role-003', 'mod-007', true, false, false, false, false, false, false, NOW(), NOW()),

  -- Guru BK (role-004)
  ('ma-401', 'role-004', 'mod-001', true, false, false, false, false, false, false, NOW(), NOW()),
  ('ma-403', 'role-004', 'mod-003', true, true, true, false, true, false, true, NOW(), NOW()),
  ('ma-406', 'role-004', 'mod-006', true, true, true, false, true, false, true, NOW(), NOW()),
  
  -- Orang Tua (role-007)
  ('ma-701', 'role-007', 'mod-001', true, false, false, false, false, false, false, NOW(), NOW()),
  ('ma-703', 'role-007', 'mod-003', true, false, false, false, false, false, false, NOW(), NOW()),
  ('ma-704', 'role-007', 'mod-004', true, false, false, false, false, false, false, NOW(), NOW()),
  ('ma-707', 'role-007', 'mod-007', true, false, false, false, false, false, false, NOW(), NOW()),

  -- Siswa (role-009)
  ('ma-901', 'role-009', 'mod-001', true, false, false, false, false, false, false, NOW(), NOW()),
  ('ma-903', 'role-009', 'mod-003', true, false, false, false, false, false, false, NOW(), NOW()),
  ('ma-904', 'role-009', 'mod-004', true, false, false, false, false, false, false, NOW(), NOW()),
  ('ma-907', 'role-009', 'mod-007', true, false, false, false, false, false, false, NOW(), NOW())
ON CONFLICT ("roleId", "moduleId") DO NOTHING;
`;

fs.appendFileSync('database_seed.sql', data);
