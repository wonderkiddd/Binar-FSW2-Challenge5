'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'kimchaewon@gmail.com',
        password: await bcrypt.hash("111111", 10),
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        email: 'npc@gmail.com',
        password: await bcrypt.hash("111111", 10),
        role: "member",
        createdAt: new Date(),
        updatedAt: null,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};