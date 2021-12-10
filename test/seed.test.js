const { sequelize } = require("../db/db");
const { Movie } = require("../src/models/movie");
const { Cast } = require("../src/models/cast");
const { Crew } = require("../src/models/crew");

describe("seedMovie array", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });
  const seedMovieTest = [
    {
      name: "Oblivion",
      genre: "Sci-Fi",
      yearReleased: 2013,
    },
  ];
  const seedCastTest = [
    {
      name: "Tom Cruise",
      role: "Jack Harper",
      movieId: 1,
    },
  ];
  const seedCrewTest = [
    {
      name: "Joseph Kosinski",
      jobTitle: "Director",
      movieId: 1,
    },
  ];

  const testSeed = async () => {
    try {
      await sequelize.sync({ force: true });
      await Movie.bulkCreate(seedMovieTest, { validate: true });
      await Cast.bulkCreate(seedCastTest, { validate: true });
      await Crew.bulkCreate(seedCrewTest, { validate: true });
      console.log("Seeding success!");
      sequelize.close();
    } catch (error) {
      console.log("Seeding Error!", error);
    }
  };
  testSeed()
    .then(() => {
      console.log("Seeding success!");
    })
    .catch((err) => {
      console.error("Seeding Error!");
      console.error(err);
    });

  test("seedMovieTest contains items in array", () => {
    expect(seedMovieTest).toContainEqual({
      name: "Oblivion",
      genre: "Sci-Fi",
      yearReleased: 2013,
    });
  });
  test("seedCastTest contains items in array", () => {
    expect(seedCastTest).toContainEqual({
      name: "Tom Cruise",
      role: "Jack Harper",
      movieId: 1,
    });
  });
  test("seedCrewTest contains items in array", () => {
    expect(seedCrewTest).toContainEqual({
      name: "Joseph Kosinski",
      jobTitle: "Director",
      movieId: 1,
    });
  });

  afterAll(async () => {
    await sequelize.sync({ force: true });
    sequelize.close();
  });
});
