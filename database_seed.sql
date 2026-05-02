-- ==========================================
-- SQL SEED SCRIPT UNTUK MICROSERVICES
-- ==========================================
-- Instruksi: Jalankan script ini setelah menjalankan 'npx prisma db push' di SEMUA service.
-- Password untuk semua user di script ini adalah: password123
-- Semua kolom telah disesuaikan dengan Prisma schema masing-masing service.

-- ==========================================
-- 1. ROLES (auth-service) → table: roles
-- ==========================================
INSERT INTO "roles" (id, code, name, description, level, "isSystem", "isActive", "createdAt", "updatedAt")
VALUES
  ('role-001', 'SUPERADMIN', 'Super Administrator', 'Akses penuh ke semua sistem', 100, true, true, NOW(), NOW()),
  ('role-002', 'ADMIN', 'Administrator', 'Admin operasional harian', 90, true, true, NOW(), NOW()),
  ('role-003', 'WALI_KELAS', 'Wali Kelas', 'Pembina dan pengawas kelas', 50, true, true, NOW(), NOW()),
  ('role-004', 'GURU_BK', 'Guru BK', 'Bimbingan dan Konseling', 60, true, true, NOW(), NOW()),
  ('role-005', 'KESISWAAN', 'Kesiswaan', 'Koordinator kesiswaan', 70, true, true, NOW(), NOW()),
  ('role-006', 'KEPSEK', 'Kepala Sekolah', 'Pemantau semua laporan', 80, true, true, NOW(), NOW()),
  ('role-007', 'ORANG_TUA', 'Orang Tua', 'Akses monitoring anak', 10, true, true, NOW(), NOW()),
  ('role-008', 'GURU_MAPEL', 'Guru Mata Pelajaran', 'Input absensi dan prestasi', 40, true, true, NOW(), NOW())
ON CONFLICT (code) DO NOTHING;

-- ==========================================
-- 2. MODULES (auth-service) → table: modules
-- ==========================================
INSERT INTO "modules" (id, code, name, description, icon, path, "order", "isActive", "isVisible", "createdAt", "updatedAt")
VALUES
  ('mod-001', 'DASHBOARD',    'Dashboard',    'Halaman Utama',               'home',          '/dashboard',    1, true, true, NOW(), NOW()),
  ('mod-002', 'MASTER_DATA',  'Data Master',  'Kelola Siswa, Kelas, Guru',   'database',      '/master',       2, true, true, NOW(), NOW()),
  ('mod-003', 'VIOLATION',    'Pelanggaran',  'Input & Proses Pelanggaran',  'alert-triangle', '/violations',  3, true, true, NOW(), NOW()),
  ('mod-004', 'ACHIEVEMENT',  'Prestasi',     'Input & Proses Prestasi',     'award',         '/achievements', 4, true, true, NOW(), NOW()),
  ('mod-005', 'REPORT',       'Laporan',      'Laporan dan Analisis',        'pie-chart',     '/reports',      5, true, true, NOW(), NOW()),
  ('mod-006', 'COUNSELING',   'BK',           'Bimbingan Konseling',         'heart',         '/counseling',   6, true, true, NOW(), NOW()),
  ('mod-007', 'SCHEDULE',     'Jadwal',       'Jadwal & Absensi',            'calendar',      '/schedule',     7, true, true, NOW(), NOW()),
  ('mod-008', 'NOTIFICATION', 'Notifikasi',   'Pusat Notifikasi',            'bell',          '/notifications',8, true, true, NOW(), NOW())
ON CONFLICT (code) DO NOTHING;

-- ==========================================
-- 3. USERS (auth-service) → table: users
-- Bcrypt hash untuk "password123"
-- ==========================================
INSERT INTO "users" (id, username, email, password, name, "isActive", "isEmailVerified", "mustChangePassword", "failedLoginAttempts", "createdAt", "updatedAt")
VALUES
  ('usr-admin',  'admin',      'admin@sekolah.com',  '$2a$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa', 'Budi Admin',       true, true, false, 0, NOW(), NOW()),
  ('usr-wali',   'walikelas',  'wali@sekolah.com',   '$2a$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa', 'Siti Wali Kelas',  true, true, false, 0, NOW(), NOW()),
  ('usr-bk',     'gurubk',     'bk@sekolah.com',     '$2a$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa', 'Ahmad Guru BK',    true, true, false, 0, NOW(), NOW()),
  ('usr-guru',   'gurumapel',  'guru@sekolah.com',   '$2a$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa', 'Dedi Guru Mapel',  true, true, false, 0, NOW(), NOW()),
  ('usr-ortu',   'orangtua',   'ortu@sekolah.com',   '$2a$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa', 'Hendra Orang Tua', true, true, false, 0, NOW(), NOW())
ON CONFLICT (username) DO NOTHING;

-- ==========================================
-- 4. USER ROLES (auth-service) → table: user_roles
-- ==========================================
INSERT INTO "user_roles" (id, "userId", "roleId", "isActive", "createdAt", "updatedAt")
VALUES
  ('ur-001', 'usr-admin', 'role-001', true, NOW(), NOW()),
  ('ur-002', 'usr-wali',  'role-003', true, NOW(), NOW()),
  ('ur-003', 'usr-bk',    'role-004', true, NOW(), NOW()),
  ('ur-004', 'usr-guru',  'role-008', true, NOW(), NOW()),
  ('ur-005', 'usr-ortu',  'role-007', true, NOW(), NOW())
ON CONFLICT ("userId", "roleId") DO NOTHING;

-- ==========================================
-- 5. USER PROFILES (user-service) → table: user_profiles
-- ==========================================
INSERT INTO "user_profiles" (id, "userId", username, email, name, phone, "isActive", "createdBy", "createdAt", "updatedAt")
VALUES
  ('prof-001', 'usr-admin', 'admin',      'admin@sekolah.com', 'Budi Admin',       '081234567890', true, 'SYSTEM', NOW(), NOW()),
  ('prof-002', 'usr-wali',  'walikelas',  'wali@sekolah.com',  'Siti Wali Kelas',  '081234567891', true, 'SYSTEM', NOW(), NOW()),
  ('prof-003', 'usr-bk',    'gurubk',     'bk@sekolah.com',    'Ahmad Guru BK',    '081234567892', true, 'SYSTEM', NOW(), NOW()),
  ('prof-004', 'usr-guru',  'gurumapel',  'guru@sekolah.com',  'Dedi Guru Mapel',  '081234567893', true, 'SYSTEM', NOW(), NOW()),
  ('prof-005', 'usr-ortu',  'orangtua',   'ortu@sekolah.com',  'Hendra Orang Tua', '081234567894', true, 'SYSTEM', NOW(), NOW())
ON CONFLICT ("userId") DO NOTHING;

-- ==========================================
-- 6. ACADEMIC YEARS (student-service) → table: academic_years
-- Schema: id, year, startDate, endDate, semester1Start, semester1End, semester2Start, semester2End, isActive
-- ==========================================
INSERT INTO "academic_years" (id, year, "startDate", "endDate", "semester1Start", "semester1End", "semester2Start", "semester2End", "isActive", "createdAt", "updatedAt")
VALUES
  ('ay-001', '2023/2024', '2023-07-15', '2024-06-15', '2023-07-15', '2023-12-15', '2024-01-08', '2024-06-15', false, NOW(), NOW()),
  ('ay-002', '2024/2025', '2024-07-15', '2025-06-15', '2024-07-15', '2024-12-15', '2025-01-06', '2025-06-15', true,  NOW(), NOW())
ON CONFLICT (year) DO NOTHING;

-- ==========================================
-- 7. CLASSES (student-service) → table: classes
-- Schema: id, code, name, level, major, waliKelasId, waliKelasName, capacity, currentTotal, academicYear, roomNumber, isActive
-- ==========================================
INSERT INTO "classes" (id, code, name, level, major, "waliKelasId", "waliKelasName", capacity, "currentTotal", "academicYear", "isActive", "createdBy", "createdAt", "updatedAt")
VALUES
  ('cls-001', 'X-MIPA-1',  'X MIPA 1',  '10', 'IPA',  'usr-wali', 'Siti Wali Kelas', 36, 2, '2024/2025', true, 'SYSTEM', NOW(), NOW()),
  ('cls-002', 'X-IPS-1',   'X IPS 1',   '10', 'IPS',  'usr-wali', 'Siti Wali Kelas', 36, 1, '2024/2025', true, 'SYSTEM', NOW(), NOW()),
  ('cls-003', 'XI-MIPA-1', 'XI MIPA 1', '11', 'IPA',  'usr-wali', 'Siti Wali Kelas', 36, 0, '2024/2025', true, 'SYSTEM', NOW(), NOW()),
  ('cls-004', 'XI-IPS-1',  'XI IPS 1',  '11', 'IPS',  'usr-wali', 'Siti Wali Kelas', 36, 0, '2024/2025', true, 'SYSTEM', NOW(), NOW())
ON CONFLICT (code, "academicYear") DO NOTHING;

-- ==========================================
-- 8. STUDENTS (student-service) → table: students
-- Schema: id, userId, nisn, nis, name, classId, className, classLevel, gender, birthPlace, birthDate,
--         religion, address, city, province, academicYear, entryYear, entryDate, status,
--         totalPoints, positivePoints, negativePoints, isActive, createdBy
-- ==========================================
INSERT INTO "students" (
  id, "userId", nisn, nis, name, "classId", "className", "classLevel",
  gender, "birthPlace", "birthDate", religion, address, city, province,
  "academicYear", "entryYear", "entryDate", status,
  "totalPoints", "positivePoints", "negativePoints",
  "isActive", "createdBy", "createdAt", "updatedAt"
)
VALUES
  ('std-001', 'usr-ortu', '0011223344', '1001', 'Agus Prayogo',  'cls-001', 'X MIPA 1', '10', 'MALE',   'Jakarta',  '2008-05-10', 'ISLAM', 'Jl. Merdeka No. 1', 'Jakarta',  'DKI Jakarta', '2024/2025', '2024', '2024-07-15', 'ACTIVE', -5, 0,  5, true, 'SYSTEM', NOW(), NOW()),
  ('std-002', NULL,        '0011223355', '1002', 'Budi Santoso',  'cls-001', 'X MIPA 1', '10', 'MALE',   'Bandung',  '2008-06-11', 'ISLAM', 'Jl. Asia Afrika No. 2', 'Bandung', 'Jawa Barat', '2024/2025', '2024', '2024-07-15', 'ACTIVE',  0, 0,  0, true, 'SYSTEM', NOW(), NOW()),
  ('std-003', NULL,        '0011223366', '1003', 'Citra Kirana',  'cls-002', 'X IPS 1',  '10', 'FEMALE', 'Surabaya', '2008-07-12', 'ISLAM', 'Jl. Pemuda No. 3',   'Surabaya','Jawa Timur', '2024/2025', '2024', '2024-07-15', 'ACTIVE', 50, 50, 0, true, 'SYSTEM', NOW(), NOW())
ON CONFLICT (nisn) DO NOTHING;

-- ==========================================
-- 9. CATEGORIES (category-service) → table: categories
-- Schema: id, code, name, description, type, severity, defaultPoints, level, isActive, isSystem, createdBy
-- ==========================================
INSERT INTO "categories" (
  id, code, name, description, type, severity, "defaultPoints", level,
  "isActive", "isSystem", "createdBy", "createdAt", "updatedAt"
)
VALUES
  -- Violation Categories
  ('cat-v1', 'V-TLBT',   'Keterlambatan',    'Datang terlambat ke sekolah',            'VIOLATION', 'RINGAN', 5,  0, true, true, 'SYSTEM', NOW(), NOW()),
  ('cat-v2', 'V-SRGT',   'Seragam Tidak Rapi','Seragam tidak sesuai peraturan',        'VIOLATION', 'RINGAN', 10, 0, true, true, 'SYSTEM', NOW(), NOW()),
  ('cat-v3', 'V-MBLZ',   'Membolos',         'Meninggalkan sekolah tanpa izin',        'VIOLATION', 'SEDANG', 25, 0, true, true, 'SYSTEM', NOW(), NOW()),
  ('cat-v4', 'V-BKLH',   'Berkelahi',        'Berkelahi dengan siswa lain',            'VIOLATION', 'BERAT',  50, 0, true, true, 'SYSTEM', NOW(), NOW()),
  ('cat-v5', 'V-ABSEN',  'Absen Tanpa Keterangan', 'Tidak hadir tanpa keterangan',    'VIOLATION', 'RINGAN', 5,  0, true, true, 'SYSTEM', NOW(), NOW()),
  -- Achievement Categories
  ('cat-a1', 'A-AKDM',   'Akademik',         'Juara kelas / Olimpiade Akademik',       'ACHIEVEMENT', NULL, 50, 0, true, true, 'SYSTEM', NOW(), NOW()),
  ('cat-a2', 'A-OLGA',   'Olahraga',         'Prestasi kejuaraan olahraga',            'ACHIEVEMENT', NULL, 40, 0, true, true, 'SYSTEM', NOW(), NOW()),
  ('cat-a3', 'A-SENI',   'Seni & Budaya',    'Prestasi seni dan budaya',               'ACHIEVEMENT', NULL, 40, 0, true, true, 'SYSTEM', NOW(), NOW()),
  ('cat-a4', 'A-IPTEK',  'Sains & Teknologi','Olimpiade sains, robotik, IT',           'ACHIEVEMENT', NULL, 60, 0, true, true, 'SYSTEM', NOW(), NOW())
ON CONFLICT (code) DO NOTHING;

-- ==========================================
-- 10. POINTS CONFIGURATIONS (category-service) → table: points_configurations
-- Schema: id, configKey, configValue, description
-- ==========================================
INSERT INTO "points_configurations" (id, "configKey", "configValue", description, "createdAt", "updatedAt")
VALUES
  ('cfg-001', 'MAX_VIOLATION_POINTS',  '"100"', 'Batas maksimal poin pelanggaran sebelum SP3', NOW(), NOW()),
  ('cfg-002', 'BASE_ACHIEVEMENT_POINTS', '"10"', 'Poin dasar untuk setiap prestasi',           NOW(), NOW()),
  ('cfg-003', 'SP1_THRESHOLD',         '"25"',  'Batas poin untuk Surat Peringatan 1',         NOW(), NOW()),
  ('cfg-004', 'SP2_THRESHOLD',         '"50"',  'Batas poin untuk Surat Peringatan 2',         NOW(), NOW()),
  ('cfg-005', 'SP3_THRESHOLD',         '"75"',  'Batas poin untuk Surat Peringatan 3',         NOW(), NOW())
ON CONFLICT ("configKey") DO NOTHING;

-- ==========================================
-- 11. VIOLATIONS (violation-service) → table: violations
-- Schema matches Prisma violation model exactly
-- ==========================================
INSERT INTO "violations" (
  id, "studentId", "studentNisn", "studentName", "studentClass",
  "reportedBy", "reportedByName", "reporterRole",
  "categoryId", "categoryCode", "categoryName", "categorySeverity",
  description, location, "violationDate",
  points, status, "academicYear", semester,
  "isActive", "createdBy", "createdAt", "updatedAt"
)
VALUES
  (
    'vio-001', 'std-001', '0011223344', 'Agus Prayogo', 'X MIPA 1',
    'usr-wali', 'Siti Wali Kelas', 'WALIKELAS',
    'cat-v1', 'V-TLBT', 'Keterlambatan', 'RINGAN',
    'Terlambat 15 menit tanpa keterangan', 'Gerbang Sekolah', '2024-08-01',
    5, 'APPROVED_BK', '2024/2025', 1,
    true, 'usr-wali', NOW(), NOW()
  ),
  (
    'vio-002', 'std-002', '0011223355', 'Budi Santoso', 'X MIPA 1',
    'usr-wali', 'Siti Wali Kelas', 'WALIKELAS',
    'cat-v3', 'V-MBLZ', 'Membolos', 'SEDANG',
    'Ketahuan di kantin saat jam pelajaran berlangsung', 'Kantin', '2024-08-05',
    25, 'PENDING', '2024/2025', 1,
    true, 'usr-wali', NOW(), NOW()
  )
ON CONFLICT (id) DO NOTHING;

-- Approval History untuk violation yang sudah diapprove
INSERT INTO "violation_approval_history" (
  id, "violationId", action, "fromStatus", "toStatus",
  "approverUserId", "approverName", "approverRole", notes, "actionDate"
)
VALUES
  ('vah-001', 'vio-001', 'SUBMIT',       'PENDING',        'PENDING',        'usr-wali', 'Siti Wali Kelas', 'WALIKELAS', 'Pengajuan awal',           NOW()),
  ('vah-002', 'vio-001', 'APPROVE_WALI', 'PENDING',        'APPROVED_WALI',  'usr-wali', 'Siti Wali Kelas', 'WALIKELAS', 'Disetujui wali kelas',     NOW()),
  ('vah-003', 'vio-001', 'APPROVE_BK',   'APPROVED_WALI',  'APPROVED_BK',    'usr-bk',   'Ahmad Guru BK',   'GURU_BK',   'Disetujui BK, sanksi: teguran lisan', NOW())
ON CONFLICT (id) DO NOTHING;

-- ==========================================
-- 12. ACHIEVEMENTS (achievement-service) → table: achievements
-- Schema matches Prisma achievement model
-- ==========================================
INSERT INTO "achievements" (
  id, "studentId", "studentNisn", "studentName", "studentClass",
  "reportedBy", "reportedByName", "reporterRole",
  "categoryId", "categoryCode", "categoryName", "categoryType",
  title, description, "achievementDate", location, organizer,
  level, rank,
  points, "basePoints", "levelMultiplier", "rankMultiplier",
  status, "academicYear", semester,
  "isActive", "createdBy", "createdAt", "updatedAt"
)
VALUES
  (
    'ach-001', 'std-003', '0011223366', 'Citra Kirana', 'X IPS 1',
    'usr-wali', 'Siti Wali Kelas', 'WALIKELAS',
    'cat-a2', 'A-OLGA', 'Olahraga', 'SPORTS',
    'Juara 1 Lomba Lari Kemerdekaan Tingkat Kabupaten', 
    'Mendapat medali emas pada lomba lari 100m tingkat kabupaten',
    '2024-08-17', 'Stadion Kota', 'Pemda Setempat',
    'KABUPATEN', 'JUARA_1',
    60, 40, 1.5, 1.0,
    'APPROVED', '2024/2025', 1,
    true, 'usr-wali', NOW(), NOW()
  )
ON CONFLICT (id) DO NOTHING;

-- Achievement approval history
INSERT INTO "achievement_approval_history" (
  id, "achievementId", action, "fromStatus", "toStatus",
  "approverUserId", "approverName", "approverRole", notes, "actionDate"
)
VALUES
  ('aah-001', 'ach-001', 'SUBMIT',  'PENDING',  'PENDING',  'usr-wali', 'Siti Wali Kelas', 'WALIKELAS', 'Pengajuan prestasi',  NOW()),
  ('aah-002', 'ach-001', 'APPROVE', 'PENDING',  'APPROVED', 'usr-bk',   'Ahmad Guru BK',   'GURU_BK',   'Prestasi terverifikasi', NOW())
ON CONFLICT (id) DO NOTHING;

-- ==========================================
-- 13. SUBJECTS (schedule-service) → table: subjects
-- ==========================================
INSERT INTO "subjects" (id, code, name, description, "createdAt", "updatedAt")
VALUES
  ('subj-001', 'MTK',  'Matematika',          'Pelajaran Matematika',             NOW(), NOW()),
  ('subj-002', 'IND',  'Bahasa Indonesia',    'Pelajaran Bahasa Indonesia',       NOW(), NOW()),
  ('subj-003', 'ING',  'Bahasa Inggris',      'Pelajaran Bahasa Inggris',         NOW(), NOW()),
  ('subj-004', 'FIS',  'Fisika',              'Pelajaran Fisika',                 NOW(), NOW()),
  ('subj-005', 'KIM',  'Kimia',               'Pelajaran Kimia',                  NOW(), NOW()),
  ('subj-006', 'BIO',  'Biologi',             'Pelajaran Biologi',                NOW(), NOW()),
  ('subj-007', 'PJOK', 'PJOK',               'Pendidikan Jasmani Olahraga',      NOW(), NOW()),
  ('subj-008', 'SBD',  'Seni Budaya',         'Pelajaran Seni Budaya',            NOW(), NOW())
ON CONFLICT (code) DO NOTHING;

-- ==========================================
-- 14. SCHEDULES (schedule-service) → table: schedules
-- ==========================================
INSERT INTO "schedules" (id, "classId", "className", "subjectId", "subjectName", "teacherId", "teacherName", day, "startTime", "endTime", "academicYear", semester, "isActive", "createdAt", "updatedAt")
VALUES
  ('sch-001', 'cls-001', 'X MIPA 1', 'subj-001', 'Matematika',     'usr-guru', 'Dedi Guru Mapel', 'MONDAY',    '07:00', '08:30', '2024/2025', 1, true, NOW(), NOW()),
  ('sch-002', 'cls-001', 'X MIPA 1', 'subj-004', 'Fisika',         'usr-guru', 'Dedi Guru Mapel', 'MONDAY',    '08:30', '10:00', '2024/2025', 1, true, NOW(), NOW()),
  ('sch-003', 'cls-001', 'X MIPA 1', 'subj-002', 'Bahasa Indonesia','usr-guru', 'Dedi Guru Mapel', 'TUESDAY',   '07:00', '08:30', '2024/2025', 1, true, NOW(), NOW()),
  ('sch-004', 'cls-002', 'X IPS 1',  'subj-001', 'Matematika',     'usr-guru', 'Dedi Guru Mapel', 'WEDNESDAY', '07:00', '08:30', '2024/2025', 1, true, NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- ==========================================
-- 15. NOTIFICATION TEMPLATES (notification-service) → table: notification_templates
-- ==========================================
INSERT INTO "notification_templates" (id, code, name, subject, body, channels, "isActive", "createdAt", "updatedAt")
VALUES
  ('tmpl-001', 'VIOLATION_CREATED',   'Pelanggaran Dicatat',   'Pemberitahuan Pelanggaran', 'Yth. Orang Tua/Wali {{studentName}}, putra/putri Anda telah dicatat melakukan pelanggaran: {{categoryName}} pada {{violationDate}}.', '["INTERNAL","EMAIL"]', true, NOW(), NOW()),
  ('tmpl-002', 'VIOLATION_APPROVED',  'Pelanggaran Disetujui', 'Keputusan Pelanggaran',     'Pelanggaran {{categoryName}} atas nama {{studentName}} telah disetujui. Sanksi: {{sanction}}.', '["INTERNAL","EMAIL"]', true, NOW(), NOW()),
  ('tmpl-003', 'ACHIEVEMENT_CREATED', 'Prestasi Dicatat',      'Selamat atas Prestasi',     'Selamat kepada {{studentName}} atas prestasi: {{title}} tingkat {{level}}.', '["INTERNAL"]', true, NOW(), NOW()),
  ('tmpl-004', 'WELCOME_USER',        'Selamat Datang',        'Akun Berhasil Dibuat',      'Halo {{name}}, akun Anda telah dibuat. Username: {{username}}, Password Sementara: {{tempPassword}}. Segera login dan ganti password Anda.', '["EMAIL"]', true, NOW(), NOW()),
  ('tmpl-005', 'URGENT_PRESENCE',     'Alert Kehadiran',       'Peringatan Kehadiran Siswa','Anak Anda {{studentName}} tercatat {{status}} pada pelajaran hari ini. Mohon konfirmasi.', '["INTERNAL","WA"]', true, NOW(), NOW())
ON CONFLICT (code) DO NOTHING;

-- ==========================================
-- VERIFIKASI DATA SETELAH SEEDING
-- ==========================================
-- Jalankan query ini untuk memverifikasi data ter-insert:
-- SELECT COUNT(*) AS roles FROM "roles";
-- SELECT COUNT(*) AS users FROM "users";
-- SELECT COUNT(*) AS students FROM "students";
-- SELECT COUNT(*) AS categories FROM "categories";
-- SELECT COUNT(*) AS violations FROM "violations";
-- SELECT COUNT(*) AS achievements FROM "achievements";
-- SELECT COUNT(*) AS subjects FROM "subjects";
-- SELECT COUNT(*) AS notification_templates FROM "notification_templates";
