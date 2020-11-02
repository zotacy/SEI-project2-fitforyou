'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Difficulties",
      [
        {
          name: "Easy",
          rating: 1
        },
        {
          name: "Moderate",
          rating: 2
        },
        {
          name: "Hard",
          rating: 3
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
