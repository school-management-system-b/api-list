import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { sendResponse, sendError } from '../utils/response';

export const getSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await prisma.subject.findMany({
      where: { deletedAt: null, isActive: true },
      orderBy: { name: 'asc' },
    });

    return sendResponse(res, 200, true, 'Subjects retrieved successfully', subjects);
  } catch (error: any) {
    return sendError(res, 500, error.message);
  }
};

export const getSubjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const subject = await prisma.subject.findUnique({
      where: { id },
    });

    if (!subject || subject.deletedAt) {
      return sendError(res, 404, 'Subject not found');
    }

    return sendResponse(res, 200, true, 'Subject detail retrieved', subject);
  } catch (error: any) {
    return sendError(res, 500, error.message);
  }
};

export const createSubject = async (req: Request, res: Response) => {
  try {
    const { code, name, description } = req.body;
    const createdBy = (req as any).user?.id || 'SYSTEM';

    const existing = await prisma.subject.findUnique({
      where: { code }
    });

    if (existing) {
      return sendError(res, 400, `Subject with code ${code} already exists`);
    }

    const newSubject = await prisma.subject.create({
      data: {
        code,
        name,
        description,
        createdBy
      }
    });

    return sendResponse(res, 201, true, 'Subject created successfully', newSubject);
  } catch (error: any) {
    return sendError(res, 500, error.message);
  }
};

export const updateSubject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedBy = (req as any).user?.id || 'SYSTEM';

    const existing = await prisma.subject.findUnique({ where: { id } });
    if (!existing) return sendError(res, 404, 'Subject not found');

    const updatedSubject = await prisma.subject.update({
      where: { id },
      data: {
        ...req.body,
        updatedBy
      }
    });

    return sendResponse(res, 200, true, 'Subject updated successfully', updatedSubject);
  } catch (error: any) {
    return sendError(res, 500, error.message);
  }
};

export const deleteSubject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const existing = await prisma.subject.findUnique({ where: { id } });
    if (!existing) return sendError(res, 404, 'Subject not found');

    await prisma.subject.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        isActive: false
      }
    });

    return sendResponse(res, 200, true, 'Subject deleted successfully');
  } catch (error: any) {
    return sendError(res, 500, error.message);
  }
};
