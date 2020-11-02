'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    static associate(models) {
      Exercise.belongsToMany(models.User, {
        through: 'UserExercises',
        foreignKey: 'userId',
      });
      Exercise.hasMany(models.Workout, {
        foreignKey: 'exerciseId'
      });
    };
  };
  Exercise.init({
    name: DataTypes.STRING,
    addToPage: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exercise',
  });
  return Exercise;
};