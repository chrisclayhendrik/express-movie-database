const { Movie } = require("../src/models/movie");
const { Cast } = require("../src/models/movie");
const { Crew } = require("../src/models/movie");
const { sequelize } = require("../src/models/movie");

beforeEach(async () => {
  await sequelize.sync({ force: true });
});

describe("Movie model", () => {
  test("Movie has name", () => {
    const movie = Movie.build({
      name: "Test Movie",
      genre: "test genre",
      yearReleased: 2021,
    });
    expect(movie.name).toBe("Test Movie");
  });
  test("Movie has genre", () => {
    const movie = Movie.build({
      name: "Test Movie",
      genre: "test genre",
      yearReleased: 2021,
    });
    expect(movie.genre).toBe("test genre");
  });
  test("Movie has year", () => {
    const movie = Movie.build({
      name: "Test Movie",
      genre: "test genre",
      yearReleased: 2021,
    });
    expect(movie.yearReleased).toBe(2021);
  });
  test("Cast belongs to movie", () => {
    const movie = Movie.create({
      id: 1,
      name: "Test Movie",
      genre: "test genre",
      yearReleased: 2021,
    });
    const cast = Cast.create({
      name: "Test Cast",
      role: "Test Role",
      movie_id: movie.id,
    });
    expect(cast.movie_id).toEqual(movie.id);
  });
  test("Crew belongs to movie", () => {
    const movie = Movie.create({
      id: 1,
      name: "Test Movie",
      genre: "test genre",
      yearReleased: 2021,
    });
    const crew = Crew.create({
      name: "Test Crew",
      jobTitle: "Test Job",
      movie_id: movie.id,
    });
    expect(crew.movie_id).toEqual(movie.id);
  });
});
