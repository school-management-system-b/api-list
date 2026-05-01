import { createProxyMiddleware } from 'http-proxy-middleware';
import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

const services = [
  { path: '/auth', target: process.env.AUTH_SERVICE_URL, auth: false },
  { path: '/users', target: process.env.USER_SERVICE_URL, auth: true },
  { path: '/students', target: process.env.STUDENT_SERVICE_URL, auth: true },
  { path: '/classes', target: process.env.STUDENT_SERVICE_URL, auth: true },
  { path: '/academic-years', target: process.env.STUDENT_SERVICE_URL, auth: true },
  { path: '/violations', target: process.env.VIOLATION_SERVICE_URL, auth: true },
  { path: '/achievements', target: process.env.ACHIEVEMENT_SERVICE_URL, auth: true },
  { path: '/categories', target: process.env.CATEGORY_SERVICE_URL, auth: true },
  { path: '/notifications', target: process.env.NOTIFICATION_SERVICE_URL, auth: true },
  { path: '/reporting', target: process.env.REPORTING_SERVICE_URL, auth: true },
  { path: '/counseling', target: process.env.COUNSELING_SERVICE_URL, auth: true },
  { path: '/schedules', target: process.env.SCHEDULE_SERVICE_URL, auth: true },
];

services.forEach((service) => {
  const middlewares: any[] = [];
  if (service.auth) middlewares.push(authMiddleware);

  router.use(
    service.path,
    ...middlewares,
    createProxyMiddleware({
      target: service.target,
      changeOrigin: true,
      // Removed pathRewrite because downstream services expect the full path including service name
      // (e.g., /api/v1/users/profile should reach user-service as /api/v1/users/profile)
      onProxyReq: (proxyReq, req, res) => {
        // Forward custom headers added by middleware
        if (req.headers['x-user-id']) {
          proxyReq.setHeader('x-user-id', req.headers['x-user-id']);
        }
        if (req.headers['x-user-roles']) {
          proxyReq.setHeader('x-user-roles', req.headers['x-user-roles']);
        }
      },
      onError: (err, req, res) => {
        console.error(`Proxy Error for ${service.path}:`, err);
        res.status(502).json({ success: false, message: 'Bad Gateway: Service Unavailable' });
      },
    })
  );
});

export default router;

