'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    static associate(models) {
      Workout.belongsTo(models.Exercise, {
        foreignKey:"exerciseId",
        foreignKey:"userId",
      });
      Workout.hasOne(models.Difficulty, {
        through: "WorkoutDifficulty",
        foreignKey:"difficultyId"
      });
    }
  };
  Workout.init({
    name: DataTypes.STRING,
    exerciseId: DataTypes.INTEGER,
    difficultyId: DataTypes.INTEGER,
    workout: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Workout',
  });
  return Workout;
};