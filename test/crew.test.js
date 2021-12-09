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
});
