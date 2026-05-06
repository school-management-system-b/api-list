# 🐳 Docker Deployment Guide

## ✅ Konfigurasi Selesai!

Semua 11 microservices sudah dikonfigurasi untuk **Docker Compose deployment**:

### What Was Changed:
1. ✅ **Service URLs** - Semua URL diubah dari `localhost`/Vercel ke Docker service names (e.g., `http://auth-service:3001`)
2. ✅ **JWT Secrets** - Unified ke satu secret yang sama di semua services: `af26c5908411d5b233f03fdda13e9e35eabf6f8e457a2e676a75a30235de89f7`
3. ✅ **Docker Networking** - Services berkomunikasi via `microservices-network`

---

## 🚀 Quick Start

### 1. Build & Start All Services

```bash
# Production mode
docker-compose up -d

# Or development mode (with hot-reload)
docker-compose -f docker-compose.dev.yml up -d
```

### 2. Check Container Status

```bash
docker-compose ps
```

Expected output: All 11 services should be **UP**

### 3. View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f auth-service
docker-compose logs -f api-gateway
```

### 4. Test Health Endpoints

```bash
# API Gateway
curl http://localhost:3000/health

# Individual services
curl http://localhost:3001/health  # Auth
curl http://localhost:3002/health  # User
curl http://localhost:3003/health  # Student
curl http://localhost:3004/health  # Violation
curl http://localhost:3005/health  # Achievement
curl http://localhost:3006/health  # Category
curl http://localhost:3007/health  # Notification
curl http://localhost:3008/health  # Reporting
curl http://localhost:3009/health  # Counseling
curl http://localhost:3010/health  # Schedule
```

---

## 📋 Service Architecture

| Service | Port | URL (via Gateway) | Direct URL |
|---------|------|-------------------|------------|
| **API Gateway** | 3000 | - | http://localhost:3000 |
| **Auth Service** | 3001 | /api/v1/auth | http://localhost:3001 |
| **User Service** | 3002 | /api/v1/users | http://localhost:3002 |
| **Student Service** | 3003 | /api/v1/students | http://localhost:3003 |
| **Violation Service** | 3004 | /api/v1/violations | http://localhost:3004 |
| **Achievement Service** | 3005 | /api/v1/achievements | http://localhost:3005 |
| **Category Service** | 3006 | /api/v1/categories | http://localhost:3006 |
| **Notification Service** | 3007 | /api/v1/notifications | http://localhost:3007 |
| **Reporting Service** | 3008 | /api/v1/reporting | http://localhost:3008 |
| **Counseling Service** | 3009 | /api/v1/counseling | http://localhost:3009 |
| **Schedule Service** | 3010 | /api/v1/schedules | http://localhost:3010 |

---

## 🧪 Testing Connectivity

### Test 1: API Gateway Proxy
```bash
# Should proxy to auth-service
curl http://localhost:3000/api/v1/auth/health

# Should proxy to user-service
curl http://localhost:3000/api/v1/users/health
```

### Test 2: Authentication Flow
```bash
# Login (if you have seeded data)
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@example.com", "password": "password123"}'
```

### Test 3: Service-to-Service Communication

Check logs to see if services can communicate:
```bash
# Watch auth-service calling user-service
docker-compose logs -f auth-service user-service
```

---

## 🔧 Common Commands

### Build & Start
```bash
# Build and start all
docker-compose up -d --build

# Build specific service
docker-compose up -d --build auth-service

# Start without building
docker-compose up -d
```

### Stop & Remove
```bash
# Stop all services
docker-compose stop

# Stop and remove containers
docker-compose down

# Remove containers + volumes
docker-compose down -v
```

### Restart Services
```bash
# Restart all
docker-compose restart

# Restart specific service
docker-compose restart auth-service
```

### Execute Commands in Containers
```bash
# Shell into a container
docker-compose exec auth-service sh

# Run Prisma migrations
docker-compose exec auth-service npx prisma migrate deploy

# Generate Prisma Client
docker-compose exec auth-service npx prisma generate
```

### View Resource Usage
```bash
docker stats
```

---

## 🐛 Troubleshooting

### Problem: Container keeps restarting

**Solution:**
```bash
# Check logs
docker-compose logs auth-service

# Common issues:
# 1. Database connection failed
# 2. Missing environment variables
# 3. Port already in use
```

### Problem: "Cannot connect to service"

**Solution:**
```bash
# Verify network
docker network inspect microservices-network

# Check if service is running
docker-compose ps

# Verify service URLs in .env files
```

### Problem: Port already in use

**Solution:**
```bash
# Find process using port
netstat -ano | findstr :3001

# Kill process (Windows)
taskkill /PID <process_id> /F

# Or change port in docker-compose.yml and .env
```

### Problem: Database migration errors

**Solution:**
```bash
# Reset database (development only!)
docker-compose exec auth-service npx prisma migrate reset

# Or deploy migrations
docker-compose exec auth-service npx prisma migrate deploy
```

---

## 📦 Database Migrations

Before first run, ensure all services have their databases migrated:

```bash
# Auth Service (Supabase)
docker-compose exec auth-service npx prisma migrate deploy

# User Service (Neon)
docker-compose exec user-service npx prisma migrate deploy

# Repeat for all services with Prisma...
```

---

## 🔒 Production Checklist

Before deploying to production:

- [ ] **Environment Variables**
  - [ ] Change `NODE_ENV=production` in all [.env](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/api-gateway/.env) files
  - [ ] Remove wildcard `*` from `ALLOWED_ORIGINS`
  - [ ] Configure real SMTP credentials
  - [ ] Configure real Cloudinary credentials
  - [ ] Use strong, unique JWT secrets (regenerate!)

- [ ] **Security**
  - [ ] Enable HTTPS/TLS
  - [ ] Configure firewall rules
  - [ ] Set rate limits appropriately
  - [ ] Remove default credentials

- [ ] **Monitoring**
  - [ ] Setup centralized logging (e.g., ELK stack)  
  - [ ] Configure health check alerts
  - [ ] Setup uptime monitoring

- [ ] **Backup**
  - [ ] Configure database backups
  - [ ] Test restore procedures

- [ ] **Performance**
  - [ ] Run load tests
  - [ ] Configure resource limits in docker-compose:
    ```yaml
    services:
      auth-service:
        deploy:
          resources:
            limits:
              cpus: '0.5'
              memory: 512M
    ```

---

## 📊 Monitoring & Health Checks

All services expose `/health` endpoint that returns:

```json
{
  "status": "UP",
  "service": "auth-service",
  "timestamp": "2026-01-31T03:00:00.000Z",
  "uptime": 12345.67,
  "memoryUsage": {
    "rss": 50331648,
    "heapTotal": 18874368,
    "heapUsed": 10485760,
    "external": 1234567
  }
}
```

### Automated Health Check Script

Save as `check-health.sh`:
```bash
#!/bin/bash

SERVICES=("3000" "3001" "3002" "3003" "3004" "3005" "3006" "3007" "3008" "3009" "3010")
FAILED=0

for port in "${SERVICES[@]}"; do
  echo -n "Testing port $port... "
  response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$port/health)
  if [ "$response" = "200" ]; then
    echo "✅ OK"
  else
    echo "❌ FAILED (HTTP $response)"
    FAILED=1
  fi
done

if [ $FAILED -eq 1 ]; then
  echo "❌ Some services are down!"
  exit 1
else
  echo "✅ All services are healthy!"
  exit 0
fi
```

Run with:
```bash
bash check-health.sh
```

---

## 🎯 Next Steps

1. **Seed Initial Data**
   ```bash
   docker-compose exec auth-service npm run prisma:seed
   ```

2. **Access Swagger Docs**
   - Auth Service: http://localhost:3001/api-docs
   - User Service: http://localhost:3002/api-docs
   - (repeat for other services)

3. **Setup Frontend**
   - Point frontend to API Gateway: `http://localhost:3000`

4. **Configure Monitoring Dashboard**
   - Consider Grafana + Prometheus for metrics
   - Or use commercial solution like Datadog

---

## 💡 Development Tips

### Hot Reload Development

Use the dev compose file for development:
```bash
docker-compose -f docker-compose.dev.yml up -d
```

This mounts your source code and uses `npm run dev` for hot reload.

### Local vs Docker Toggle

If you want to switch back to local development (without Docker):

1. Stop Docker containers:
   ```bash
   docker-compose down
   ```

2. Change all [.env](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/api-gateway/.env) files to use `localhost` URLs:
   ```env
   AUTH_SERVICE_URL=http://localhost:3001
   USER_SERVICE_URL=http://localhost:3002
   # etc...
   ```

3. Start services locally:
   ```bash
   cd auth-service && npm run dev
   cd user-service && npm run dev
   # etc...
   ```

---

## ❓ FAQ

**Q: Service dapat berjalan tanpa API Gateway?**
A: Ya, setiap service bisa diakses langsung via port masing-masing (3001-3010).

**Q: Bagaimana menambah service baru?**
A: Tambahkan di [docker-compose.yml](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/docker-compose.yml), buat [.env](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/api-gateway/.env) dengan service URLs yang benar, dan pastikan JWT_SECRET sama.

**Q: Database ada di Docker?**
A: Tidak, semua database hosted di cloud (Neon/Supabase). Docker hanya untuk application services.

**Q: Bisa deploy ke production server?**
A: Ya, copy semua files ke server, install Docker & Docker Compose, lalu jalankan `docker-compose up -d`.

---

## 📞 Support

Jika ada masalah:
1. Check logs: `docker-compose logs -f [service-name]`
2. Verify health: `curl http://localhost:[port]/health`
3. Check network: `docker network ls`
4. Verify environment variables in each [.env](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/api-gateway/.env) file

Happy deploying! 🚀
