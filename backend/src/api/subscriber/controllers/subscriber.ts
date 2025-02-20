/**
 * subscriber controller
 */

import { factories } from '@strapi/strapi';

const { createCoreController } = factories;

export default createCoreController('api::subscriber.subscriber', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { email, source } = ctx.request.body.data;

      // Validate email
      if (!email) {
        return ctx.badRequest('Email is required');
      }

      // Check if subscriber already exists
      const existingSubscriber = await strapi.db.query('api::subscriber.subscriber').findOne({
        where: { email },
      });

      if (existingSubscriber) {
        return ctx.badRequest('Email already subscribed');
      }

      // Add current timestamp
      ctx.request.body.data = {
        ...ctx.request.body.data,
        subscribedAt: new Date(),
        subscribed: true,
      };

      // Create subscriber
      const response = await super.create(ctx);
      return response;
    } catch (error) {
      console.error('Error creating subscriber:', error);
      return ctx.badRequest(error.message);
    }
  }
})); 