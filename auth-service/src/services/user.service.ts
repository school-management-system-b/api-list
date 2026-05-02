import prisma from '../config/prisma';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import logger from '../config/logger';
import crypto from 'crypto';

export class UserService {
  async createUser(data: any, createdBy: string) {
    const { username, email, name, roleCode, nip_nis } = data;

    // 1. Generate temporary password (Secure)
    const tempPassword = crypto.randomBytes(4).toString('hex') + 'A1!';
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

      // Insert Audit Log (using executeRaw to bypass Prisma schema if not updated yet, or just rely on manual insert later, but better to use raw query if schema isn't generated)
      try {
        await tx.$executeRaw`
          INSERT INTO audit_logs (actor_id, actor_name, action, target_type, target_id, target_name)
          VALUES (${createdBy}::uuid, 'System/Admin', 'CREATE_USER', 'user', ${newUser.id}::uuid, ${username})
        `;
      } catch (e: any) {
        logger.warn('Could not insert audit log (maybe table not ready): ' + e.message);
      }

      return newUser;
    });

    // 4. Direct HTTP calls to other services
    try {
      const userServiceUrl = process.env.USER_SERVICE_URL || 'http://localhost:3002';
      const notificationServiceUrl = process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3007';
      const internalSecret = process.env.INTERNAL_SECRET || 'change-this-to-a-strong-secret-in-production';

      const headers = { 'x-internal-secret': internalSecret };

      // Call User Service to create profile
      await axios.post(`${userServiceUrl}/api/v1/internal/users`, {
        userId: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        nip_nis: nip_nis,
      }, { headers }).catch(err => logger.error('Failed to auto-create profile in User Service:', err.message));

      // Call Notification Service to send welcome email
      await axios.post(`${notificationServiceUrl}/api/v1/internal/notifications/welcome`, {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        tempPassword,
      }, { headers }).catch(err => logger.error('Failed to send welcome email via Notification Service:', err.message));

    } catch (error: any) {
      logger.error('Error during inter-service communication:', error.message);
    }

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
      } catch (error: any) {
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
