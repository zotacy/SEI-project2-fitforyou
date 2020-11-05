'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Exercises",
      [
        {
          name: "Run",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cycle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swim",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Triathlon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Weight Lifting",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cardio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cross Fit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Climbing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yoga",
          createdAt: new Date(),
          updatedAt: new Date(),
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
