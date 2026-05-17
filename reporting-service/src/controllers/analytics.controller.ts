import { Request, Response } from 'express';
import axios from 'axios';
import { URLSearchParams } from 'url';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';

const VIOLATION_SERVICE_URL = process.env.VIOLATION_SERVICE_URL || 'http://localhost:3004';
const ACHIEVEMENT_SERVICE_URL = process.env.ACHIEVEMENT_SERVICE_URL || 'http://localhost:3005';
const STUDENT_SERVICE_URL = process.env.STUDENT_SERVICE_URL || 'http://localhost:3003';
const INTERNAL_SECRET = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';

const getContextHeaders = (req: Request) => ({
  'x-internal-secret': INTERNAL_SECRET,
  'x-user-id': req.headers['x-user-id'] as string || '',
  'x-user-roles': req.headers['x-user-roles'] as string || '[]',
});

const calculateGrade = (achievements: number, violations: number) => {
  if (achievements === 0 && violations === 0) return 'B';
  const score = (achievements / (achievements + violations + 0.1)) * 100;
  if (score >= 80) return 'A';
  if (score >= 60) return 'B';
  if (score >= 40) return 'C';
  if (score >= 20) return 'D';
  return 'E';
};

export const getDashboardSummary = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate, academicYear } = req.query;
    const userId = req.headers['x-user-id'] as string || 'system';
    const cacheKey = `dashboard_summary_${userId}_${startDate || 'all'}_${endDate || 'all'}_${academicYear || 'current'}`;
    const now = new Date();

    // Pass filters to downstream
    const params = new URLSearchParams();
    if (startDate) params.append('startDate', startDate as string);
    if (endDate) params.append('endDate', endDate as string);
    if (academicYear) params.append('academicYear', academicYear as string);
    const queryString = params.toString() ? `?${params.toString()}` : '';

    /* 
    const cached = await prisma.analyticsCache.findUnique({ where: { key: cacheKey } });
    if (cached && cached.expiredAt > now) {
      return sendResponse(res, 200, true, 'Dashboard summary retrieved (cached)', cached.data);
    }
    */

    const headers = getContextHeaders(req);
    
    // Fetch data in parallel from other services
    const results = await Promise.allSettled([
      axios.get(`${VIOLATION_SERVICE_URL}/api/v1/violations${queryString}${queryString ? '&' : '?'}limit=1`, { headers, timeout: 10000 }),
      axios.get(`${ACHIEVEMENT_SERVICE_URL}/api/v1/achievements/stats/summary${queryString}`, { headers, timeout: 10000 }),
      axios.get(`${STUDENT_SERVICE_URL}/api/v1/students${queryString}${queryString ? '&' : '?'}limit=1`, { headers, timeout: 10000 }),
      axios.get(`${VIOLATION_SERVICE_URL}/api/v1/violations/stats/summary${queryString}`, { headers, timeout: 10000 }),
      axios.get(`${STUDENT_SERVICE_URL}/api/v1/classes`, { headers, timeout: 10000 }),
    ]);

    const [violationsRes, achievementsRes, studentsRes, violationStatsRes, classesRes] = results;

    // Log failures for debugging
    results.forEach((res, idx) => {
      if (res.status === 'rejected') {
        const serviceNames = ['Violations List', 'Achievement Stats', 'Students List', 'Violation Stats', 'Classes List'];
        console.error(`[Dashboard] Service Call Failed (${serviceNames[idx]}):`, res.reason?.message || res.reason);
      }
    });

    // Extract totals with better fallbacks
    let totalViolations = 0;
    if (violationStatsRes.status === 'fulfilled') {
      totalViolations = violationStatsRes.value.data?.data?.total ?? 0;
    } else if (violationsRes.status === 'fulfilled') {
      totalViolations = violationsRes.value.data?.data?.pagination?.total ?? 0;
    }

    const totalAchievements =
      achievementsRes.status === 'fulfilled'
        ? achievementsRes.value.data?.data?.total ?? 0
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
        const level = c.level || (c.name && c.name.split(' ')[0]);
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
      topViolationCategories: violationStatsRes.status === 'fulfilled' ? violationStatsRes.value.data?.data?.byCategory : [],
      topAchievementCategories: achievementsRes.status === 'fulfilled' ? (achievementsRes.value as any).data?.data?.byCategory : [],
      topAchievers: achievementsRes.status === 'fulfilled' ? (achievementsRes.value as any).data?.data?.topAchievers : [],
      topPerformingClasses: [], 
      schoolGrade: calculateGrade(totalAchievements, totalViolations),
      levelGrades: {} as any,
      dataAsOf: now.toISOString(),
    };

    // Process Top Performing Classes & Wali Kelas
    if (achievementsRes.status === 'fulfilled' && classesRes.status === 'fulfilled') {
      const topClasses = (achievementsRes.value as any).data?.data?.byClass || [];
      const classesData = classesRes.value.data?.data || [];
      
      summary.topPerformingClasses = topClasses.map((tc: any) => {
        const classInfo = classesData.find((c: any) => c.name === tc.name);
        return {
          className: tc.name,
          achievementCount: tc.count,
          waliKelas: classInfo?.waliKelasName || 'N/A'
        };
      }) as any;
    }

    // Calculate level grades
    if (violationStatsRes.status === 'fulfilled' && achievementsRes.status === 'fulfilled') {
       const vByClass = violationStatsRes.value.data?.data?.byClass || {};
       const aByClass = (achievementsRes.value as any).data?.data?.byClass || [];
       
       ['10', '11', '12'].forEach(level => {
          let levelV = 0;
          let levelA = 0;
          
          Object.entries(vByClass).forEach(([className, count]: [string, any]) => {
            if (className.startsWith(level)) levelV += count;
          });
          
          aByClass.forEach((c: any) => {
            if (c.name.startsWith(level)) levelA += c.count;
          });
          
          summary.levelGrades[`Kelas ${level}`] = calculateGrade(levelA, levelV);
       });
    }

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
    const userId = req.headers['x-user-id'] as string || 'system';
    const cacheKey = `violation_trends_${userId}_${req.query.year || 'current'}`;
    const now = new Date();

    /*
    const cached = await prisma.analyticsCache.findUnique({ where: { key: cacheKey } });
    if (cached && cached.expiredAt > now) {
      return sendResponse(res, 200, true, 'Violation trends retrieved (cached)', cached.data);
    }
    */

    // Fetch from violation-service
    const response = await axios.get(
      `${VIOLATION_SERVICE_URL}/api/v1/violations/stats/trends`,
      { headers: getContextHeaders(req), timeout: 8000 }
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
    const userId = req.headers['x-user-id'] as string || 'system';
    const cacheKey = `attendance_trends_${userId}_${req.query.classId || 'all'}_${req.query.date || 'recent'}`;
    const now = new Date();

    /*
    const cached = await prisma.analyticsCache.findUnique({ where: { key: cacheKey } });
    if (cached && cached.expiredAt > now) {
      return sendResponse(res, 200, true, 'Attendance trends retrieved (cached)', cached.data);
    }
    */

    // We don't have a schedule-service URL set directly, but can use env
    const SCHEDULE_SERVICE_URL = process.env.SCHEDULE_SERVICE_URL || 'http://localhost:3010';
    const response = await axios.get(
      `${SCHEDULE_SERVICE_URL}/api/v1/schedules/attendance/summary`,
      { headers: getContextHeaders(req), timeout: 8000 }
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
export const getTopReportingTeachers = async (req: Request, res: Response) => {
  try {
    const cacheKey = 'top_reporting_teachers';
    const now = new Date();

    /*
    const cached = await prisma.analyticsCache.findUnique({ where: { key: cacheKey } });
    if (cached && cached.expiredAt > now) {
      return sendResponse(res, 200, true, 'Top reporting teachers retrieved (cached)', cached.data);
    }
    */

    const headers = getContextHeaders(req);
    const [violationReporters, achievementReporters] = await Promise.allSettled([
      axios.get(`${VIOLATION_SERVICE_URL}/api/v1/violations/stats/top-reporters?limit=10`, { headers }),
      axios.get(`${ACHIEVEMENT_SERVICE_URL}/api/v1/achievements/stats/top-reporters?limit=10`, { headers })
    ]);

    const teacherStats: Record<string, any> = {};

    if (violationReporters.status === 'fulfilled') {
      violationReporters.value.data?.data?.forEach((r: any) => {
        if (!teacherStats[r.userId]) {
          teacherStats[r.userId] = { userId: r.userId, name: r.name, role: r.role, violationCount: 0, achievementCount: 0, total: 0 };
        }
        teacherStats[r.userId].violationCount += r.count;
        teacherStats[r.userId].total += r.count;
      });
    }

    if (achievementReporters.status === 'fulfilled') {
      achievementReporters.value.data?.data?.forEach((r: any) => {
        if (!teacherStats[r.userId]) {
          teacherStats[r.userId] = { userId: r.userId, name: r.name, role: r.role, violationCount: 0, achievementCount: 0, total: 0 };
        }
        teacherStats[r.userId].achievementCount += r.count;
        teacherStats[r.userId].total += r.count;
      });
    }

    const sortedReporters = Object.values(teacherStats)
      .sort((a, b) => b.total - a.total)
      .slice(0, 5);

    await prisma.analyticsCache.upsert({
      where: { key: cacheKey },
      create: { key: cacheKey, data: sortedReporters as any, expiredAt: new Date(now.getTime() + 10 * 60 * 1000) },
      update: { data: sortedReporters as any, expiredAt: new Date(now.getTime() + 10 * 60 * 1000) },
    });

    return sendResponse(res, 200, true, 'Top reporting teachers retrieved', sortedReporters);
  } catch (error: any) {
    return sendError(res, 500, error.message);
  }
};
export const getStudentPointsReport = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate, classId, search } = req.query;
    const headers = getContextHeaders(req);
    
    // 1. Get Students (filtered by class/search if provided)
    const studentParams = new URLSearchParams();
    if (search) studentParams.append('search', search as string);
    if (classId) studentParams.append('classId', classId as string);

    // RBAC: Filter by Wali Kelas if role is WALIKELAS
    const userId = req.headers['x-user-id'] as string;
    const rawRoles = req.headers['x-user-roles'] as string;
    let isWaliKelas = false;
    try {
      const roles = rawRoles ? JSON.parse(rawRoles) : [];
      isWaliKelas = roles.includes('WALIKELAS');
    } catch (e) {}

    if (isWaliKelas) {
      studentParams.append('waliKelasId', userId);
    }

    let studentsRes;
    try {
      studentsRes = await axios.get(`${STUDENT_SERVICE_URL}/api/v1/students?${studentParams.toString()}`, { headers, timeout: 5000 });
    } catch (e: any) {
      console.error('Report Error (Student Service):', e.message);
      return sendError(res, 502, `Student Service Error: ${e.message}`);
    }
    const students = studentsRes.data.data.items || [];

    if (students.length === 0) {
      return sendResponse(res, 200, true, 'No students found for this report', []);
    }

    // 2. Fetch Violations & Achievements
    const filterParams = new URLSearchParams();
    if (startDate) filterParams.append('startDate', startDate as string);
    if (endDate) filterParams.append('endDate', endDate as string);
    filterParams.append('limit', '5000');
    // Include all approved violations (APPROVED_WALI and APPROVED_BK)

    let violationsRes, achievementsRes;
    try {
      [violationsRes, achievementsRes] = await Promise.all([
        axios.get(`${VIOLATION_SERVICE_URL}/api/v1/violations?${filterParams.toString()}`, { headers, timeout: 5000 }),
        axios.get(`${ACHIEVEMENT_SERVICE_URL}/api/v1/achievements?${filterParams.toString()}`, { headers, timeout: 5000 })
      ]);
    } catch (e: any) {
      console.error('Report Error (Violation/Achievement Service):', e.message);
      return sendError(res, 502, `Violation or Achievement Service Error: ${e.message}`);
    }

    const violations = violationsRes.data?.data?.items || [];
    const achievements = achievementsRes.data?.data?.items || [];

    // 3. Aggregate Data
    if (!Array.isArray(students)) {
      return sendError(res, 500, 'Invalid student data received from student service');
    }

    const reportData = students.map((s: any) => {
      if (!s || !s.id) return null;

      const studentViolations = Array.isArray(violations) 
        ? violations.filter((v: any) => v.studentId === s.id)
        : [];
        
      const studentAchievements = Array.isArray(achievements)
        ? achievements.filter((a: any) => a.studentId === s.id)
        : [];

      const negativePoints = studentViolations.reduce((sum: number, v: any) => sum + (Number(v.points) || 0), 0);
      const positivePoints = studentAchievements.reduce((sum: number, a: any) => sum + (Number(a.points) || 0), 0);

      return {
        id: s.id,
        siswa: s.name || 'Unknown',
        nis: s.nisn || '-',
        kelas: s.className || '-',
        pelanggaran: studentViolations.length,
        prestasi: studentAchievements.length,
        negativePoints,
        positivePoints,
        totalPoin: positivePoints - negativePoints
      };
    }).filter(Boolean); // Remove nulls

    return sendResponse(res, 200, true, 'Student points report generated', reportData);
  } catch (error: any) {
    console.error('Report Generation Error (General):', error);
    return sendError(res, 500, `Reporting Logic Error: ${error.message}`);
  }
};
