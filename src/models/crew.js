const { sequelize, DataTypes, Model } = require("../../db/db");

class Crew extends Model {}
Crew.init(
  {
    name: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    movie_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    timestamps: false,
    logging: false,
  }
);

module.exports = {
  Crew,
};
