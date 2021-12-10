const { sequelize } = require("../db/db");
const { Movie } = require("./models/movie");
const { Cast } = require("./models/movie");
const { Crew } = require("./models/movie");

const seedMovie = [
  {
    name: "The Matrix",
    genre: "Science Fiction",
    yearReleased: 1999,
  },
  {
    name: "Oblivion",
    genre: "Science Fiction",
    yearReleased: 2013,
  },
  {
    name: "Dune",
    genre: "Science Fiction",
    yearReleased: 2021,
  },
  {
    name: "Johnny Mnemonic",
    genre: "Science Fiction",
    yearReleased: 1995,
  },
  {
    name: "Starship Troopers",
    genre: "Science Fiction",
    yearReleased: 1997,
  },
];

const seedCast = [
  {
    name: "Keanu Reeves",
    role: "Neo",
    movie_id: 1,
  },
  {
    name: "Tom Cruise",
    role: "Jack Harper",
    movie_id: 2,
  },
  {
    name: "Timothee Chalamet",
    role: "Paul Atreides",
    movie_id: 3,
  },
  {
    name: "Henry Rollins",
    role: "Spider",
    movie_id: 4,
  },
  {
    name: "Casper van Dien",
    role: "Johnny Rico",
    movie_id: 5,
  },
];

const seedCrew = [
  {
    name: "Lana Wachowski",
    jobTitle: "Director",
    movie_id: 1,
  },
  {
    name: "Joseph Kosinski",
    jobTitle: "Director",
    movie_id: 2,
  },
  {
    name: "Denis Villaneuve",
    jobTitle: "Director",
    movie_id: 3,
  },
  {
    name: "Joseph Longo",
    jobTitle: "Director",
    movie_id: 4,
  },
  {
    name: "Paul Verhoeven",
    jobTitle: "Director",
    movie_id: 5,
  },
];

const seed = async () => {
  try {
    await sequelize.sync({ force: true });
    await Movie.bulkCreate(seedMovie, { validate: true });
    await Cast.bulkCreate(seedCast, { validate: true });
    await Crew.bulkCreate(seedCrew, { validate: true });
    console.log("Seeding success!");
    sequelize.close();
  } catch (error) {
    console.log("Seeding Error!", error);
  }
};

seed()
  .then(() => {
    console.log("Seeding success!");
  })
  .catch((err) => {
    console.error("Seeding Error!");
    console.error(err);
  });
