const axios = require('axios');

// Configuration
const AUTH_URL = 'http://localhost:3001/api/v1/auth';
const STUDENT_URL = 'http://localhost:3003/api/v1/students';
const VIOLATION_URL = 'http://localhost:3004/api/v1/violations';

async function runFullSOPTest() {
  try {
    console.log('🚀 MEMULAI PENGUJIAN SOP LENGKAP (END-TO-END)...');

    // ==========================================
    // 1. LOGIN ADMIN (SUPER USER)
    // ==========================================
    console.log('\n[1] Login Admin untuk Setup Master Data...');
    const loginRes = await axios.post(`${AUTH_URL}/login`, {
      username: 'admin',
      password: 'password123'
    });
    let tempToken = loginRes.data.data.tokens.accessToken;
    
    // Authorize Admin
    const authzRes = await axios.get(`${AUTH_URL}/authorize`, {
      headers: { Authorization: `Bearer ${tempToken}` }
    });
    const adminToken = authzRes.data.data.accessToken;
    const adminHeaders = { Authorization: `Bearer ${adminToken}` };
    console.log('✅ Admin berhasil login dan diotorisasi.');

    // ==========================================
    // 2. SETUP MASTER DATA (USER & STUDENT)
    // ==========================================
    console.log('\n[2] Membuat Akun-akun Baru (SOP 1)...');
    
    // Create BK User
    const bkUsername = 'bktest' + Date.now().toString().slice(-4);
    const bkRes = await axios.post(`${AUTH_URL}/users`, {
      username: bkUsername,
      email: `${bkUsername}@sekolah.com`,
      name: 'Guru BK Test',
      roleCode: 'GURU_BK'
    }, { headers: adminHeaders });
    const bkId = bkRes.data.data.id;
    const bkTempPass = bkRes.data.data.tempPassword;
    console.log(`✅ Akun BK dibuat: ${bkUsername}`);

    // Create Parent User
    const ortuUsername = 'ortutest' + Date.now().toString().slice(-4);
    const ortuRes = await axios.post(`${AUTH_URL}/users`, {
      username: ortuUsername,
      email: `${ortuUsername}@sekolah.com`,
      name: 'Orang Tua Test',
      roleCode: 'ORANG_TUA'
    }, { headers: adminHeaders });
    const ortuId = ortuRes.data.data.id;
    console.log(`✅ Akun Orang Tua dibuat: ${ortuUsername}`);

    // Create Student User
    const studentUsername = 'siswatest' + Date.now().toString().slice(-4);
    const studentUserRes = await axios.post(`${AUTH_URL}/users`, {
      username: studentUsername,
      email: `${studentUsername}@sekolah.com`,
      name: 'Siswa Test SOP',
      roleCode: 'SISWA'
    }, { headers: adminHeaders });
    const studentUserId = studentUserRes.data.data.id;
    console.log(`✅ Akun Siswa dibuat: ${studentUsername}`);

    // Create Student Entity
    console.log('\n[3] Membuat Entitas Siswa & Menghubungkan Role...');
    const studentRes = await axios.post(`${STUDENT_URL}`, {
      userId: studentUserId,
      nisn: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
      nis: 'NIS' + Math.floor(1000 + Math.random() * 9000),
      name: 'Siswa Test SOP',
      classId: 'cls-001', // X MIPA 1 (Wali: usr-wali)
      gender: 'MALE',
      birthPlace: 'Jakarta',
      birthDate: '2008-01-01',
      religion: 'ISLAM',
      address: 'Jl. SOP No. 1',
      city: 'Jakarta',
      province: 'DKI Jakarta',
      parentId: ortuId,
      academicYear: '2024/2025',
      entryYear: '2024',
      entryDate: new Date().toISOString()
    }, { headers: adminHeaders });
    const studentId = studentRes.data.data.id;
    console.log(`✅ Siswa berhasil dibuat (ID: ${studentId})`);

    // ==========================================
    // 3. CORE WORKFLOW (MAKER - CHECKER)
    // ==========================================
    console.log('\n[4] MAKER: Input Pelanggaran oleh Guru/Wali...');
    const violationData = {
      studentId: studentId,
      categoryId: "cat-v3", // Membolos
      description: "Siswa bolos saat jam pelajaran matematika",
      violationDate: new Date().toISOString(),
      academicYear: "2024/2025",
      semester: 1
    };

    const createRes = await axios.post(`${VIOLATION_URL}`, violationData, { headers: adminHeaders });
    const violationId = createRes.data.data.id;
    console.log(`✅ Pelanggaran dicatat! Status: ${createRes.data.data.status}`);

    console.log('\n[5] APPROVAL 1: Wali Kelas Menyetujui...');
    // Kita gunakan token Admin untuk simulasi approval (karena admin punya akses SUPERADMIN)
    const waliRes = await axios.post(`${VIOLATION_URL}/${violationId}/approve-walikelas`, {
      notes: "Konfirmasi wali kelas: Siswa benar bolos."
    }, { headers: adminHeaders });
    console.log(`✅ Disetujui Wali Kelas. Status: ${waliRes.data.data.status}`);

    console.log('\n[6] CHECKER: Guru BK Memberikan Approval Final...');
    const bkApproveRes = await axios.post(`${VIOLATION_URL}/${violationId}/approve-bk`, {
      notes: "BK menyetujui, poin dikurangi otomatis.",
      sanction: "Teguran tertulis dan pembinaan"
    }, { headers: adminHeaders });
    console.log(`✅ Disetujui BK (Final). Status: ${bkApproveRes.data.data.status}`);

    // ==========================================
    // 4. VERIFIKASI AKHIR
    // ==========================================
    console.log('\n[7] VERIFIKASI: Mengecek Sinkronisasi Poin ke Student Service...');
    await new Promise(r => setTimeout(r, 1000)); // Tunggu sync
    const studentFinalRes = await axios.get(`${STUDENT_URL}/${studentId}`, { headers: adminHeaders });
    const finalPoints = studentFinalRes.data.data.totalPoints;
    const finalNegative = studentFinalRes.data.data.negativePoints;
    
    console.log(`📊 Hasil Akhir Siswa:`);
    console.log(`   - Total Poin: ${finalPoints}`);
    console.log(`   - Poin Pelanggaran: ${finalNegative}`);

    if (finalNegative > 0) {
      console.log('\n🏆 SEMUA SOP BERHASIL DIUJI: AKUN -> SISWA -> PELANGGARAN -> APPROVAL -> SYNC POIN');
    } else {
      console.log('\n⚠️ Poin tidak berkurang. Periksa koneksi antar-service.');
    }

  } catch (error) {
    console.error('\n❌ PENGUJIAN GAGAL:');
    console.error(error.response?.data || error.message);
  }
}

runFullSOPTest();
