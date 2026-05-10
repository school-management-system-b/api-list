# 📖 Manual Book: School Management System

Selamat datang di dokumentasi instalasi dan penggunaan sistem *School Management System*. Panduan ini dirancang untuk membantu Anda menjalankan seluruh sistem (Backend Microservices & Frontend) di komputer/server lokal Anda.

---

## 🛠️ 1. Persiapan Sistem (Prerequisites)
Sebelum menjalankan aplikasi, pastikan komputer/server Anda telah menginstal *software* berikut:
1. **Node.js** (Versi 18 atau terbaru) - [Download di sini](https://nodejs.org/)
2. **Docker Desktop** (Opsional, sangat disarankan untuk menjalankan backend) - [Download di sini](https://www.docker.com/products/docker-desktop/)
3. **Database PostgreSQL** (Bisa menggunakan layanan Cloud gratis seperti [Supabase](https://supabase.com/))
4. **Git** - [Download di sini](https://git-scm.com/)

---

## ⚙️ 2. Konfigurasi Database & Environment Variables

Proyek ini menggunakan **satu database PostgreSQL (Supabase)** yang menampung seluruh tabel dari 9 layanan microservice secara otomatis tanpa ada yang saling meniban.

1. Buka *folder* `Microservices` di kode editor Anda (seperti VS Code).
2. Terdapat 9 folder *service* (contoh: `auth-service`, `student-service`, `user-service`, dll).
3. Pastikan di dalam **setiap folder service** terdapat file `.env`. (Anda bisa meng-copy dari `.env.example` jika ada).
4. Pastikan `DATABASE_URL` dan `DIRECT_URL` di semua file `.env` menunjuk ke URL database Supabase Anda.
   *Contoh:*
   ```env
   DATABASE_URL="postgresql://postgres.[ID]:[PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
   DIRECT_URL="postgresql://postgres.[ID]:[PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
   ```

---

## 🗄️ 3. Sinkronisasi Database (Push & Seed)

Langkah ini akan membuat seluruh tabel yang dibutuhkan secara otomatis di database, dan mengisi database dengan "Data Uji Coba" (Dummy Data).

1. Buka **Terminal / PowerShell**.
2. Arahkan direktori terminal ke dalam folder `Microservices`:
   ```bash
   cd Microservices
   ```
3. Jalankan *script* sinkronisasi berikut:
   ```powershell
   ./sync-db.ps1
   ```
4. Tunggu beberapa menit. *Script* akan melakukan:
   - Penggabungan skema database.
   - Pengecekan tabel di Supabase.
   - Mengisi otomatis data Superadmin, Guru, Wali Kelas, Siswa, Orang Tua, dan Jadwal.

---

## 🚀 4. Menjalankan Backend (Microservices)

Cara paling mudah dan aman untuk menjalankan ke-9 microservices secara bersamaan adalah menggunakan **Docker**.

1. Pastikan aplikasi **Docker Desktop** sudah menyala.
2. Di dalam folder `Microservices`, buka Terminal dan jalankan:
   ```bash
   docker-compose up -d
   ```
3. Docker akan men-download dan menjalankan semua *service* secara otomatis di belakang layar.
4. Jika Anda ingin mematikan backend, gunakan perintah: `docker-compose down`.

*(Catatan: Jika Anda tidak memakai Docker, Anda harus masuk ke masing-masing folder dari 9 service tersebut, jalankan `npm install`, lalu `npm run dev` di 9 terminal yang berbeda).*

---

## 💻 5. Menjalankan Frontend (Student App)

Sekarang backend sudah menyala, saatnya menjalankan antarmuka/website untuk pengguna.

1. Buka terminal baru, dan arahkan ke folder frontend (misal berada di `fe/student-app`):
   ```bash
   cd fe/student-app
   ```
2. Instal semua dependensi:
   ```bash
   npm install
   # atau jika menggunakan yarn:
   yarn install
   ```
3. Pastikan file `.env` di dalam folder frontend sudah sesuai (biasanya berisi URL API Gateway, contoh: `NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1`).
4. Jalankan aplikasi frontend:
   ```bash
   npm run dev
   # atau jika menggunakan yarn:
   yarn dev
   ```
5. Buka *browser* dan akses: **http://localhost:3000** (atau sesuai port yang muncul di terminal).

---

## 🔑 6. Kredensial Login (Akun Uji Coba)

Sistem telah diisi dengan banyak akun siap pakai untuk mempermudah Anda melakukan pengujian ke setiap peran (*role*).

**Gunakan Password ini untuk SEMUA akun di bawah:** `password123`

| Role / Peran | Username | Email |
| :--- | :--- | :--- |
| **Superadmin** | `admin` | admin@sman1berbek.sch.id |
| **Guru BK** | `bk.sari` | bk.sari@sman1berbek.sch.id |
| **Wali Kelas** | `wk.budi` | wk.budi@sman1berbek.sch.id |
| **Guru Mata Pelajaran** | `guru.mat` | guru.matematika@sman1berbek.sch.id |
| **Orang Tua** | `ortu.ali` | ali.bapak@gmail.com |
| **Siswa** | `siswa.andi` | andi.siswa@sman1berbek.sch.id |

---

## 📝 7. Troubleshooting / Solusi Kendala
- **Error saat `./sync-db.ps1` (Permission Denied)**: Jika muncul merah-merah di PowerShell, buka PowerShell sebagai Administrator lalu jalankan `Set-ExecutionPolicy Unrestricted` dan coba lagi.
- **Frontend Gagal Mengambil Data (CORS / Network Error)**: Pastikan Backend di Docker menyala. Cek statusnya dengan perintah `docker-compose ps` di folder Microservices. Pastikan URL `API_GATEWAY` di frontend menunjuk tepat ke *port* backend Anda.
- **Database Error (P1014 / Tabel Tidak Ada)**: Jika ini terjadi, cukup jalankan ulang `./sync-db.ps1`. Perintah tersebut sangat aman dan akan merapikan struktur database Anda.

🎉 **Selesai! Sistem sudah siap digunakan dan diuji coba oleh klien.**
