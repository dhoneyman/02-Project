const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class States extends Model {
}

States.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        state: {
            type: DataTypes.CHAR,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'state',
    }
);


module.exports = States; 