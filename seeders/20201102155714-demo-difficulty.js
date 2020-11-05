'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Difficulties",
      [
        {
          rating_name: "Easy",
          rating: 1
        },
        {
          rating_name: "Moderate",
          rating: 2
        },
        {
          rating_name: "Hard",
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
