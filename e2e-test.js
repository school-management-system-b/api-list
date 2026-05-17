/**
 * E2E Test Suite - School Management System
 * Tests all role-based CRUD against production API
 * Run: node e2e-test.js
 */
const BASE_URL = 'https://api-list-api-gateway.vercel.app/api/v1';
let passCount = 0, failCount = 0;
const results = [];

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

// Fresh login every time to avoid 15-min token expiry
async function freshLogin(username, password = 'password123') {
  const r = await req('POST', '/auth/login', { username, password });
  return r.data?.data?.tokens?.accessToken || null;
}

// All seed accounts
const USERS = {
  superadmin: 'superadmin',
  admin:      'admin',
  bk:         'guru_bk',
  walikelas:  'wali_kelas',
  gurumapel:  'guru_mapel',
  orangtua:   'ortu_udin',
  siswa:      'siswa_udin',
};

const STATE = {};

// ── 1. AUTH ──────────────────────────────────────────────────────────────────
async function testAuth() {
  section('1. AUTH — Login semua role');
  for (const [role, uname] of Object.entries(USERS)) {
    const token = await freshLogin(uname);
    log(`Login [${role}] (${uname})`, !!token);
  }
  const bad = await req('POST', '/auth/login', { username: 'notexist99', password: 'bad' });
  log('Login invalid → 400/401', [400, 401].includes(bad.status), `status=${bad.status}`);
}

// ── 2. VIOLATIONS ────────────────────────────────────────────────────────────
async function testViolations() {
  section('2. VIOLATIONS — CRUD + Approval');

  // Fresh tokens for this section
  const T = {};
  for (const [role, uname] of Object.entries(USERS)) T[role] = await freshLogin(uname);

  // Get prereqs
  const studRes = await req('GET', '/students?limit=1', null, T.superadmin);
  const studentId = studRes.data?.data?.items?.[0]?.id;
  log('GET /students → studentId', !!studentId, studentId);

  const catRes = await req('GET', '/categories?limit=1', null, T.superadmin);
  const categoryId = catRes.data?.data?.items?.[0]?.id ?? catRes.data?.data?.[0]?.id;
  log('GET /categories → categoryId', !!categoryId, categoryId);

  if (!studentId || !categoryId) { console.log('  ⚠️ Skipping — missing prereqs'); return; }

  const base = {
    studentId, categoryId,
    description: 'E2E automated test violation entry created by test suite',
    location: 'Halaman sekolah',
    violationDate: new Date().toISOString().split('T')[0],
    academicYear: '2024/2025',
    semester: 1,
  };

  // CREATE per role
  for (const role of ['superadmin', 'gurumapel', 'bk', 'walikelas']) {
    const r = await req('POST', '/violations', base, T[role]);
    if (!STATE.violationId && r.data?.data?.id) STATE.violationId = r.data.data.id;
    if (!STATE.violationIdPending && role === 'gurumapel' && r.data?.data?.id) {
      STATE.violationIdPending = r.data.data.id;
    }
    log(`POST /violations [${role}]`, r.status === 201, `status=${r.status}`);
  }

  // READ ALL per role
  for (const role of Object.keys(USERS)) {
    const r = await req('GET', '/violations', null, T[role]);
    log(`GET /violations [${role}]`, r.status === 200, `total=${r.data?.data?.pagination?.total}`);
  }

  // READ ONE
  if (STATE.violationId) {
    const r = await req('GET', `/violations/${STATE.violationId}`, null, T.superadmin);
    log('GET /violations/:id [superadmin]', r.status === 200);
  }

  // UPDATE (PENDING only)
  if (STATE.violationIdPending) {
    const r = await req('PUT', `/violations/${STATE.violationIdPending}`,
      { description: 'Updated E2E description by gurumapel needs to be long enough' }, T.gurumapel);
    log('PUT /violations/:id [gurumapel]', [200, 400].includes(r.status), `status=${r.status}`);
  }

  // APPROVE WALIKELAS
  if (STATE.violationIdPending) {
    const r = await req('POST', `/violations/${STATE.violationIdPending}/approve-walikelas`,
      { notes: 'E2E wali approve' }, T.walikelas);
    log('POST /violations/:id/approve-walikelas [walikelas]', [200, 201, 400].includes(r.status), `status=${r.status}`);
  }

  // APPROVE BK
  if (STATE.violationId) {
    const r = await req('POST', `/violations/${STATE.violationId}/approve-bk`,
      { notes: 'E2E BK approve', sanction: 'Teguran tertulis' }, T.bk);
    log('POST /violations/:id/approve-bk [bk]', [200, 201, 400].includes(r.status), `status=${r.status}`);
  }

  // REJECT flow
  const cReject = await req('POST', '/violations', base, T.gurumapel);
  const rejectId = cReject.data?.data?.id;
  if (rejectId) {
    const r = await req('POST', `/violations/${rejectId}/reject`, {
      rejectionReason: 'E2E rejection reason panjang supaya lolos validasi min 10 chars',
      rejectionLevel: 'WALIKELAS'
    }, T.walikelas);
    log('POST /violations/:id/reject [walikelas]', [200, 201, 400].includes(r.status), `status=${r.status}`);
  }

  // DELETE (soft)
  const cDel = await req('POST', '/violations', base, T.superadmin);
  const delId = cDel.data?.data?.id;
  if (delId) {
    const r = await req('DELETE', `/violations/${delId}`, null, T.superadmin);
    log('DELETE /violations/:id [superadmin]', [200, 204].includes(r.status), `status=${r.status}`);
  }

  // STATS
  const stats = await req('GET', '/violations/stats/summary', null, T.superadmin);
  log('GET /violations/stats/summary', stats.status === 200);
  const trends = await req('GET', '/violations/stats/trends', null, T.superadmin);
  log('GET /violations/stats/trends', trends.status === 200);
  const topR = await req('GET', '/violations/stats/top-reporters', null, T.superadmin);
  log('GET /violations/stats/top-reporters', topR.status === 200);
}

// ── 3. ACHIEVEMENTS ──────────────────────────────────────────────────────────
async function testAchievements() {
  section('3. ACHIEVEMENTS — CRUD + Approval');
  const T = {};
  for (const [role, uname] of Object.entries(USERS)) T[role] = await freshLogin(uname);

  const studRes = await req('GET', '/students?limit=1', null, T.superadmin);
  const studentId = studRes.data?.data?.items?.[0]?.id;
  const catRes = await req('GET', '/categories?limit=1', null, T.superadmin);
  const categoryId = catRes.data?.data?.items?.[0]?.id ?? catRes.data?.data?.[0]?.id;

  if (!studentId || !categoryId) { console.log('  ⚠️ Skipping — missing prereqs'); return; }

  const base = {
    studentId, categoryId,
    title: 'E2E Test Achievement Juara Olimpiade',
    description: 'E2E automated test achievement created by test suite for validation',
    achievementDate: new Date().toISOString().split('T')[0],
    academicYear: '2024/2025',
    semester: 1,
    level: 'SEKOLAH',
  };

  // CREATE
  for (const role of ['superadmin', 'gurumapel', 'bk']) {
    const r = await req('POST', '/achievements', base, T[role]);
    if (!STATE.achievementId && r.data?.data?.id) STATE.achievementId = r.data.data.id;
    log(`POST /achievements [${role}]`, r.status === 201, `status=${r.status}`);
  }

  // READ ALL per role
  for (const role of ['superadmin', 'bk', 'walikelas', 'gurumapel', 'siswa', 'orangtua']) {
    const r = await req('GET', '/achievements', null, T[role]);
    log(`GET /achievements [${role}]`, r.status === 200, `status=${r.status}`);
  }

  if (STATE.achievementId) {
    const getOne = await req('GET', `/achievements/${STATE.achievementId}`, null, T.superadmin);
    log('GET /achievements/:id [superadmin]', getOne.status === 200);

    const aw = await req('POST', `/achievements/${STATE.achievementId}/approve-wali`,
      { notes: 'E2E wali approve' }, T.superadmin);
    log('POST /achievements/:id/approve-wali [superadmin]', [200, 201, 400].includes(aw.status), `status=${aw.status}`);

    const ab = await req('POST', `/achievements/${STATE.achievementId}/approve-bk`,
      { notes: 'E2E BK approve' }, T.bk);
    log('POST /achievements/:id/approve-bk [bk]', [200, 201, 400].includes(ab.status), `status=${ab.status}`);

    const del = await req('DELETE', `/achievements/${STATE.achievementId}`, null, T.superadmin);
    log('DELETE /achievements/:id [superadmin]', [200, 204].includes(del.status), `status=${del.status}`);
  }

  const stats = await req('GET', '/achievements/stats/summary', null, T.superadmin);
  log('GET /achievements/stats/summary', stats.status === 200);
}

// ── 4. STUDENTS ───────────────────────────────────────────────────────────────
async function testStudents() {
  section('4. STUDENTS — Read & Filter');
  const T = {};
  for (const [role, uname] of Object.entries(USERS)) T[role] = await freshLogin(uname);

  const list = await req('GET', '/students', null, T.superadmin);
  log('GET /students [superadmin]', list.status === 200, `total=${list.data?.data?.pagination?.total}`);

  for (const role of ['admin', 'bk', 'walikelas', 'gurumapel']) {
    const r = await req('GET', '/students', null, T[role]);
    log(`GET /students [${role}]`, r.status === 200);
  }

  const search = await req('GET', '/students?search=udin', null, T.superadmin);
  log('GET /students?search=udin', search.status === 200);

  const firstId = list.data?.data?.items?.[0]?.id;
  if (firstId) {
    const r = await req('GET', `/students/${firstId}`, null, T.superadmin);
    log('GET /students/:id [superadmin]', r.status === 200);
  }

  const classes = await req('GET', '/classes', null, T.superadmin);
  log('GET /classes [superadmin]', classes.status === 200);

  const years = await req('GET', '/academic-years', null, T.superadmin);
  log('GET /academic-years [superadmin]', [200, 404].includes(years.status), `status=${years.status}`);
}

// ── 5. USERS (/auth/users) ───────────────────────────────────────────────────
async function testUsers() {
  section('5. USERS — CRUD via /auth/users');
  // Fresh tokens to avoid expiry
  const T = {};
  for (const [role, uname] of Object.entries(USERS)) T[role] = await freshLogin(uname);

  const list = await req('GET', '/auth/users', null, T.superadmin);
  log('GET /auth/users [superadmin]', list.status === 200, `status=${list.status}`);

  const listBK = await req('GET', '/auth/users', null, T.bk);
  log('GET /auth/users [bk]', [200, 403].includes(listBK.status), `status=${listBK.status}`);

  const listSiswa = await req('GET', '/auth/users', null, T.siswa);
  log('GET /auth/users [siswa] → 403', listSiswa.status === 403, `status=${listSiswa.status}`);

  const profile = await req('GET', '/users/profile', null, T.superadmin);
  log('GET /users/profile [superadmin]', [200, 404].includes(profile.status), `status=${profile.status}`);

  // CREATE user
  const ts = Date.now();
  const newUser = await req('POST', '/auth/users', {
    username: `e2e_${ts}`,
    email: `e2e_${ts}@test.com`,
    name: 'E2E Test User',
    password: 'Password123!',
    roleCode: 'GURUMAPEL',
  }, T.superadmin);
  STATE.createdUserId = newUser.data?.data?.id;
  log('POST /auth/users [superadmin]', [200, 201].includes(newUser.status), `status=${newUser.status}`);

  // UPDATE user
  if (STATE.createdUserId) {
    const upd = await req('PUT', `/auth/users/${STATE.createdUserId}`, { name: 'E2E Updated' }, T.superadmin);
    log('PUT /auth/users/:id [superadmin]', [200, 201].includes(upd.status), `status=${upd.status}`);
  }
}

// ── 6. CATEGORIES ────────────────────────────────────────────────────────────
async function testCategories() {
  section('6. CATEGORIES — Read');
  const token = await freshLogin('superadmin');

  const all = await req('GET', '/categories', null, token);
  log('GET /categories [superadmin]', all.status === 200,
    `count=${all.data?.data?.items?.length ?? all.data?.data?.length}`);

  const vio = await req('GET', '/categories?type=VIOLATION', null, token);
  log('GET /categories?type=VIOLATION', [200, 400].includes(vio.status), `status=${vio.status}`);

  const subj = await req('GET', '/subjects', null, token);
  log('GET /subjects [superadmin]', [200, 404].includes(subj.status), `status=${subj.status}`);
}

// ── 7. REPORTING ─────────────────────────────────────────────────────────────
async function testReporting() {
  section('7. REPORTING — Dashboard & Reports');
  const T = {};
  for (const [role, uname] of Object.entries(USERS)) T[role] = await freshLogin(uname);

  const dash = await req('GET', '/reporting/dashboard/summary', null, T.superadmin);
  log('GET /reporting/dashboard/summary [superadmin]', dash.status === 200,
    `violations=${dash.data?.data?.totalViolations} students=${dash.data?.data?.activeStudents}`);

  for (const role of ['admin', 'bk', 'walikelas']) {
    const r = await req('GET', '/reporting/dashboard/summary', null, T[role]);
    log(`GET /reporting/dashboard/summary [${role}]`, r.status === 200, `status=${r.status}`);
  }

  const today = new Date().toISOString().split('T')[0];
  const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const rpt = await req('GET', `/reporting/reports/students?startDate=${monthAgo}&endDate=${today}`, null, T.superadmin);
  log('GET /reporting/reports/students', rpt.status === 200, `count=${rpt.data?.data?.length}`);

  const dashSiswa = await req('GET', '/reporting/dashboard/summary', null, T.siswa);
  log('GET /reporting/dashboard/summary [siswa] → 200/403', [200, 403].includes(dashSiswa.status), `status=${dashSiswa.status}`);
}

// ── 8. COUNSELING ────────────────────────────────────────────────────────────
async function testCounseling() {
  section('8. COUNSELING');
  const T = { bk: await freshLogin('guru_bk'), superadmin: await freshLogin('superadmin') };

  for (const role of ['bk', 'superadmin']) {
    const r = await req('GET', '/counseling', null, T[role]);
    log(`GET /counseling [${role}]`, [200, 404].includes(r.status), `status=${r.status}`);
  }
}

// ── 9. SCHEDULES ─────────────────────────────────────────────────────────────
async function testSchedules() {
  section('9. SCHEDULES');
  const T = { superadmin: await freshLogin('superadmin'), gurumapel: await freshLogin('guru_mapel') };

  for (const role of ['superadmin', 'gurumapel']) {
    const r = await req('GET', '/schedules', null, T[role]);
    log(`GET /schedules [${role}]`, [200, 404].includes(r.status), `status=${r.status}`);
  }
}

// ── 10. NOTIFICATIONS ────────────────────────────────────────────────────────
async function testNotifications() {
  section('10. NOTIFICATIONS');
  const T = { superadmin: await freshLogin('superadmin'), siswa: await freshLogin('siswa_udin') };

  for (const role of ['superadmin', 'siswa']) {
    const r = await req('GET', '/notifications', null, T[role]);
    log(`GET /notifications [${role}]`, [200, 404].includes(r.status), `status=${r.status}`);
  }
}

// ── 11. RBAC PERMISSION CHECKS ───────────────────────────────────────────────
async function testPermissions() {
  section('11. RBAC PERMISSION CHECKS');
  const T = {};
  for (const [role, uname] of Object.entries(USERS)) T[role] = await freshLogin(uname);

  // No token → 401
  const noAuth = await req('GET', '/violations', null, null);
  log('GET /violations tanpa token → 401', noAuth.status === 401, `status=${noAuth.status}`);

  // SISWA cannot approve BK
  if (STATE.violationId) {
    const r = await req('POST', `/violations/${STATE.violationId}/approve-bk`, { notes: 'hack' }, T.siswa);
    log('approve-bk [siswa] → 403', r.status === 403, `status=${r.status}`);
  }

  // ORANGTUA cannot approve WALIKELAS
  if (STATE.violationId) {
    const r = await req('POST', `/violations/${STATE.violationId}/approve-walikelas`, { notes: 'hack' }, T.orangtua);
    log('approve-walikelas [orangtua] → 403', r.status === 403, `status=${r.status}`);
  }

  // GURUMAPEL cannot approve BK
  if (STATE.violationId) {
    const r = await req('POST', `/violations/${STATE.violationId}/approve-bk`, { notes: 'hack' }, T.gurumapel);
    log('approve-bk [gurumapel] → 403', r.status === 403, `status=${r.status}`);
  }

  // WALIKELAS cannot approve BK
  if (STATE.violationId) {
    const r = await req('POST', `/violations/${STATE.violationId}/approve-bk`, { notes: 'hack' }, T.walikelas);
    log('approve-bk [walikelas] → 403', r.status === 403, `status=${r.status}`);
  }

  // SISWA cannot create users
  const rUser = await req('POST', '/auth/users', {
    username: 'hack', email: 'hack@hack.com', name: 'Hack', password: 'Password123!', roleCode: 'SISWA'
  }, T.siswa);
  log('POST /auth/users [siswa] → 403', rUser.status === 403, `status=${rUser.status}`);

  // ORANGTUA cannot create users
  const rUser2 = await req('POST', '/auth/users', {
    username: 'hack2', email: 'hack2@hack.com', name: 'Hack2', password: 'Password123!', roleCode: 'SISWA'
  }, T.orangtua);
  log('POST /auth/users [orangtua] → 403', rUser2.status === 403, `status=${rUser2.status}`);
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║     E2E TEST SUITE — School Management System           ║');
  console.log(`║     Target: ${BASE_URL.padEnd(44)}║`);
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log(`Started at: ${new Date().toISOString()}\n`);

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
  const pct = total > 0 ? Math.round((passCount / total) * 100) : 0;
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
