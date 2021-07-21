const sequelize = require('../config/connection.js');
const { Model, DataTypes } = require('sequelize');


class Category extends Model {}

Category.init(
  {
    type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
  
  {
    type: DataTypes.STRING,
    allowNull: false,
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
