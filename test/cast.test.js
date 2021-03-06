
   
const { Cast } = require("../src/models/movie");
const { sequelize } = require("../db/db");

beforeEach(async () => {
  await sequelize.sync({ force: true });
});

describe("Cast model", () => {
  test("Cast has name", () => {
    const cast = Cast.build({
      name: "Test cast",
      role: "test role",
    });
    expect(cast.name).toBe("Test cast");
  });
  test("Cast has role", () => {
    const cast = Cast.build({
      name: "Test cast",
      role: "test role",
    });
    expect(cast.role).toBe("test role");
  });
  test("Cast has movie_id", () => {
    const cast = Cast.build({
      name: "Test cast",
      role: "test role",
      movie_id: 1,
    });
    expect(cast.movie_id).toBe(1);
  });
});