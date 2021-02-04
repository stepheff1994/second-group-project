const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Draw model
class Draw extends Model { }

// create fields/columns for Draw model
Draw.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        drawing: {
            type: DataTypes.BLOB,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'draw'
    }
);

module.exports = Draw;
