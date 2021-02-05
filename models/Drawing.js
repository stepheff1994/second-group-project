const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

<<<<<<< HEAD
class Drawing extends Model { }
=======

class Drawing extends Model {}
>>>>>>> 34221deae9a36bec9da6f7f794f8024a8b030ce4

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
      type: DataTypes.STRING,
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
