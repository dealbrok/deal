'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Upload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Upload.belongsTo(models.User, { foreignKey: 'UsersId' })
      Upload.belongsTo(models.Room, { foreignKey: 'RoomsId' })
    }
  }
  Upload.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "UsersId is required"
        },
        notNull: {
          msg: "UsersId is required"
        }
      }
    },
    RoomNameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "RoomNameId is required"
        },
        notNull: {
          msg: "RoomNameId is required"
        }
      }
    },
    imageUrl: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Upload',
  });
  return Upload;
};