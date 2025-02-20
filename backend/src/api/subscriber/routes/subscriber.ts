/**
 * subscriber router
 */

import { factories } from '@strapi/strapi';

const { createCoreRouter } = factories;

export default createCoreRouter('api::subscriber.subscriber'); 