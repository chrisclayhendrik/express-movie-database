const { sequelize } = require("../db/db");
const { Movie } = require("./models/movie");
const { Cast } = require("./models/movie");
const { Crew } = require("./models/movie");

const seedMovie = [
  {
    name: "AppleBees",
    genre: "Texas",
    yearReleased: "FastFood",
  },
  {
    name: "AppleBees",
    genre: "Texas",
    yearReleased: "FastFood",
  },
  {
    name: "AppleBees",
    genre: "Texas",
    yearReleased: "FastFood",
  },
  {
    name: "AppleBees",
    genre: "Texas",
    yearReleased: "FastFood",
  },
  {
    name: "AppleBees",
    genre: "Texas",
    yearReleased: "FastFood",
  },
];

const seedCast = [
  {
    name: "Breakfast",
    role: 1,
  },
  {
    name: "Breakfast",
    role: 1,
  },
  {
    name: "Breakfast",
    role: 1,
  },
  {
    name: "Breakfast",
    role: 1,
  },
  {
    name: "Breakfast",
    role: 1,
  },
];

const seedCrew = [
  {
    name: "bhindi masala",
    jobTitle: "someimage.jpg",
  },
  {
    name: "bhindi masala",
    jobTitle: "someimage.jpg",
  },
  {
    name: "bhindi masala",
    jobTitle: "someimage.jpg",
  },
  {
    name: "bhindi masala",
    jobTitle: "someimage.jpg",
  },
  {
    name: "bhindi masala",
    jobTitle: "someimage.jpg",
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

