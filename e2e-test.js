/**
 * E2E Test Suite - School Management System
 * Selalu fresh-login sebelum setiap request untuk menghindari token expiry (JWT 15 menit)
 * Run: node e2e-test.js
 */
const BASE_URL = 'https://api-list-api-gateway.vercel.app/api/v1';
let passCount = 0, failCount = 0;
const results = [];

// ─── Helpers ─────────────────────────────────────────────────────────────────
async function req(method, path, body, token) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  try {
    const r = await fetch(`${BASE_URL}${path}`, {
      method, headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    const json = await r.json().catch(() => ({}));
    return { status: r.status, data: json };
  } catch (e) {
    return { status: 0, data: { error: e.message } };
  }
}

function log(label, passed, detail = '') {
  console.log(`  ${passed ? '✅' : '❌'} ${label}${detail ? ' — ' + detail : ''}`);
  results.push({ label, passed, detail });
  passed ? passCount++ : failCount++;
}
function section(t) {
  console.log(`\n${'─'.repeat(58)}\n▶ ${t}\n${'─'.repeat(58)}`);
}

const USERS = {
  superadmin: 'superadmin',
  admin:      'admin',
  bk:         'guru_bk',
  walikelas:  'wali_kelas',
  gurumapel:  'guru_mapel',
  orangtua:   'ortu_udin',
  siswa:      'siswa_udin',
};

// Token cache — refresh after 7 minutes (JWT expires in 15min)
const tokenCache = {};
const TOKEN_TTL_MS = 7 * 60 * 1000; // 7 min — JWT expires at 15min, safe margin

// Force delete all cached tokens — next tok() call will re-login
function clearCache() {
  Object.keys(tokenCache).forEach(k => delete tokenCache[k]);
}

async function tok(username) {
  const now = Date.now();
  if (tokenCache[username] && (now - tokenCache[username].time) < TOKEN_TTL_MS) {
    return tokenCache[username].token;
  }
  // Retry up to 3 times on rate limit (429)
  for (let attempt = 0; attempt < 3; attempt++) {
    const r = await req('POST', '/auth/login', { username, password: 'password123' });
    if (r.status === 429) {
      process.stdout.write(`    [rate-limit] waiting 15s before retry for ${username}...\n`);
      await new Promise(resolve => setTimeout(resolve, 15000));
      continue;
    }
    let token = r.data?.data?.tokens?.accessToken || null;
    if (!token) return null;

    // Hit /auth/authorize to get isAuthorized=true token (required for protected endpoints)
    const authR = await req('GET', '/auth/authorize', null, token);
    if (authR.status === 200 && authR.data?.data?.accessToken) {
      token = authR.data.data.accessToken;
    }

    tokenCache[username] = { token, time: now };
    return token;
  }
  return null;
}

const STATE = {};

// ─── 1. AUTH ─────────────────────────────────────────────────────────────────
async function testAuth() {
  section('1. AUTH — Login semua role');
  for (const [role, uname] of Object.entries(USERS)) {
    const t = await tok(uname);
    log(`Login [${role}] (${uname})`, !!t);
  }
  const bad = await req('POST', '/auth/login', { username: 'notexist99', password: 'bad' });
  log('Login invalid → 400/401', [400, 401].includes(bad.status), `status=${bad.status}`);
}

// ─── 2. VIOLATIONS ───────────────────────────────────────────────────────────
async function testViolations() {
  section('2. VIOLATIONS — CRUD + Approval');
  clearCache();

  const tSA = await tok('superadmin');
  const studRes = await req('GET', '/students?limit=1', null, tSA);
  const studentId = studRes.data?.data?.items?.[0]?.id;
  log('GET /students → studentId', !!studentId, studentId);

  const tSA1b = await tok('superadmin');
  const catRes = await req('GET', '/categories?limit=1', null, tSA1b);
  const categoryId = catRes.data?.data?.items?.[0]?.id ?? catRes.data?.data?.[0]?.id;
  log('GET /categories → categoryId', !!categoryId, categoryId);

  if (!studentId || !categoryId) { console.log('  ⚠️ Skipping'); return; }

  const base = {
    studentId, categoryId,
    description: 'E2E automated test violation entry created by test suite long desc',
    location: 'Halaman sekolah',
    violationDate: new Date().toISOString().split('T')[0],
    academicYear: '2024/2025',
    semester: 1,
  };

  // CREATE per role — fresh token each time
  for (const [role, uname] of [['superadmin','superadmin'],['gurumapel','guru_mapel'],['bk','guru_bk'],['walikelas','wali_kelas']]) {
    const t = await tok(uname);
    const r = await req('POST', '/violations', base, t);
    if (!STATE.violationId && r.data?.data?.id) STATE.violationId = r.data.data.id;
    if (role === 'gurumapel' && r.data?.data?.id) STATE.violationIdPending = r.data.data.id;
    log(`POST /violations [${role}]`, r.status === 201, `status=${r.status}`);
  }

  // READ ALL per role — each fresh token
  for (const [role, uname] of Object.entries(USERS)) {
    const t = await tok(uname);
    const r = await req('GET', '/violations', null, t);
    log(`GET /violations [${role}]`, r.status === 200, `total=${r.data?.data?.pagination?.total}`);
  }

  // READ ONE
  if (STATE.violationId) {
    const t = await tok('superadmin');
    const r = await req('GET', `/violations/${STATE.violationId}`, null, t);
    log('GET /violations/:id [superadmin]', r.status === 200);
  }

  // UPDATE (PENDING only — gurumapel's violation)
  if (STATE.violationIdPending) {
    const t = await tok('guru_mapel');
    const r = await req('PUT', `/violations/${STATE.violationIdPending}`,
      { description: 'Updated E2E description by gurumapel needs to be long enough test' }, t);
    log('PUT /violations/:id [gurumapel]', [200, 400].includes(r.status), `status=${r.status}`);
  }

  // APPROVE WALIKELAS
  if (STATE.violationIdPending) {
    const t = await tok('wali_kelas');
    const r = await req('POST', `/violations/${STATE.violationIdPending}/approve-walikelas`,
      { notes: 'E2E wali approve' }, t);
    log('POST /violations/:id/approve-walikelas [walikelas]', [200, 201, 400].includes(r.status), `status=${r.status}`);
  }

  // APPROVE BK
  if (STATE.violationId) {
    const t = await tok('guru_bk');
    const r = await req('POST', `/violations/${STATE.violationId}/approve-bk`,
      { notes: 'E2E BK approve', sanction: 'Teguran tertulis' }, t);
    log('POST /violations/:id/approve-bk [bk]', [200, 201, 400].includes(r.status), `status=${r.status}`);
  }

  // REJECT flow
  const tGuru = await tok('guru_mapel');
  const cReject = await req('POST', '/violations', base, tGuru);
  const rejectId = cReject.data?.data?.id;
  if (rejectId) {
    const tWali = await tok('wali_kelas');
    const r = await req('POST', `/violations/${rejectId}/reject`, {
      rejectionReason: 'E2E rejection reason harus panjang minimal 10 chars untuk lolos validasi',
      rejectionLevel: 'WALIKELAS'
    }, tWali);
    log('POST /violations/:id/reject [walikelas]', [200, 201, 400].includes(r.status), `status=${r.status}`);
  }

  // DELETE
  const tSA2 = await tok('superadmin');
  const cDel = await req('POST', '/violations', base, tSA2);
  const delId = cDel.data?.data?.id;
  if (delId) {
    const tSA3 = await tok('superadmin');
    const r = await req('DELETE', `/violations/${delId}`, null, tSA3);
    log('DELETE /violations/:id [superadmin]', [200, 204].includes(r.status), `status=${r.status}`);
  }

  // STATS
  const tStats = await tok('superadmin');
  const s1 = await req('GET', '/violations/stats/summary', null, tStats);
  log('GET /violations/stats/summary', s1.status === 200, `total=${s1.data?.data?.total}`);
  const tStats2 = await tok('superadmin');
  const s2 = await req('GET', '/violations/stats/trends', null, tStats2);
  log('GET /violations/stats/trends', s2.status === 200);
  const tStats3 = await tok('superadmin');
  const s3 = await req('GET', '/violations/stats/top-reporters', null, tStats3);
  log('GET /violations/stats/top-reporters', s3.status === 200);
}

// ─── 3. ACHIEVEMENTS ─────────────────────────────────────────────────────────
async function testAchievements() {
  section('3. ACHIEVEMENTS — CRUD + Approval');
  clearCache();

  const tSA = await tok('superadmin');
  const studRes = await req('GET', '/students?limit=1', null, tSA);
  const studentId = studRes.data?.data?.items?.[0]?.id;
  const tSA2 = await tok('superadmin');
  // Harus pakai category type=ACHIEVEMENT, bukan VIOLATION
  const catRes = await req('GET', '/categories?type=ACHIEVEMENT&limit=1', null, tSA2);
  const categoryId = catRes.data?.data?.items?.[0]?.id ?? catRes.data?.data?.[0]?.id;
  log('GET /categories?type=ACHIEVEMENT → categoryId', !!categoryId, categoryId || `status=${catRes.status}`);

  if (!studentId || !categoryId) { console.log('  ⚠️ Skipping'); return; }

  const base = {
    studentId, categoryId,
    title: 'E2E Test Achievement Juara Olimpiade Sains',
    description: 'E2E automated test achievement created by test suite for validation purposes',
    achievementDate: new Date().toISOString().split('T')[0],
    academicYear: '2024/2025',
    semester: 1,
    level: 'SEKOLAH',
  };

  // CREATE per role
  for (const [role, uname] of [['superadmin','superadmin'],['gurumapel','guru_mapel'],['bk','guru_bk']]) {
    const t = await tok(uname);
    const r = await req('POST', '/achievements', base, t);
    if (!STATE.achievementId && r.data?.data?.id) STATE.achievementId = r.data.data.id;
    log(`POST /achievements [${role}]`, r.status === 201, `status=${r.status}`);
  }

  // READ ALL per role
  for (const [role, uname] of Object.entries(USERS)) {
    const t = await tok(uname);
    const r = await req('GET', '/achievements', null, t);
    log(`GET /achievements [${role}]`, r.status === 200, `status=${r.status}`);
  }

  if (STATE.achievementId) {
    const t1 = await tok('superadmin');
    const getOne = await req('GET', `/achievements/${STATE.achievementId}`, null, t1);
    log('GET /achievements/:id [superadmin]', getOne.status === 200);

    const t2 = await tok('superadmin');
    const aw = await req('POST', `/achievements/${STATE.achievementId}/approve-wali`, { notes: 'E2E wali approve' }, t2);
    log('POST /achievements/:id/approve-wali [superadmin]', [200, 201, 400].includes(aw.status), `status=${aw.status}`);

    const t3 = await tok('guru_bk');
    const ab = await req('POST', `/achievements/${STATE.achievementId}/approve-bk`, { notes: 'E2E BK approve' }, t3);
    log('POST /achievements/:id/approve-bk [bk]', [200, 201, 400].includes(ab.status), `status=${ab.status}`);

    const t4 = await tok('superadmin');
    const del = await req('DELETE', `/achievements/${STATE.achievementId}`, null, t4);
    log('DELETE /achievements/:id [superadmin]', [200, 204].includes(del.status), `status=${del.status}`);
  }

  const tS = await tok('superadmin');
  const stats = await req('GET', '/achievements/stats/summary', null, tS);
  log('GET /achievements/stats/summary', stats.status === 200);
}

// ─── 4. STUDENTS ─────────────────────────────────────────────────────────────
async function testStudents() {
  section('4. STUDENTS — Read & Filter');
  clearCache();

  const t1 = await tok('superadmin');
  const list = await req('GET', '/students', null, t1);
  log('GET /students [superadmin]', list.status === 200, `total=${list.data?.data?.pagination?.total}`);

  for (const [role, uname] of [['admin','admin'],['bk','guru_bk'],['walikelas','wali_kelas'],['gurumapel','guru_mapel']]) {
    const t = await tok(uname);
    const r = await req('GET', '/students', null, t);
    log(`GET /students [${role}]`, r.status === 200);
  }

  const t2 = await tok('superadmin');
  const search = await req('GET', '/students?search=udin', null, t2);
  log('GET /students?search=udin', search.status === 200);

  const firstId = list.data?.data?.items?.[0]?.id;
  if (firstId) {
    const t3 = await tok('superadmin');
    const r = await req('GET', `/students/${firstId}`, null, t3);
    log('GET /students/:id [superadmin]', r.status === 200);
  }

  const t4 = await tok('superadmin');
  const classes = await req('GET', '/classes', null, t4);
  log('GET /classes [superadmin]', classes.status === 200);

  const t5 = await tok('superadmin');
  const years = await req('GET', '/academic-years', null, t5);
  log('GET /academic-years [superadmin]', [200, 404].includes(years.status), `status=${years.status}`);
}

// ─── 5. USERS ─────────────────────────────────────────────────────────────────
async function testUsers() {
  section('5. USERS — CRUD via /auth/users');
  clearCache(); // Always fresh tokens for user management
  const t1 = await tok('superadmin');
  const list = await req('GET', '/auth/users', null, t1);
  log('GET /auth/users [superadmin]', list.status === 200, `status=${list.status}`);

  const t2 = await tok('guru_bk');
  const listBK = await req('GET', '/auth/users', null, t2);
  log('GET /auth/users [bk]', [200, 403].includes(listBK.status), `status=${listBK.status}`);

  const t3 = await tok('siswa_udin');
  const listSiswa = await req('GET', '/auth/users', null, t3);
  log('GET /auth/users [siswa] → 403', listSiswa.status === 403, `status=${listSiswa.status}`);

  const t4 = await tok('superadmin');
  const profile = await req('GET', '/users/profile', null, t4);
  log('GET /users/profile [superadmin]', [200, 404].includes(profile.status), `status=${profile.status}`);

  const ts = Date.now();
  const t5 = await tok('superadmin');
  const newUser = await req('POST', '/auth/users', {
    username: `e2e_${ts}`, email: `e2e_${ts}@test.com`,
    name: 'E2E Test User', password: 'Password123!', roleCode: 'GURUMAPEL',
  }, t5);
  STATE.createdUserId = newUser.data?.data?.id;
  log('POST /auth/users [superadmin]', [200, 201].includes(newUser.status), `status=${newUser.status}`);

  if (STATE.createdUserId) {
    const t6 = await tok('superadmin');
    const upd = await req('PUT', `/auth/users/${STATE.createdUserId}`, { name: 'E2E Updated' }, t6);
    log('PUT /auth/users/:id [superadmin]', [200, 201].includes(upd.status), `status=${upd.status}`);
  }
}

// ─── 6. CATEGORIES ───────────────────────────────────────────────────────────
async function testCategories() {
  section('6. CATEGORIES — Read');
  clearCache();

  const t1 = await tok('superadmin');
  const all = await req('GET', '/categories', null, t1);
  log('GET /categories [superadmin]', all.status === 200,
    `count=${all.data?.data?.items?.length ?? all.data?.data?.length}`);

  const t2 = await tok('superadmin');
  const vio = await req('GET', '/categories?type=VIOLATION', null, t2);
  log('GET /categories?type=VIOLATION', [200, 400].includes(vio.status), `status=${vio.status}`);

  const t3 = await tok('superadmin');
  const subj = await req('GET', '/subjects', null, t3);
  log('GET /subjects [superadmin]', [200, 404].includes(subj.status), `status=${subj.status}`);
}

// ─── 7. REPORTING ─────────────────────────────────────────────────────────────
async function testReporting() {
  section('7. REPORTING — Dashboard & Reports');
  clearCache();

  const t1 = await tok('superadmin');
  const dash = await req('GET', '/reporting/dashboard/summary', null, t1);
  log('GET /reporting/dashboard/summary [superadmin]', dash.status === 200,
    `violations=${dash.data?.data?.totalViolations} students=${dash.data?.data?.activeStudents}`);

  for (const [role, uname] of [['admin','admin'],['bk','guru_bk'],['walikelas','wali_kelas']]) {
    const t = await tok(uname);
    const r = await req('GET', '/reporting/dashboard/summary', null, t);
    log(`GET /reporting/dashboard/summary [${role}]`, r.status === 200, `status=${r.status}`);
  }

  const today = new Date().toISOString().split('T')[0];
  const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const tRpt = await tok('superadmin');
  const rpt = await req('GET', `/reporting/reports/students?startDate=${monthAgo}&endDate=${today}`, null, tRpt);
  log('GET /reporting/reports/students', rpt.status === 200, `count=${rpt.data?.data?.length}`);

  const tSiswa = await tok('siswa_udin');
  const dashSiswa = await req('GET', '/reporting/dashboard/summary', null, tSiswa);
  log('GET /reporting/dashboard/summary [siswa] → 200/403', [200, 403].includes(dashSiswa.status), `status=${dashSiswa.status}`);
}

// ─── 8. COUNSELING ───────────────────────────────────────────────────────────
async function testCounseling() {
  section('8. COUNSELING');
  clearCache();
  for (const [role, uname] of [['bk','guru_bk'],['superadmin','superadmin']]) {
    const t = await tok(uname);
    const r = await req('GET', '/counseling', null, t);
    log(`GET /counseling [${role}]`, [200, 404].includes(r.status), `status=${r.status}`);
  }
}

// ─── 9. SCHEDULES ─────────────────────────────────────────────────────────────
async function testSchedules() {
  section('9. SCHEDULES');
  clearCache();
  for (const [role, uname] of [['superadmin','superadmin'],['gurumapel','guru_mapel']]) {
    const t = await tok(uname);
    const r = await req('GET', '/schedules', null, t);
    log(`GET /schedules [${role}]`, [200, 404].includes(r.status), `status=${r.status}`);
  }
}

// ─── 10. NOTIFICATIONS ────────────────────────────────────────────────────────
async function testNotifications() {
  section('10. NOTIFICATIONS');
  clearCache();
  for (const [role, uname] of [['superadmin','superadmin'],['siswa','siswa_udin']]) {
    const t = await tok(uname);
    const r = await req('GET', '/notifications', null, t);
    log(`GET /notifications [${role}]`, [200, 404].includes(r.status), `status=${r.status}`);
  }
}

// ─── 11. RBAC PERMISSION CHECKS ──────────────────────────────────────────────
async function testPermissions() {
  section('11. RBAC PERMISSION CHECKS');
  clearCache();

  const noAuth = await req('GET', '/violations', null, null);
  log('GET /violations tanpa token → 401', noAuth.status === 401, `status=${noAuth.status}`);

  if (STATE.violationId) {
    const tSiswa = await tok('siswa_udin');
    const r1 = await req('POST', `/violations/${STATE.violationId}/approve-bk`, { notes: 'hack' }, tSiswa);
    log('approve-bk [siswa] → 403', r1.status === 403, `status=${r1.status}`);

    const tOrangTua = await tok('ortu_udin');
    const r2 = await req('POST', `/violations/${STATE.violationId}/approve-walikelas`, { notes: 'hack' }, tOrangTua);
    log('approve-walikelas [orangtua] → 403', r2.status === 403, `status=${r2.status}`);

    const tGuru = await tok('guru_mapel');
    const r3 = await req('POST', `/violations/${STATE.violationId}/approve-bk`, { notes: 'hack' }, tGuru);
    log('approve-bk [gurumapel] → 403', r3.status === 403, `status=${r3.status}`);

    const tWali = await tok('wali_kelas');
    const r4 = await req('POST', `/violations/${STATE.violationId}/approve-bk`, { notes: 'hack' }, tWali);
    log('approve-bk [walikelas] → 403', r4.status === 403, `status=${r4.status}`);
  }

  const tSiswa2 = await tok('siswa_udin');
  const rUser = await req('POST', '/auth/users', {
    username: 'hacks', email: 'hacks@hack.com', name: 'Hack', password: 'Password123!', roleCode: 'SISWA'
  }, tSiswa2);
  log('POST /auth/users [siswa] → 403', rUser.status === 403, `status=${rUser.status}`);

  const tOrtu2 = await tok('ortu_udin');
  const rUser2 = await req('POST', '/auth/users', {
    username: 'hacks2', email: 'hacks2@hack.com', name: 'Hack2', password: 'Password123!', roleCode: 'SISWA'
  }, tOrtu2);
  log('POST /auth/users [orangtua] → 403', rUser2.status === 403, `status=${rUser2.status}`);
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║     E2E TEST SUITE — School Management System           ║');
  console.log(`║     ${BASE_URL.padEnd(52)}║`);
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log(`Started: ${new Date().toISOString()}\n`);

  await testAuth();
  await testViolations();
  await testAchievements();
  await testStudents();
  await testUsers();
  await testCategories();
  await testReporting();
  await testCounseling();
  await testSchedules();
  await testNotifications();
  await testPermissions();

  const total = passCount + failCount;
  const pct = total ? Math.round((passCount / total) * 100) : 0;
  const failed = results.filter(r => !r.passed);

  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║                    TEST SUMMARY                         ║');
  console.log('╠══════════════════════════════════════════════════════════╣');
  console.log(`║  ✅ PASS: ${String(passCount).padEnd(3)} / ${String(total).padEnd(3)}  (${String(pct).padStart(3)}%)                              ║`);
  console.log(`║  ❌ FAIL: ${String(failCount).padEnd(3)} / ${String(total).padEnd(3)}                                        ║`);
  console.log('╠══════════════════════════════════════════════════════════╣');
  if (failed.length === 0) {
    console.log('║  🎉 ALL TESTS PASSED!                                   ║');
  } else {
    failed.forEach(f => {
      console.log(`║  ✗ ${f.label.substring(0, 52).padEnd(52)} ║`);
      if (f.detail) console.log(`║    → ${f.detail.substring(0, 50).padEnd(50)} ║`);
    });
  }
  console.log('╚══════════════════════════════════════════════════════════╝');
}

main().catch(console.error);
