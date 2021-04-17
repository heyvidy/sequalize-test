'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wine_stocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  wine_stocks.init({
    wine_id: DataTypes.BIGINT,
    storage_location_id: DataTypes.BIGINT,
    stock: DataTypes.INTEGER,
    cellar_location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wine_stocks',
  });


  return wine_stocks;
};