'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'gender',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'age',
        Sequelize.STRING
      )
    ]);
  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
  }
};