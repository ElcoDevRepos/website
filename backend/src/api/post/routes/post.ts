/**
 * post router
 */

import { factories } from '@strapi/strapi';

const { createCoreRouter } = factories;

export default createCoreRouter('api::post.post', {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
    create: {
      auth: false,
    },
    update: {
      auth: false,
    },
    delete: {
      auth: false,
    },
  },
  only: ['find', 'findOne', 'create', 'update', 'delete'],
}); 