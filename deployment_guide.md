# Microservices Deployment Guide (Vercel)

This guide explains how to deploy your microservices architecture to Vercel and how it differs from your local development setup.

## 1. Local vs. Vercel Deployment

![Deployment Comparison](https://mermaid.ink/img/pako:eNp9kcFuwjAMhl_F8gm49AIccNiKBDtM2g5Dk-M21aZ1lCRToCrefeS20qYcpPjT37_920lngwudaRTeK6i2WhucD9IeB2s7y2cLVjN2u2A1-VksFvT5QZ94tKDRaER3D_uHh91D-4C_7y38vLRv9I3e6Tf9O7y02214b9_oP3qnP4c_9E7faT98o990eGnf6Fdhv8Nru90C56M1VgrrFHQKeLByDO401EbgqEFTSI01g4GjDq0FThpMFaSCqUBtoKlAS8FQQStIFQwdNAZDB43B0EFjMBgMFQwVDAZDBYMhj2CoYKgkMDR4sHIO7ggMHjQGgzsCgwetweCOwODByiW4IzB40BoM7ggMHrQGgzsCgwf9X5fg94F_H_T_x-Dtgd8ffP9j8A-Avx_8_WvgHwD_v8E_AP5_8P8bwT8A_n_w_xvBPwD-f_D_G8E_AP5_8P8bwT8A_n_w_xvBPwD-f_D_G8E_AP5_8P8bwT8A_n_w_xvBPwD-f_D_G8E_AP5_8P8bwT8A_n_w_xvBPwD-f_D_G8E_AP5_8P8bwT8A_n_w_xvBPwD-f_D_G8E_AP5_8P8bwT8A_n_w_xvBPwD-f_w_oP8f)

### Local Development (What you do now)
*   **Running Servers**: You run `npm run dev` for *each* service. This starts a long-running Node.js process for each service on your machine (ports 3000-3010).
*   **Networking**: Services talk to each other using `localhost:PORT`.
*   **Gateway**: The API Gateway proxies requests from `localhost:3000` to `localhost:3001`, `localhost:3002`, etc.

### Vercel Deployment (Serverless)
*   **Serverless Functions**: Vercel doesn't run a "server" waiting for requests. Instead, it spins up a function *only when a request comes in*.
*   **Configuration**: We typically wrap your Express app ([app.ts](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/api-gateway/src/app.ts)) so Vercel can handle it as a function. (We've already set this up!).
*   **Networking**: `localhost` logic **WILL NOT WORK**. Services must talk to each other using their public Vercel URLs (e.g., `https://user-service-project.vercel.app`).
*   **Environment Variables**: Instead of [.env](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/api-gateway/.env) files, you set these in the Vercel Project Settings.

## 2. Prerequisites

1.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com).
2.  **GitHub Repository**: Push your code to GitHub.

## 3. Step-by-Step Deployment

You will deploy each service as a separate **Vercel Project** linked to the same GitHub repository, but with a different **Root Directory**.

### Step 1: Deploy Core Services First

Start with `auth-service`, `user-service`, etc.

1.  Go to Vercel Dashboard -> **Add New...** -> **Project**.
2.  Import your GitHub Repository.
3.  **Configure Project**:
    *   **Project Name**: e.g., `user-service-school-app`.
    *   **Root Directory**: Click "Edit" and select `user-service`. (**Crucial!**)
    *   **Framework Preset**: Select "Other" (or it might auto-detect).
    *   **Build Command**: `npm run vercel-build` (or `prisma generate && tsc`).
    *   **Output Directory**: `dist` (or leave default if configured in [vercel.json](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/api-gateway/vercel.json)).
    *   **Environment Variables**: Copy key-values from your local [.env](file:///e:/Become%20Full%20Stack/Job/candra/Microservices/api-gateway/.env).
        *   `DATABASE_URL`: Your Supabase/Neon connection string (Use the **Transaction** connection string if using serverless).
        *   `JWT_SECRET`: Same key for all services.
        *   `RABBITMQ_URL`: Your cloud queue URL (if valid).
4.  Click **Deploy**.
5.  **Copy the Domain**: Once deployed, copy the URL (e.g., `https://user-service-school-app.vercel.app`).

### Step 2: Deploy Other Services

Repeat Step 1 for `student-service`, `violation-service`, etc.
*   **Important**: If Service A calls Service B, you must update Service A's environment variables to use Service B's new Vercel URL.
    *   Example: In `violation-service`, if it calls `http://localhost:3003` (Student Service), update the ENV variable `STUDENT_SERVICE_URL` to `https://student-service-school-app.vercel.app`.

### Step 3: Deploy API Gateway

Finally, deploy the `api-gateway`.

1.  **Root Directory**: `api-gateway`.
2.  **Environment Variables**:
    *   `AUTH_SERVICE_URL`: `https://auth-service-school-app.vercel.app`
    *   `USER_SERVICE_URL`: `https://user-service-school-app.vercel.app`
    *   ... and so on for all services.
3.  **Deploy**.

## 4. Verification

1.  Open your API Gateway URL (e.g., `https://api-gateway-school.vercel.app/health`).
2.  Test a login functionality via Postman or your Frontend app using the Gateway URL.

## 5. Important Notes

*   **Database Connections**: Ensure your database allows connections from "Anywhere" (0.0.0.0/0) or Vercel's IP ranges. Since you use Supabase/Neon, this is usually default.
*   **Cold Starts**: Serverless functions "sleep" when not used. The first request might take 1-3 seconds. This is normal.
*   **Queues**: If you use RabbitMQ locally, you need a cloud provider (like CloudAMQP) for Vercel.

## 6. How to Deploy Updates

Just `git push`! Vercel will detect changes in the folder and automatically redeploy only the affected service.
