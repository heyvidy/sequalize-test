'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class storage_locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  storage_locations.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_zip: DataTypes.STRING,
    state_province: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'storage_locations',
    tableName: 'storage_locations'
  });

  return storage_locations;
};