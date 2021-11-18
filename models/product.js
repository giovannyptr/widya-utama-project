'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
   
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Product Name is required" },
        notEmpty: { msg: "Product Name is required" },
      },
    },
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};