# 🧪 Testing Guide - Microservices Project

## Overview

This guide covers testing across all 11 microservices in the project. Each service has unit tests, and some have integration tests.

---

## 🚀 Quick Start

### Run Tests for Single Service

```bash
# Navigate to service directory
cd auth-service

# Run all tests
npm test

# Run tests in watch mode (development)
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Run Tests for All Services

**Windows:**
```powershell
.\run-all-tests.ps1
```

**Linux/Mac:**
```bash
bash run-all-tests.sh
```

---

## 📁 Test Structure

Each service follows this structure:

```
service-name/
├── jest.config.js           # Jest configuration
├── src/
│   ├── __tests__/
│   │   ├── setup.ts         # Global test setup
│   │   ├── health.test.ts   # Health endpoint tests
│   │   ├── utils/
│   │   │   └── test-helpers.ts  # Mock utilities
│   │   └── controllers/
│   │       └── *.controller.test.ts
│   ├── controllers/
│   ├── services/
│   └── ...
└── package.json
```

---

## 🎯 Test Coverage

### Current Coverage Goals

| Service | Coverage Target | Status |
|---------|----------------|--------|
| **Auth Service** | 70% | ✅ Configured |
| **User Service** | 60% | ✅ Configured |
| **API Gateway** | 60% | ⏳ Pending |
| **Other Services** | 50% | ⏳ Pending |

### View Coverage Report

```bash
cd auth-service
npm run test:coverage

# Coverage report will be in coverage/ directory
# Open coverage/lcov-report/index.html in browser
```

---

## ✍️ Writing Tests

### Example: Controller Test

```typescript
import { login } from '../../controllers/auth.controller';
import { authService } from '../../services/auth.service';
import { mockRequest, mockResponse } from '../utils/test-helpers';

jest.mock('../../services/auth.service');

describe('Auth Controller', () => {
  it('should return 200 on successful login', async () => {
    const req = mockRequest({
      body: { email: 'test@example.com', password: 'Password123!' }
    });
    const res = mockResponse();

    const mockResult = {
      accessToken: 'token',
      user: { id: '123', email: 'test@example.com' }
    };

    (authService.login as jest.Mock).mockResolvedValue(mockResult);

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ success: true })
    );
  });
});
```

### Example: Health Check Test

```typescript
import request from 'supertest';
import app from '../app';

describe('Health Check', () => {
  it('should return 200', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('UP');
  });
});
```

---

## 🔧 Test Configuration

### jest.config.js

Each service has a Jest config with:

- **TypeScript support** via ts-jest
- **Path aliases** for @common imports
- **Coverage thresholds**
- **Test environment** setup

Example:
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};
```

---

## 🧰 Test Utilities

### Mock Helpers (test-helpers.ts)

Available utilities:

- [mockRequest(data)](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/auth-service/src/__tests__/utils/test-helpers.ts#3-16) - Mock Express request
- [mockResponse()](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/auth-service/src/__tests__/utils/test-helpers.ts#17-29) - Mock Express response
- `mockPrismaClient` - Mock Prisma database client
- `mockUser` - Sample user data
- [generateMockToken()](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/auth-service/src/__tests__/utils/test-helpers.ts#78-84) - Generate fake JWT token

Usage:
```typescript
import { mockRequest, mockResponse, mockUser } from '../utils/test-helpers';

const req = mockRequest({ body: { email: 'test@test.com' } });
const res = mockResponse();
```

---

## 🐳 Testing with Docker

### Prerequisites

Tests assume services are configured but **don't require** Docker running for unit tests.

For **integration tests** that need database:

```bash
# Start all services
docker-compose up -d

# Run integration tests
npm run test:integration  # (if configured)
```

---

## 🔍 Debugging Tests

### Run Single Test File

```bash
npm test -- health.test.ts
```

### Run with Verbose Output

```bash
npm test -- --verbose
```

### Enable Debug Logging

```typescript
// In your test file
console.log = jest.fn();  // Mocked by default
console.log.mockRestore();  // Restore to see logs
```

---

## 📊 CI/CD Integration

### GitHub Actions Example

```yaml
name: Run Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20'
      
      - name: Install Dependencies
        run: |
          cd auth-service
          npm ci
      
      - name: Run Tests
        run: |
          cd auth-service
          npm run test:coverage
      
      - name: Upload Coverage
        uses: codecov/codecov-action@v2
```

---

## 🐛 Troubleshooting

### Problem: Tests fail with "Cannot find module '@common/...'"

**Solution:**
```bash
# Make sure path mappings in jest.config.js are correct
moduleNameMapper: {
  '^@common/(.*)$': '<rootDir>/../common/$1'
}
```

### Problem: "No tests found"

**Solution:**
```bash
# Check test file naming - must end with .test.ts
# Check jest.config.js testMatch pattern
testMatch: ['**/__tests__/**/*.test.ts']
```

### Problem: Prisma errors in tests

**Solution:**
```typescript
// Mock Prisma client in your tests
jest.mock('../config/prisma', () => ({
  __esModule: true,
  default: mockPrismaClient
}));
```

### Problem: Cannot resolve TypeScript paths

**Solution:**
```bash
# Install ts-node if not already installed
npm install --save-dev ts-node

# Ensure tsconfig.json has paths configured
```

---

## 📝 Best Practices

### 1. Test Organization
- Group related tests using `describe` blocks
- One test file per controller/service
- Keep test files near the code they test

### 2. Test Naming
```typescript
describe('AuthController', () => {
  describe('login', () => {
    it('should return 200 on valid credentials', () => {});
    it('should return 401 on invalid credentials', () => {});
    it('should return 400 on missing fields', () => {});
  });
});
```

### 3. Mock External Dependencies
- Always mock database calls (Prisma)
- Mock external API calls
- Mock file system operations

### 4. Test Independence
- Each test should be independent
- Use `beforeEach` to reset state
- Don't rely on test execution order

### 5. Meaningful Assertions
```typescript
// ❌ Bad
expect(response.status).toBe(200);

// ✅ Good
expect(response.status).toBe(200);
expect(response.body).toHaveProperty('success', true);
expect(response.body.data).toHaveProperty('accessToken');
```

---

## 🎯 Test Checklist for New Features

When adding a new feature, ensure:

- [ ] Unit tests for new controllers
- [ ] Unit tests for new services
- [ ] Tests for error scenarios
- [ ] Tests for validation
- [ ] Update coverage if it drops below threshold
- [ ] Integration test for complete flow (if applicable)

---

## 📞 Getting Help

Common resources:

- **Jest Documentation**: https://jestjs.io/docs/getting-started
- **Supertest Documentation**: https://github.com/visionmedia/supertest
- **ts-jest Documentation**: https://kulshekhar.github.io/ts-jest/

---

## 🚦 Status Legend

In test output:

- ✅ **PASS** - All tests in suite passed
- ❌ **FAIL** - One or more tests failed
- ⏭️ **SKIP** - Test suite skipped
- 🔄 **TODO** - Test marked as todo (not implemented)

---

## Quick Reference Commands

```bash
# Run all tests
npm test

# Watch mode (re-run on file changes)
npm run test:watch

# Coverage report
npm run test:coverage

# Run specific test file
npm test -- health.test.ts

# Update snapshots (if using)
npm test -- -u

# Run tests matching pattern
npm test -- --testNamePattern="login"

# Run tests for changed files only (Git)
npm test -- --onlyChanged
```

---

🎉 Happy Testing!
