import { Prisma } from '@prisma/client';
import prisma from '../config/prisma';
import axios from 'axios';
import logger from '../config/logger';

export const findAll = async (offset: number, limit: number, search?: string) => {
  const where: Prisma.UserProfileWhereInput = {
    deletedAt: null,
    ...(search && {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { username: { contains: search, mode: 'insensitive' } },
        { nip_nis: { contains: search, mode: 'insensitive' } },
      ],
    }),
  };

  const [items, total] = await Promise.all([
    prisma.userProfile.findMany({
      where,
      skip: offset,
      take: limit,
      orderBy: { name: 'asc' },
    }),
    prisma.userProfile.count({ where }),
  ]);

  return { items, total };
};

export const findById = async (id: string) => {
  return prisma.userProfile.findUnique({
    where: { id },
  });
};

export const findByUserId = async (userId: string) => {
  return prisma.userProfile.findUnique({
    where: { userId },
  });
};


export const create = async (data: Prisma.UserProfileCreateInput) => {
  return prisma.userProfile.create({ data });
};

export const update = async (id: string, data: Prisma.UserProfileUpdateInput) => {
  return prisma.userProfile.update({
    where: { id },
    data,
  });
};

export const softDelete = async (id: string, deletedBy: string) => {
  // 1. Find profile to get userId
  const profile = await prisma.userProfile.findUnique({ where: { id } });
  if (!profile) throw { code: 'P2025', message: 'User profile not found' };

  // 2. Call Auth Service to delete the user account
  if (profile.userId) {
    try {
      const authServiceUrl = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';
      const internalSecret = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';
      
      await axios.delete(`${authServiceUrl}/api/v1/auth/internal/user/${profile.userId}`, {
        headers: { 'x-internal-secret': internalSecret }
      });
      logger.info(`Auth user ${profile.userId} deleted successfully`);
    } catch (error: any) {
      logger.error(`Failed to delete auth user ${profile.userId}: ${error.message}`);
    }
  }

  // 3. Hard delete the profile (since user wants it gone from DB)
  return prisma.userProfile.delete({
    where: { id }
  });
};

export const bulkDelete = async (ids: string[]) => {
  // 1. Find profiles to get userIds
  const profiles = await prisma.userProfile.findMany({
    where: { id: { in: ids } },
    select: { userId: true, id: true }
  });

  const userIds = profiles.map(p => p.userId).filter(Boolean) as string[];

  // 2. Call Auth Service to bulk delete accounts
  if (userIds.length > 0) {
    try {
      const authServiceUrl = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';
      const internalSecret = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';
      
      await axios.post(`${authServiceUrl}/api/v1/auth/internal/users/bulk-delete`, {
        userIds
      }, {
        headers: { 'x-internal-secret': internalSecret }
      });
      logger.info(`${userIds.length} auth users deleted successfully`);
    } catch (error: any) {
      logger.error(`Failed to bulk delete auth users: ${error.message}`);
    }
  }

  // 3. Hard delete profiles
  return prisma.userProfile.deleteMany({
    where: { id: { in: ids } }
  });
};
