'use strict';

/**
 * doctors-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doctors-card.doctors-card');
