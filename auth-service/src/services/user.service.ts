import prisma from '../config/prisma';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { messageBroker } from './message-broker.service';
import logger from '../config/logger';

export class UserService {
  async createUser(data: any, createdBy: string) {
    const { username, email, name, roleCode, nip_nis } = data;

    // 1. Generate temporary password
    const tempPassword = Math.random().toString(36).slice(-8) + '1!';
    const hashedPassword = await bcrypt.hash(tempPassword, 12);

    // 2. Find Role
    const role = await prisma.role.findUnique({
      where: { code: roleCode },
    });

    if (!role) {
      throw { status: 400, message: `Role ${roleCode} not found` };
    }

    // 3. Create User & Assign Role (Transaction)
    const user = await prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          name,
          mustChangePassword: true,
          isActive: true,
          createdBy,
        },
      });

      await tx.userRole.create({
        data: {
          userId: newUser.id,
          roleId: role.id,
        },
      });

      return newUser;
    });

    // 4. Publish Event for Notification and User Profile Creation
    await messageBroker.publishMessage('user.exchange', 'user.created', {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      role: roleCode,
      nip_nis: nip_nis,
      tempPassword, // Sent to notification service only
    });

    return {
      id: user.id,
      username: user.username,
      tempPassword,
    };
  }

  async bulkCreateUsers(users: any[], createdBy: string) {
    const results = [];
    for (const userData of users) {
      try {
        const result = await this.createUser(userData, createdBy);
        results.push({ success: true, ...result });
      } catch (error) {
        results.push({ success: false, username: userData.username, message: error.message });
      }
    }
    return results;
  }

  async activateAccount(userId: string, data: any) {
    const { currentPassword, newPassword } = data;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw { status: 404, message: 'User not found' };

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) throw { status: 400, message: 'Current password incorrect' };

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    return prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
        mustChangePassword: false,
        passwordChangedAt: new Date(),
      },
    });
  }
}

export const userService = new UserService();
