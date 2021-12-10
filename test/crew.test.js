const { Crew } = require("../src/models/movie");
const { sequelize } = require("../src/models/movie");

beforeEach(async () => {
  await sequelize.sync({ force: true });
});

describe("Crew model", () => {
  test("Crew has name", () => {
    const crew = Crew.build({
      name: "Test crew",
      jobTitle: "test job",
    });
    expect(crew.name).toBe("Test crew");
  });
  test("Crew has title", () => {
    const crew = Crew.build({
      name: "Test crew",
      jobTitle: "test job",
    });
    expect(crew.jobTitle).toBe("test job");
  });
  test("Crew has movie_id", () => {
    const crew = Crew.build({
      name: "Test crew",
      jobTitle: "test job",
      movie_id: 1,
    });
    expect(crew.movie_id).toBe(1);
  });
});