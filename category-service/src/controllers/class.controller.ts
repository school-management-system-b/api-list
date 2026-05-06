import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';

export const getClasses = async (req: Request, res: Response) => {
  try {
    const { academicYear, level } = req.query;
    
    const where = {
      deletedAt: null,
      isActive: true,
      ...(academicYear && { academicYear: academicYear as string }),
      ...(level && { level: level as string }),
    };

    const classes = await prisma.class.findMany({
      where,
      orderBy: { name: 'asc' },
    });

    return sendResponse(res, 200, true, 'Classes retrieved successfully', classes);
  } catch (error: any) {
    return sendError(res, 500, error.message);
  }
};

export const getClassById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const classItem = await prisma.class.findUnique({
      where: { id },
    });

    if (!classItem || classItem.deletedAt) {
      return sendError(res, 404, 'Class not found');
    }

    return sendResponse(res, 200, true, 'Class detail retrieved', classItem);
  } catch (error: any) {
    return sendError(res, 500, error.message);
  }
};

export const createClass = async (req: Request, res: Response) => {
  try {
    const { code, name, level, major, capacity, academicYear, roomNumber, floor, building, waliKelasId, waliKelasName } = req.body;
    const createdBy = (req as any).user?.id || 'SYSTEM';

    // Check if code + academicYear already exists
    const existing = await prisma.class.findUnique({
      where: {
        code_academicYear: { code, academicYear }
      }
    });

    if (existing) {
      return sendError(res, 400, `Class with code ${code} for academic year ${academicYear} already exists`);
    }

    const newClass = await prisma.class.create({
      data: {
        code,
        name,
        level,
        major,
        capacity,
        academicYear,
        roomNumber,
        floor,
        building,
        waliKelasId,
        waliKelasName,
        createdBy
      }
    });

    return sendResponse(res, 201, true, 'Class created successfully', newClass);
  } catch (error: any) {
    return sendError(res, 500, error.message);
  }
};

export const updateClass = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedBy = (req as any).user?.id || 'SYSTEM';

    const existing = await prisma.class.findUnique({ where: { id } });
    if (!existing) return sendError(res, 404, 'Class not found');

    const updatedClass = await prisma.class.update({
      where: { id },
      data: {
        ...req.body,
        updatedBy
      }
    });

    return sendResponse(res, 200, true, 'Class updated successfully', updatedClass);
  } catch (error: any) {
    return sendError(res, 500, error.message);
  }
};

export const deleteClass = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const existing = await prisma.class.findUnique({ where: { id } });
    if (!existing) return sendError(res, 404, 'Class not found');

    await prisma.class.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        isActive: false
      }
    });

    return sendResponse(res, 200, true, 'Class deleted successfully');
  } catch (error: any) {
    return sendError(res, 500, error.message);
  }
};
