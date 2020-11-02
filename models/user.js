'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Exercise, {foreginKey: "userId"});
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};