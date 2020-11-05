'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkoutDifficulty extends Model {
    static associate(models) {
      // define association here
    }
  };
  WorkoutDifficulty.init({
    workoutId: DataTypes.INTEGER,
    difficultyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkoutDifficulty',
  });
  return WorkoutDifficulty;
};