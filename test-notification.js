const axios = require('axios');

/**
 * TEST NOTIFICATION SERVICE
 * 
 * Pengujian komprehensif untuk Notification Service.
 * Pastikan Auth Service dan Notification Service sudah berjalan.
 */

// Configuration
const BASE_URL = 'http://localhost:3008/api/v1';
const AUTH_URL = 'http://localhost:3001/api/v1/auth';
const INTERNAL_SECRET = 'change-this-to-a-strong-secret-in-production'; // Sesuai .env

async function testNotificationService() {
  try {
    console.log('🚀 MEMULAI PENGUJIAN NOTIFICATION SERVICE...');

    // ==========================================
    // 1. LOGIN ADMIN (Untuk Otorisasi User-facing Endpoints)
    // ==========================================
    console.log('\n[1] Login Admin untuk Otorisasi...');
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
    const adminHeaders = { 
      Authorization: `Bearer ${adminToken}`,
      'x-user-id': loginRes.data.data.user.id,
      'x-user-username': loginRes.data.data.user.username,
      'x-user-roles': JSON.stringify(loginRes.data.data.user.roles || [])
    };
    const internalHeaders = { 'x-internal-secret': INTERNAL_SECRET };
    
    const adminId = loginRes.data.data.user.id;
    const adminEmail = loginRes.data.data.user.email || 'admin@school.com';
    const adminName = loginRes.data.data.user.name || 'Administrator';
    
    console.log(`✅ Admin berhasil login (ID: ${adminId})`);

    // ==========================================
    // 2. TESTING TEMPLATES (Admin Access)
    // ==========================================
    console.log('\n[2] Testing Template Management...');
    
    // Create Template
    const templateData = {
      code: 'TEST_TEMPLATE_' + Date.now().toString().slice(-4),
      name: 'Test Notification Template',
      subject: 'Test Subject',
      body: 'Hello, this is a test notification body.', // Note: controller uses 'body' from schema
      channels: ['INTERNAL', 'EMAIL'],
      isActive: true
    };
    
    const createTemplateRes = await axios.post(`${BASE_URL}/notifications/templates`, templateData, { headers: adminHeaders });
    const templateId = createTemplateRes.data.data.id;
    console.log(`✅ Template created (ID: ${templateId})`);

    // Get Templates
    const getTemplatesRes = await axios.get(`${BASE_URL}/notifications/templates`, { headers: adminHeaders });
    console.log(`✅ Get templates success (Count: ${getTemplatesRes.data.data.length})`);

    // Update Template
    const updateData = {
      subject: 'Updated Test Subject'
    };
    const updateTemplateRes = await axios.put(`${BASE_URL}/notifications/templates/${templateId}`, updateData, { headers: adminHeaders });
    console.log(`✅ Template updated success`);

    // ==========================================
    // 3. TESTING INTERNAL TRIGGERS (Service-to-Service)
    // ==========================================
    console.log('\n[3] Testing Internal Notification Triggers...');

    // Trigger Single Notification
    const triggerData = {
      userId: adminId,
      type: 'GENERAL',
      title: 'Notifikasi Test',
      message: 'Ini adalah pesan notifikasi tunggal dari pengujian.',
      category: 'SYSTEM',
      channels: ['INTERNAL']
    };
    
    const triggerRes = await axios.post(`${BASE_URL}/internal/notifications/`, triggerData, { headers: internalHeaders });
    console.log(`✅ Single notification triggered: ${triggerRes.data.message}`);

    // Trigger Batch Notification
    const batchData = {
      notifications: [
        {
          userId: adminId,
          type: 'BATCH_1',
          title: 'Batch Test 1',
          message: 'Pesan batch 1',
          category: 'GENERAL'
        },
        {
          userId: adminId,
          type: 'BATCH_2',
          title: 'Batch Test 2',
          message: 'Pesan batch 2',
          category: 'GENERAL'
        }
      ]
    };
    const batchRes = await axios.post(`${BASE_URL}/internal/notifications/batch`, batchData, { headers: internalHeaders });
    console.log(`✅ Batch notification triggered: ${batchRes.data.message}`);

    // Trigger Urgent Alert
    const urgentData = {
      userId: adminId,
      type: 'URGENT',
      title: 'PERINGATAN SISTEM',
      message: 'Ini adalah peringatan sistem mendesak!',
      category: 'SYSTEM',
      channels: ['INTERNAL', 'EMAIL']
    };
    const urgentRes = await axios.post(`${BASE_URL}/internal/notifications/urgent`, urgentData, { headers: internalHeaders });
    console.log(`✅ Urgent notification triggered: ${urgentRes.data.message}`);

    // Trigger Welcome Email
    const welcomeData = {
      id: adminId,
      username: 'admin',
      email: adminEmail,
      name: adminName,
      tempPassword: 'password123'
    };
    const welcomeRes = await axios.post(`${BASE_URL}/internal/notifications/welcome`, welcomeData, { headers: internalHeaders });
    console.log(`✅ Welcome email triggered: ${welcomeRes.data.message}`);

    // ==========================================
    // 4. TESTING USER NOTIFICATION CENTER
    // ==========================================
    console.log('\n[4] Testing User Notification Center...');

    // Tunggu sebentar agar notifikasi masuk ke DB
    await new Promise(r => setTimeout(r, 500));

    // Get My Notifications
    const myNotifRes = await axios.get(`${BASE_URL}/notifications/my`, { headers: adminHeaders });
    const items = myNotifRes.data.data.items;
    console.log(`✅ Get my notifications success (Count: ${items.length})`);
    
    const latestNotifId = items[0]?.id;

    // Get Unread Count
    const unreadRes = await axios.get(`${BASE_URL}/notifications/unread-count`, { headers: adminHeaders });
    console.log(`✅ Get unread count: ${unreadRes.data.data.count}`);

    // Mark as Read
    if (latestNotifId) {
      const markReadRes = await axios.post(`${BASE_URL}/notifications/mark-read`, { 
        notificationIds: [latestNotifId] 
      }, { headers: adminHeaders });
      console.log(`✅ Mark as read success`);
    }

    console.log('\n🏆 SEMUA TEST NOTIFICATION SERVICE BERHASIL!');

  } catch (error) {
    console.error('\n❌ PENGUJIAN GAGAL:');
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error('Data:', JSON.stringify(error.response.data, null, 2));
    } else if (error.request) {
      console.error('No response received from server. Check if services are running on the correct ports.');
      console.error('Target URL:', error.config.url);
    } else {
      console.error('Error:', error.message);
    }
  }
}

testNotificationService();
