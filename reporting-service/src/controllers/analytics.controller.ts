import { Request, Response } from 'express';
import axios from 'axios';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';

const VIOLATION_SERVICE_URL = process.env.VIOLATION_SERVICE_URL || 'http://localhost:3004';
const ACHIEVEMENT_SERVICE_URL = process.env.ACHIEVEMENT_SERVICE_URL || 'http://localhost:3005';
const STUDENT_SERVICE_URL = process.env.STUDENT_SERVICE_URL || 'http://localhost:3003';
const INTERNAL_SECRET = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';
const internalHeaders = { 'x-internal-secret': INTERNAL_SECRET };

export const getDashboardSummary = async (_req: Request, res: Response) => {
  try {
    const cacheKey = 'dashboard_summary';
    const now = new Date();

    // Check cache first
    const cached = await prisma.analyticsCache.findUnique({ where: { key: cacheKey } });
    if (cached && cached.expiredAt > now) {
      return sendResponse(res, 200, true, 'Dashboard summary retrieved (cached)', cached.data);
    }

    // Fetch data in parallel from other services
    const [violationsRes, achievementsRes, studentsRes, violationStatsRes, classesRes] = await Promise.allSettled([
      axios.get(`${VIOLATION_SERVICE_URL}/api/v1/violations?limit=1`, { headers: internalHeaders, timeout: 5000 }),
      axios.get(`${ACHIEVEMENT_SERVICE_URL}/api/v1/achievements?limit=1`, { headers: internalHeaders, timeout: 5000 }),
      axios.get(`${STUDENT_SERVICE_URL}/api/v1/students?limit=1`, { headers: internalHeaders, timeout: 5000 }),
      axios.get(`${VIOLATION_SERVICE_URL}/api/v1/violations/stats/summary`, { headers: internalHeaders, timeout: 5000 }),
      axios.get(`${STUDENT_SERVICE_URL}/api/v1/classes`, { headers: internalHeaders, timeout: 5000 }),
    ]);

    const totalViolations =
      violationsRes.status === 'fulfilled'
        ? violationsRes.value.data?.data?.pagination?.total ?? 0
        : 0;

    const totalAchievements =
      achievementsRes.status === 'fulfilled'
        ? achievementsRes.value.data?.data?.pagination?.total ?? 0
        : 0;

    const activeStudents =
      studentsRes.status === 'fulfilled'
        ? studentsRes.value.data?.data?.pagination?.total ?? 0
        : 0;

    // Process Class Distribution
    const classDistribution: any[] = [];
    if (violationStatsRes.status === 'fulfilled' && classesRes.status === 'fulfilled') {
      const vStats = violationStatsRes.value.data?.data?.byClass || {};
      const classes = classesRes.value.data?.data || [];

      const levelMap: Record<string, { violationCount: number; studentCount: number }> = {
        '10': { violationCount: 0, studentCount: 0 },
        '11': { violationCount: 0, studentCount: 0 },
        '12': { violationCount: 0, studentCount: 0 },
      };

      // Sum students by level
      classes.forEach((c: any) => {
        const level = c.level || c.name?.split(' ')[0];
        if (level && levelMap[level]) {
          levelMap[level].studentCount += c.currentTotal || 0;
        }
      });

      // Sum violations by level (parsing from class name)
      Object.entries(vStats).forEach(([className, count]: [string, any]) => {
        const level = className.split(' ')[0];
        if (level && levelMap[level]) {
          levelMap[level].violationCount += count;
        }
      });

      const totalLevelViolations = Object.values(levelMap).reduce((sum, item) => sum + item.violationCount, 0);

      ['10', '11', '12'].forEach((level) => {
        const data = levelMap[level];
        const percentage = totalLevelViolations > 0 
          ? Math.round((data.violationCount / totalLevelViolations) * 100) 
          : 0;
        
        classDistribution.push({
          label: `Kelas ${level}`,
          val: percentage,
          raw: `${data.studentCount} Siswa`,
          violationCount: data.violationCount
        });
      });
    }

    // Export stats from local DB
    const [totalExports, failedExports] = await Promise.all([
      prisma.exportHistory.count(),
      prisma.exportHistory.count({ where: { status: 'FAILED' } }),
    ]);

    const summary = {
      totalViolations,
      totalAchievements,
      activeStudents,
      totalReportsGenerated: totalExports,
      failedReports: failedExports,
      classDistribution: classDistribution.length > 0 ? classDistribution : undefined,
      dataAsOf: now.toISOString(),
    };

    // Cache for 5 minutes
    await prisma.analyticsCache.upsert({
      where: { key: cacheKey },
      create: {
        key: cacheKey,
        data: summary as any,
        expiredAt: new Date(now.getTime() + 5 * 60 * 1000),
      },
      update: {
        data: summary as any,
        expiredAt: new Date(now.getTime() + 5 * 60 * 1000),
      },
    });

    return sendResponse(res, 200, true, 'Dashboard summary retrieved', summary);
  } catch (error: unknown) {
    console.error('Dashboard Summary Error:', error);
    return sendError(res, 500, (error as Error).message);
  }
};

export const getViolationTrends = async (req: Request, res: Response) => {
  try {
    const cacheKey = `violation_trends_${req.query.year || 'current'}`;
    const now = new Date();

    const cached = await prisma.analyticsCache.findUnique({ where: { key: cacheKey } });
    if (cached && cached.expiredAt > now) {
      return sendResponse(res, 200, true, 'Violation trends retrieved (cached)', cached.data);
    }

    // Fetch from violation-service
    const response = await axios.get(
      `${VIOLATION_SERVICE_URL}/api/v1/violations/stats/summary`,
      { headers: internalHeaders, timeout: 8000 }
    );

    const trends = response.data?.data || [];

    // Cache for 15 minutes
    await prisma.analyticsCache.upsert({
      where: { key: cacheKey },
      create: { key: cacheKey, data: trends as any, expiredAt: new Date(now.getTime() + 15 * 60 * 1000) },
      update: { data: trends as any, expiredAt: new Date(now.getTime() + 15 * 60 * 1000) },
    });

    return sendResponse(res, 200, true, 'Violation trends retrieved', trends);
  } catch (error: unknown) {
    // Return empty if service unavailable
    return sendResponse(res, 200, true, 'Violation trends (service unavailable)', []);
  }
};

export const getAttendanceTrends = async (req: Request, res: Response) => {
  try {
    const cacheKey = `attendance_trends_${req.query.classId || 'all'}_${req.query.date || 'recent'}`;
    const now = new Date();

    const cached = await prisma.analyticsCache.findUnique({ where: { key: cacheKey } });
    if (cached && cached.expiredAt > now) {
      return sendResponse(res, 200, true, 'Attendance trends retrieved (cached)', cached.data);
    }

    // We don't have a schedule-service URL set directly, but can use env
    const SCHEDULE_SERVICE_URL = process.env.SCHEDULE_SERVICE_URL || 'http://localhost:3010';
    const response = await axios.get(
      `${SCHEDULE_SERVICE_URL}/api/v1/schedules/attendance/summary`,
      { headers: internalHeaders, timeout: 8000 }
    );

    const trends = response.data?.data || [];

    await prisma.analyticsCache.upsert({
      where: { key: cacheKey },
      create: { key: cacheKey, data: trends as any, expiredAt: new Date(now.getTime() + 10 * 60 * 1000) },
      update: { data: trends as any, expiredAt: new Date(now.getTime() + 10 * 60 * 1000) },
    });

    return sendResponse(res, 200, true, 'Attendance trends retrieved', trends);
  } catch {
    return sendResponse(res, 200, true, 'Attendance trends (service unavailable)', []);
  }
};
