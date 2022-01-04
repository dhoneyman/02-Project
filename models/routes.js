const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Route extends Model {
}

Route.init(
    { name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      difficulty: {
          type: DataTypes.CHAR,
          allowNull: false,
      },
      rating: {
          type: DataTypes.INT,
      },
      location_id: {
          type: DataTypes.INT,
          allowNull: false,
      },
      wall_id: {
          type: DataTypes.INT,
      },
      user_id: {
          type: DataTypes.CHAR,
      },
      FA: {
          type: DataTypes.CHAR,
      },
    }
);    
module.exports = Route;