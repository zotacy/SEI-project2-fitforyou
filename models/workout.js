'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    static associate(models) {
      Workout.belongsTo(model.Exercise, {
        forgeignKey:"exerciseId",
        forgeignKey:"userId",
      });
      Workout.hasOne(model.Difficulty, {forgeignKey:"difficultyId"});
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