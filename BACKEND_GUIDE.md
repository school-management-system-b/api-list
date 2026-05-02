# School Management Microservices - Backend Developer Guide

Dokumen ini adalah panduan lengkap arsitektur, standar operasional, dan aturan deployment untuk Backend Microservices. Harap patuhi panduan ini agar tidak merusak infrastruktur database dan deployment.

## 1. Arsitektur Infrastruktur

Sistem Backend ini menggunakan arsitektur **Microservices** yang dikepalai oleh sebuah **API Gateway**.
Total terdapat **11 Services** (Node.js/Express + TypeScript) yang saling terhubung:
1. `api-gateway`: Proxy pusat & authentikasi (JWT Validator).
2. `auth-service`: Manajemen otentikasi & session.
3. `user-service`: Manajemen profil pengguna.
4. `student-service`: Data pokok siswa & kelas.
5. `category-service`: Master data referensi (Kategori pelanggaran/prestasi).
6. `violation-service`: Pencatatan & approval kasus pelanggaran.
7. `achievement-service`: Pencatatan & approval prestasi.
8. `notification-service`: Sistem template & notifikasi broadcast (Mock WA).
9. `counseling-service`: Manajemen sesi bimbingan konseling.
10. `schedule-service`: Manajemen kehadiran & jadwal kelas.
11. `reporting-service`: Agregator analitik & pembuat laporan PDF/Excel.

### 🔌 Komunikasi Antar Service
- Komunikasi Internal dilakukan menggunakan HTTP request (`axios`) menggunakan URL internal masing-masing (`http://localhost:PORT` di local, atau via URL Vercel di cloud).
- Service internal diamankan melalui Secret Header: `x-internal-secret`. 

---

## 2. Manajemen Database & Prisma (⚠️ BACA DENGAN TELITI)

Database yang digunakan adalah **Supabase PostgreSQL**. Karena menggunakan skema "Connection Pooling", setiap `.env` membutuhkan `DATABASE_URL` (pooler) dan `DIRECT_URL` (direct/session).

### 🚨 Isu Shared Schema di Microservices
Meskipun kita menggunakan 10 microservice berbeda, **kita hanya menggunakan 1 public schema database terpusat** di Supabase. 
Ini berarti **ANDA TIDAK BOLEH** sembarangan menjalankan `npx prisma db push` secara individual di satu service (misal di folder `auth-service`). Jika Anda melakukan itu, Prisma akan **MENGHAPUS** tabel milik service lain (karena Prisma menganggap tabel lain tidak ada di file schema service tersebut).

### Cara Aman Memperbarui Skema Database:
Jika ada developer yang ingin mengubah tabel/skema di salah satu service, lakukan prosedur sinkronisasi gabungan:
1. Buat direktori sementara, gabungkan (copy-paste) isi SEMUA `schema.prisma` dari ke-10 services ke dalam satu file besar `schema.prisma`.
2. Jalankan `npx prisma db push --schema=schema.prisma` di file gabungan tersebut.
3. Setelah database di awan ter-update, masuklah ke folder microservice yang skemanya diubah, lalu HANYA JALANKAN `npx prisma generate` (untuk update client lokal).
4. **JANGAN PERNAH** jalankan `prisma db push` langsung dari dalam folder salah satu microservice!

---

## 3. Deployment Vercel & CORS

Sistem ini didesain bisa dijalankan *Direct-to-Service* pada platform serverless seperti Vercel. 
Masing-masing service di-deploy dengan domain unik (contoh: `api-list-student-service.vercel.app`).

### Aturan Environment Variable Vercel
Jika Anda mendeploy ini ke Vercel, pastikan semua `*URL` diatur menunjuk ke Production.
Contoh pada `.env` di *Reporting Service*:
```env
STUDENT_SERVICE_URL=https://api-list-student-service.vercel.app
VIOLATION_SERVICE_URL=https://api-list-violation-service.vercel.app
ACHIEVEMENT_SERVICE_URL=https://api-list-achievement-service.vercel.app
```
(Penting: Di environment Lokal, nilai URL di atas menggunakan `http://localhost:300X`).

### Keamanan (Auth Header Proxy)
Karena service ditebak langsung tanpa lewat API Gateway saat Frontend terhubung ke Vercel, pastikan Middleware auth Anda dapat mentolerir JWT standar. Namun saat ini *default route* (tanpa auth middleware lokal) membaca parameter user dari *Custom Header* yang seharusnya disuntikkan oleh Gateway:
- `x-user-id`
- `x-user-roles`

**Tugas Frontend:** Saat Frontend *Direct Connection* (bukan lewat Gateway), Frontend wajib mengirimkan JSON `x-user-id` pada *HTTP Headers* bersamaan dengan Bearer token.

---

## 4. Struktur Database Seed
Untuk me-reset / mengisi data demo awal yang sempurna, jalankan file `database_seed.sql`.
Data yang di-*seed* meliputi 11 tabel lintas-service dengan konvensi penamaan:
- **Tipe UUID:** Semua ID dalam sistem menggunakan prefix (`usr-`, `std-`, `cls-`) untuk debugging mudah, dan sisanya merupakan *uuid v4* asli.
- **Kredensial Default:** 
  - *Superadmin:* `admin` / `password123`
  - *Siswa:* `siswa` / `password123`
  - (Password ini di-*hash* menggunakan bcrypt dengan salt rounds `10`).

Jika mengeksekusi seed baru, Anda wajib menggunakan `pgAdmin` atau CLI Supabase (SQL Editor) karena menjalankan raw-SQL berisi `CREATE TABLE` / `INSERT` gabungan tidak direkomendasikan langsung melalui prisma client dari 1 microservice.

---

## 5. Development Lokal (Running & Testing)
1. **Instalasi:** `npm install` di root (menggunakan NPM workspace).
2. **Start All:** `npm run dev:all` (Akan menjalankan 11 service sekaligus dengan `tsx watch`).
3. **Run Test:** `npm run test` (Menggunakan Jest untuk testing microservice logic).

Pastikan sebelum coding, jalankan `npx prisma generate` di dalam **setiap** folder service agar Typescript IDE Anda dapat membaca tipe database.
