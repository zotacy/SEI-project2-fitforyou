'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserExercise extends Model {
    static associate(models) {
      // define association here
    }
  };
  UserExercise.init({
    userId: DataTypes.INTEGER,
    exerciseId: DataTypes.INTEGER,
    workoutId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserExercise',
  });
  return UserExercise;
};