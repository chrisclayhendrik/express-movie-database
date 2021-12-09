const { sequelize, DataTypes, Model } = require("../db/db");

class Cast extends Model {}
Cast.init(
  {
    name: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
    logging: false,
  }
);

module.exports = {
  Cast,
};
