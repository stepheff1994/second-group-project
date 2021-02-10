const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class Drawing extends Model { }

// define table columns and configuration
Drawing.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING(length = 10000),
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "drawing",
  }


);

module.exports = Drawing;
