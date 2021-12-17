'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemonCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pokemonCard.init({
    pokemonName: DataTypes.STRING,
    hpPoints:DataTypes.STRING,
    pokemonType:DataTypes.STRING,
    image:DataTypes.STRING,
    attackOne:DataTypes.STRING,
    damageOne:DataTypes.INTEGER,
    pokemonType2:DataTypes.STRING,
    attackTwo:DataTypes.STRING,
    damageTwo:DataTypes.INTEGER,
    pokemonType3:DataTypes.STRING,
    pokemonType4:DataTypes.STRING,
    weakness:DataTypes.STRING,
    resistance:DataTypes.STRING,
    retreatCost:DataTypes.STRING,
    pokemonType5:DataTypes.STRING,
    pokemonType6:DataTypes.STRING,
    pokemonType7:DataTypes.STRING,
    pokemonType8:DataTypes.STRING

  }, {
    sequelize,
    modelName: 'pokemonCard',
    tableName: 'pokemonCards',
    timestamps:false
  });
  return pokemonCard;
};