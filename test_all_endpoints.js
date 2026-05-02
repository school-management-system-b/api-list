const http = require('http');

const SERVICES = {
  apiGateway: 3000,
  auth: 3001,
  user: 3002,
  student: 3003,
  violation: 3004,
  achievement: 3005,
  notification: 3006,
  reporting: 3007,
  counseling: 3008,
  category: 3009,
  schedule: 3010
};

let token = '';

async function fetchJSON(url, options = {}) {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...options.headers
      }
    });
    
    const isJson = res.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await res.json() : await res.text();
    
    return {
      url,
      status: res.status,
      ok: res.ok,
      data
    };
  } catch (error) {
    return { url, status: 'ERROR', error: error.message };
  }
}

async function runTests() {
  console.log("=== STARTING MICROSERVICES HEALTH CHECK ===\n");

  console.log("1. Testing Auth Service (Login)...");
  const loginRes = await fetchJSON(`http://localhost:${SERVICES.apiGateway}/api/v1/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ username: 'admin', password: 'password123' })
  });

  if (loginRes.ok && loginRes.data?.data?.tokens?.accessToken) {
    token = loginRes.data.data.tokens.accessToken;
    console.log("✅ Auth login successful! Token acquired.\n");
  } else {
    console.log("❌ Auth login failed!", loginRes);
    return;
  }

  // Correct paths for testing
  const endpointsToTest = [
    { name: "User Service (Profile)", url: `http://localhost:${SERVICES.apiGateway}/api/v1/users/profile` },
    { name: "Student Service (List)", url: `http://localhost:${SERVICES.apiGateway}/api/v1/students` },
    { name: "Category Service (List Categories)", url: `http://localhost:${SERVICES.apiGateway}/api/v1/categories` },
    { name: "Violation Service (Stats)", url: `http://localhost:${SERVICES.apiGateway}/api/v1/violations/stats/summary` },
    { name: "Achievement Service (List)", url: `http://localhost:${SERVICES.apiGateway}/api/v1/achievements` },
    { name: "Counseling Service (List)", url: `http://localhost:${SERVICES.apiGateway}/api/v1/counseling` },
    { name: "Reporting Service (Dashboard)", url: `http://localhost:${SERVICES.apiGateway}/api/v1/reporting/dashboard/summary` },
    { name: "Schedule Service (Schedules)", url: `http://localhost:${SERVICES.apiGateway}/api/v1/schedules` },
    { name: "Notification Service (Templates)", url: `http://localhost:${SERVICES.apiGateway}/api/v1/notifications/templates` }
  ];

  let passed = 0;
  for (const ep of endpointsToTest) {
    console.log(`Testing ${ep.name}...`);
    const res = await fetchJSON(ep.url);
    if (res.status === 200 || res.status === 201) {
      console.log(`✅ SUCCESS (${res.status})`);
      passed++;
    } else {
      console.log(`⚠️ FAILED/WARNING (${res.status})`);
      console.log(`   Message: ${res.data?.message || res.data || res.error}`);
    }
  }

  console.log(`\n=== TEST SUMMARY: ${passed}/${endpointsToTest.length} endpoints working perfectly ===`);
}

runTests();
