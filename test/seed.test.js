const { sequelize } = require("../db/db");
const { Movie } = require("../src/models/movie");
const { Cast } = require("../src/models/movie");
const { Crew } = require("../src/models/movie");

describe("seedMovie array", () => {
  const seedMovieTest = [
    {
      movie_id: 1,
      name: "Oblivion",
      genre: "Sci-Fi",
      yearReleased: 2013,
    },
  ];
  const seedCastTest = [
    {
      name: "Tom Cruise",
      role: "Jack Harper",
      movie_id: 1,
    },
  ];
  const seedCrewTest = [
    {
      name: "Joseph Kosinski",
      jobTitle: "Director",
      movie_id: 1,
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
    testSeed();
  };

  test("seedMovieTest contains items in array", () => {
    expect(seedMovieTest).toContainEqual({
      movie_id: 1,
      name: "Oblivion",
      genre: "Sci-Fi",
      yearReleased: 2013,
    });
  });
  test("seedCastTest contains items in array", () => {
    expect(seedCastTest).toContainEqual({
      name: "Tom Cruise",
      role: "Jack Harper",
      movie_id: 1,
    });
  });
  test("seedCrewTest contains items in array", () => {
    expect(seedCrewTest).toContainEqual({
      name: "Joseph Kosinski",
      jobTitle: "Director",
      movie_id: 1,
    });
  });

  afterAll(async () => {
    await sequelize.sync({ force: true });
  });
});
