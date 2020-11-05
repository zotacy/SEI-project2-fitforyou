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
    userId: DataTypes.INTEGER,
    addToPage: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Exercise',
  });
  return Exercise;
};