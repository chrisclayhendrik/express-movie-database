const { sequelize } = require("../db/db");
const { Movie } = require("./models/movie");
const { Cast } = require("./models/cast");
const { Crew } = require("./models/crew");

const seedMovie = [
  {
    name: "AppleBees",
    genre: "Texas",
    yearReleased: 1990,
  },
  {
    name: "AppleBees",
    genre: "Texas",
    yearReleased: 1990,
  },
  {
    name: "AppleBees",
    genre: "Texas",
    yearReleased: 1990,
  },
  {
    name: "AppleBees",
    genre: "Texas",
    yearReleased: 1990,
  },
  {
    name: "AppleBees",
    genre: "Texas",
    yearReleased: 1990,
  },
];

const seedCast = [
  {
    name: "Breakfast",
    role: 1,
    movieId: 1,
  },
  {
    name: "Breakfast",
    role: 1,
    movieId: 2,
  },
  {
    name: "Breakfast",
    role: 1,
    movieId: 3,
  },
  {
    name: "Breakfast",
    role: 1,
    movieId: 4,
  },
  {
    name: "Breakfast",
    role: 1,
    movieId: 5,
  },
];

const seedCrew = [
  {
    name: "bhindi masala",
    jobTitle: "someimage.jpg",
    movieId: 1,
  },
  {
    name: "bhindi masala",
    jobTitle: "someimage.jpg",
    movieId: 2,
  },
  {
    name: "bhindi masala",
    jobTitle: "someimage.jpg",
    movieId: 3,
  },
  {
    name: "bhindi masala",
    jobTitle: "someimage.jpg",
    movieId: 4,
  },
  {
    name: "bhindi masala",
    jobTitle: "someimage.jpg",
    movieId: 5,
  },
];

const seed = async () => {
  try {
    await sequelize.sync({ force: true });
    await Movie.bulkCreate(seedMovie, { validate: true });
    await Cast.bulkCreate(seedCast, { validate: true });
    await Crew.bulkCreate(seedCrew, { validate: true });
    console.log("Seeding success!");
    await sequelize.sync({ force: true });
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
<<<<<<< HEAD

  
=======
>>>>>>> main
