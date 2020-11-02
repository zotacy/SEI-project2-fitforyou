'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Workouts",
      [
        {
          name: "First Run Workout",
          exerciseId: "1",
          difficultyId: "1",
          workout: "easy run, 30 minutes",
          notes: "Keep it EASY",
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
