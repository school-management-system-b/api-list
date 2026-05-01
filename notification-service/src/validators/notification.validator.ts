import Joi from 'joi';

export const triggerNotificationSchema = Joi.object({
  userId: Joi.string().uuid().required(),
  type: Joi.string().required(),
  title: Joi.string().required(),
  message: Joi.string().required(),
  category: Joi.string()
    .valid('GENERAL', 'VIOLATION', 'ACHIEVEMENT', 'ACADEMIC', 'SYSTEM')
    .default('GENERAL'),
  data: Joi.object().optional(),
  recipientEmail: Joi.string().email().optional(),
  recipientName: Joi.string().optional(),
  channels: Joi.array()
    .items(Joi.string().valid('INTERNAL', 'EMAIL', 'WA'))
    .default(['INTERNAL']),
});

export const templateSchema = Joi.object({
  code: Joi.string().uppercase().required(),
  name: Joi.string().required(),
  subject: Joi.string().optional().allow(null),
  body: Joi.string().required(),
  channels: Joi.array().items(Joi.string().valid('INTERNAL', 'EMAIL', 'WA')),
  isActive: Joi.boolean().default(true),
});

export const markReadSchema = Joi.object({
  notificationIds: Joi.array().items(Joi.string().uuid()).required(),
});
