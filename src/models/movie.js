const { sequelize, DataTypes, Model } = require("../db/db");
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

Movie.hasMany(Cast, { as: "cast", foreignKey: "movie_id" });
Cast.belongsTo(Movie, { foreignKey: "movie_id" });

Movie.hasMany(Crew, { as: "crew", foreignKey: "movie_id" });
Crew.belongsTo(Movie, { foreignKey: "movie_id" });

module.exports = {
  Movie,
};
