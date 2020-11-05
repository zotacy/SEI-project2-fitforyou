'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    static associate(models) {
      Workout.belongsTo(models.Exercise, {
        through: 'UserExercises',
        foreignKey:"exerciseId",
        foreignKey:"userId",
        forgeignKey:"workoutId",
      });
      Workout.hasOne(models.Difficulty, {
        through: "WorkoutDifficulty",
        foreignKey:"difficultyId"
      });
    }
  };
  Workout.init({
    activity_name: DataTypes.STRING,
    exerciseId: DataTypes.INTEGER,
    difficultyId: DataTypes.INTEGER,
    activity_description: DataTypes.STRING,
    activity_notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Workout',
  });
  return Workout;
};