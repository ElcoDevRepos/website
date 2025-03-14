/**
 * post controller
 */

import { factories } from '@strapi/strapi';
import axios from 'axios';

const { createCoreController } = factories;

const stockImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  'https://images.unsplash.com/photo-1562813733-b31f71025d54',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
];

// Function to redistribute post dates
const redistributePostDates = async (strapi: any) => {
  try {
    // Get all posts ordered by current publishedAt
    const posts = await strapi.entityService.findMany('api::post.post', {
      sort: { publishedAt: 'asc' },
      populate: '*',
      publicationState: 'preview', // This gets both draft and published content
    });

    if (posts.length === 0) return;

    // Start date will be 3 months ago
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 3);

    // Space posts 3 days apart
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() + (i * 3));

      // Update the post with new dates
      await strapi.entityService.update('api::post.post', post.id, {
        data: {
          publishedAt: newDate,
        },
      });
    }
  } catch (error) {
    console.error('Error in redistributePostDates:', error);
    throw error;
  }
};

export default createCoreController('api::post.post', ({ strapi }) => ({
  async checkAllPosts(ctx) {
    try {
      // Get all posts including drafts
      const entries = await strapi.entityService.findMany('api::post.post', {
        sort: { publishedAt: 'desc' },
        publicationState: 'preview',
      });

      return {
        count: entries.length,
        posts: entries.map(post => ({
          id: post.id,
          title: post.title,
          publishedAt: post.publishedAt,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
          status: post.publishedAt ? 'published' : 'draft'
        }))
      };
    } catch (error) {
      console.error('Error checking posts:', error);
      return ctx.throw(500, error.message);
    }
  },

  async redistributeDates(ctx) {
    try {
      await redistributePostDates(strapi);
      return { message: 'Post dates have been redistributed successfully' };
    } catch (error) {
      console.error('Error redistributing dates:', error);
      return ctx.throw(500, error.message);
    }
  },

  async create(ctx) {
    try {
      // Get a random stock image URL
      const randomImageUrl = stockImages[Math.floor(Math.random() * stockImages.length)];
      
      // Download the image
      const imageResponse = await axios.get(randomImageUrl, {
        responseType: 'arraybuffer'
      });

      // Create a buffer from the image data
      const buffer = Buffer.from(imageResponse.data, 'binary');

      // Upload the image to Strapi
      const uploadResponse = await strapi.plugins.upload.services.upload.upload({
        data: {}, // mandatory declare the data(can be empty), otherwise it will give you an undefined error
        files: {
          buffer: buffer,
          name: `blog-cover-${Date.now()}.jpg`,
          type: 'image/jpeg',
          size: buffer.length,
        },
      });

      // Add the image to the request body
      ctx.request.body.data = {
        ...ctx.request.body.data,
        coverImage: uploadResponse[0].id,
      };

      // Call the default create action
      const createResponse = await super.create(ctx);
      return createResponse;
    } catch (error) {
      console.error('Error in create:', error);
      throw error;
    }
  },

  async update(ctx) {
    // If no coverImage is present, add one
    if (!ctx.request.body.data.coverImage) {
      try {
        const randomImageUrl = stockImages[Math.floor(Math.random() * stockImages.length)];
        const imageResponse = await axios.get(randomImageUrl, {
          responseType: 'arraybuffer'
        });

        const buffer = Buffer.from(imageResponse.data, 'binary');

        const uploadResponse = await strapi.plugins.upload.services.upload.upload({
          data: {},
          files: {
            buffer: buffer,
            name: `blog-cover-${Date.now()}.jpg`,
            type: 'image/jpeg',
            size: buffer.length,
          },
        });

        ctx.request.body.data.coverImage = uploadResponse[0].id;
      } catch (error) {
        console.error('Error adding cover image during update:', error);
      }
    }

    // Call the default update action
    const updateResponse = await super.update(ctx);
    return updateResponse;
  }
})); 