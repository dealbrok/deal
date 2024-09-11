'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const roomData = require('../data/room.json')
    roomData.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Rooms', roomData, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Rooms', null, { truncate: true, cascade: true, restartIdentity: true })
  }
};
