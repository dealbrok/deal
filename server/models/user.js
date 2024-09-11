'use strict';
const {
  Model
} = require('sequelize');
const { passwordHash } = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Username is required"
        },
        notNull: {
          msg: "Username is required"
        },
      },
      unique: {
        msg: "Username must be unique"
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password is required"
        },
        notNull: {
          msg: "Password is required"
        },
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Role is required"
        },
        notNull: {
          msg: "Role is required"
        },
      },
      defaultValue: "User"
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(el => {
    el.password = passwordHash(el.password)
  })
  return User;
};