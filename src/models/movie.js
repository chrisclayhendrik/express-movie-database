const { sequelize, DataTypes, Model } = require("../../db/db");
const { Cast } = require("./cast");
const { Crew } = require("./crew");

class Movie extends Model {}
Movie.init(
  {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    yearReleased: DataTypes.INTEGER,
  },
  {
    sequelize,
    timestamps: false,
    logging: false,
  }
);

Movie.hasMany(Cast, { as: "cast", foreignKey: "movieId" });
Cast.belongsTo(Movie, { foreignKey: "movieId" });

Movie.hasMany(Crew, { as: "crew", foreignKey: "movieId" });
Crew.belongsTo(Movie, { foreignKey: "movieId" });

module.exports = {
  Movie,
  Cast,
  Crew,
  sequelize,
};
