const axios = require('axios');

const AUTH_URL = 'http://localhost:3001/api/v1/auth';
const STUDENT_URL = 'http://localhost:3003/api/v1/students';

async function runAdminOps() {
  try {
    console.log('🔄 Memulai Pengujian Operasi Admin & Setup Master Data...');

    // 1. Login sebagai Admin
    console.log('\n[1] Login sebagai Admin...');
    const loginRes = await axios.post(`${AUTH_URL}/login`, {
      username: 'admin',
      password: 'password123'
    });
    let tempToken = loginRes.data.data.tokens.accessToken;
    
    // Step 2: Authorize token
    const authzRes = await axios.get(`${AUTH_URL}/authorize`, {
      headers: { Authorization: `Bearer ${tempToken}` }
    });
    const token = authzRes.data.data.accessToken;
    const headers = { Authorization: `Bearer ${token}` };
    console.log('✅ Admin berhasil login dan diotorisasi.');

    // 2. Pembuatan Akun (SOP 1 - Super Admin/Admin)
    console.log('\n[2] Membuat Akun Guru BK Baru...');
    const newBkUser = {
      username: 'bkbaru' + Date.now().toString().slice(-6),
      email: `bk${Date.now()}@sekolah.com`,
      name: 'Guru BK Baru',
      roleCode: 'GURU_BK'
    };

    const bkRes = await axios.post(`${AUTH_URL}/users`, newBkUser, { headers });
    const bkId = bkRes.data.data.id;
    const bkTempPass = bkRes.data.data.tempPassword;
    console.log(`✅ Akun BK berhasil dibuat: ${newBkUser.username} (ID: ${bkId})`);
    console.log(`🔑 Password Sementara: ${bkTempPass}`);

    console.log('\n[3] Membuat Akun Orang Tua Baru...');
    const newOrtuUser = {
      username: 'ortubaru' + Date.now().toString().slice(-6),
      email: `ortu${Date.now()}@sekolah.com`,
      name: 'Bapak Ortu Baru',
      roleCode: 'ORANG_TUA'
    };

    const ortuRes = await axios.post(`${AUTH_URL}/users`, newOrtuUser, { headers });
    const ortuId = ortuRes.data.data.id;
    console.log(`✅ Akun Orang Tua berhasil dibuat: ${newOrtuUser.username} (ID: ${ortuId})`);

    console.log('\n[4] Membuat Akun Siswa Baru...');
    const newStudentUser = {
      username: 'siswabaru' + Date.now().toString().slice(-6),
      email: `siswa${Date.now()}@sekolah.com`,
      name: 'Siswa Test Baru',
      roleCode: 'SISWA'
    };
    const studentUserRes = await axios.post(`${AUTH_URL}/users`, newStudentUser, { headers });
    const studentUserId = studentUserRes.data.data.id;
    console.log(`✅ Akun Siswa berhasil dibuat: ${newStudentUser.username} (ID: ${studentUserId})`);

    // 3. Pembuatan Data Siswa (SOP 1)
    console.log('\n[5] Membuat Data Siswa & Menautkan ke Wali Kelas & Orang Tua...');
    const newStudent = {
      userId: studentUserId, // Link ke User yang baru dibuat
      nisn: '00' + Math.floor(10000000 + Math.random() * 90000000),
      nis: 'NIS' + Math.floor(1000 + Math.random() * 9000),
      name: 'Siswa Test Baru',
      classId: 'cls-001', // X MIPA 1
      gender: 'MALE',
      birthPlace: 'Jakarta',
      birthDate: '2008-01-01',
      religion: 'ISLAM',
      address: 'Jl. Test No. 123',
      city: 'Jakarta',
      province: 'DKI Jakarta',
      parentId: ortuId, // Link ke Ortu yang baru dibuat
      academicYear: '2024/2025',
      entryYear: '2024',
      entryDate: new Date().toISOString()
    };

    const studentRes = await axios.post(`${STUDENT_URL}`, newStudent, { headers });
    console.log(`✅ Data Siswa berhasil dibuat: ${studentRes.data.data.name} (ID: ${studentRes.data.data.id})`);
    console.log(`🔗 Siswa ini sekarang terhubung dengan Orang Tua ID: ${ortuId}`);

    // 4. Pengujian Login User Baru (SOP 1 - Activation)
    console.log('\n[6] Menunggu sejenak agar DB sinkron...');
    await new Promise(r => setTimeout(r, 2000));
    
    console.log(`\n[6] Simulasi User Baru Login (${newBkUser.username} / ${bkTempPass})...`);
    const bkLoginRes = await axios.post(`${AUTH_URL}/login`, {
      username: newBkUser.username,
      password: bkTempPass
    });
    const bkTempToken = bkLoginRes.data.data.tokens.accessToken;
    
    // Authorize BK Token
    const bkAuthzRes = await axios.get(`${AUTH_URL}/authorize`, {
      headers: { Authorization: `Bearer ${bkTempToken}` }
    });
    const bkToken = bkAuthzRes.data.data.accessToken;

    console.log('✅ BK Baru berhasil login dengan password sementara.');

    // Ganti password (Aktivasi) - URL is /api/v1/auth/activate
    const activateRes = await axios.post(`${AUTH_URL}/activate`, {
      currentPassword: bkTempPass,
      newPassword: 'PasswordBaru123!',
      confirmPassword: 'PasswordBaru123!'
    }, { headers: { Authorization: `Bearer ${bkToken}` } });
    console.log('✅ Akun BK berhasil diaktivasi (Password diganti).');

    console.log('\n🎉 PENGUJIAN OPERASI ADMIN SELESAI!');

  } catch (error) {
    console.error('\n❌ Terjadi Kesalahan:', error.response?.data || error.message);
  }
}

runAdminOps();
