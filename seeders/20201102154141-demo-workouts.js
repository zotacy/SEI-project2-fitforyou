'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Workouts",
      [
        {
          activity_name: "Example: Easy Run Workout",
          exerciseId: "1",
          difficultyId: "1",
          activity_description: "Easy run, 30 minutes.",
          activity_notes: "Keep it EASY.",
          userId: "1",
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
