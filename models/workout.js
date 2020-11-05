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
    activy_name: DataTypes.STRING,
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