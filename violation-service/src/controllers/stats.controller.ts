import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';

export const getStatsSummary = async (req: Request, res: Response) => {
  const academicYear = req.query.academicYear as string;
  const semester = parseInt(req.query.semester as string);

  const startDate = req.query.startDate as string;
  const endDate = req.query.endDate as string;

  const where: any = {
    deletedAt: null,
    ...(academicYear && { academicYear }),
    ...(semester && { semester }),
  };

  if (startDate || endDate) {
    where.violationDate = {};
    if (startDate) where.violationDate.gte = new Date(startDate);
    if (endDate) where.violationDate.lte = new Date(endDate);
  }

  const total = await prisma.violation.count({ where });
  const byStatus = await prisma.violation.groupBy({
    by: ['status'],
    where,
    _count: true,
  });

  const bySeverity = await prisma.violation.groupBy({
    by: ['categorySeverity'],
    where,
    _count: true,
  });

  const byClass = await prisma.violation.groupBy({
    by: ['studentClass'],
    where,
    _count: true,
  });

  const byCategory = await prisma.violation.groupBy({
    by: ['categoryName'],
    where,
    _count: true,
    orderBy: { _count: { id: 'desc' } },
    take: 5,
  });

  return sendResponse(res, 200, true, 'Statistics summary retrieved', {
    total,
    byStatus: byStatus.reduce((acc: any, curr) => ({ ...acc, [curr.status]: curr._count }), {}),
    bySeverity: bySeverity.reduce(
      (acc: any, curr) => ({ ...acc, [curr.categorySeverity]: curr._count }),
      {}
    ),
    byClass: byClass.reduce(
      (acc: any, curr) => ({ ...acc, [curr.studentClass]: curr._count }),
      {}
    ),
    byCategory: byCategory.map(c => ({ name: c.categoryName, count: c._count })),
  });
};

export const getRepeatOffenders = async (req: Request, res: Response) => {
  const minViolations = parseInt(req.query.minViolations as string) || 3;
  const academicYear = req.query.academicYear as string;

  const offenders = await prisma.violationStatistics.findMany({
    where: {
      academicYear,
      totalViolations: { gte: minViolations },
    },
    orderBy: { totalViolations: 'desc' },
  });

  return sendResponse(res, 200, true, 'Repeat offenders retrieved', offenders);
};
export const getTopReporters = async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string) || 5;

  const reporters = await prisma.violation.groupBy({
    by: ['reportedBy', 'reportedByName', 'reporterRole'],
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: 'desc',
      },
    },
    take: limit,
    where: { deletedAt: null },
  });

  return sendResponse(res, 200, true, 'Top reporters retrieved', reporters.map(r => ({
    userId: r.reportedBy,
    name: r.reportedByName,
    role: r.reporterRole,
    count: r._count.id
  })));
};
