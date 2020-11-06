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
        {
          activity_name: "Example: Moderate Bike Workout",
          exerciseId: "2",
          difficultyId: "2",
          activity_description: "Easy Bike, 1 hr.",
          activity_notes: "Keep it Steady.",
          userId: "1",
        },
        {
          activity_name: "Example: Hard Workout",
          exerciseId: "3",
          difficultyId: "3",
          activity_description: "Hard Swim 1 hr.",
          activity_notes: "Make it Hard!",
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
