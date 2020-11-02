'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Difficulty extends Model {
    static associate(models) {
      Difficulty.belongsToMany(models.Workout, {forgeignKey: "difficultyId"})
    }
  };
  Difficulty.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Difficulty',
  });
  return Difficulty;
};