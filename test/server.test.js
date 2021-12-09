const express = require("express");
const app = require("../server/server");
const supertest = require("supertest");
const request = supertest(app);
const { sequelize } = require("../src/models/movie");
const { Movie } = require("../src/models/movie");
const { Cast } = require("../src/models/cast");
const { Crew } = require("../src/models/crew");

app.use(express.json());
app.use(express.static("../public"));

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe("Movie GET route", () => {
  app.get("/movies", async (request, response) => {});
  test("should return 200", async () => {
    const res = await request.get("/movies");
    console.log(res.status);
    expect(res.status).toBe(200);
  });
});

describe("Movie GET route by id", () => {
  app.get("/movies:id", async (request, response) => {});
  test("should return 200", async () => {
    const res = await request.get("/movies/1");
    console.log(res.status);
    expect(res.status).toBe(200);
  });
});

describe("Movie POST route", () => {
  app.post("/movies", async (request, response) => {
    const movie = request.body;
    const newMovie = await Movie.create(movie);
    response.send(newMovie);
  });
  test("should return 200", async () => {
    const res = await request.post("/movies").send({
      name: "test movie",
      genre: "test genre",
      yearReleased: 1990,
    });
    console.log(res.status);
    console.log(res.body);
    expect(res.status).toBe(200);
  });
});

describe("Movie PUT route", () => {
  app.put("/movies:id", async (request, response) => {
    const movie = request.body;
    let updatedMovie = await Movie.update(movie, {
      where: { id: request.params.id },
    });
    response.send("Updated!");
  });
  test("should return 200", async () => {
    const put = await request.put("/movies/1").send({
      name: "test movie 2",
      genre: "test genre 2",
      yearReleased: 1992,
    });
    const get = await request.get("/movies/1");
    console.log(get.status);
    console.log(get.body);
    expect(get.status).toBe(200);
  });

  describe("Movie DELETE route", () => {
    app.delete("/movies:id", async (request, response) => {
      const deletedMovie = await Movie.destroy({
        where: { id: request.params.id },
      });
      let movieDeleteReport = "Deletion failed";
      if (deletedMovie) {
        movieDeleteReport = "Deletion successful";
      }
      response.send(movieDeleteReport);
    });
    test("should return 200", async () => {
      const deleteMovie = await request.delete("/movies/1");
      const get = await request.get("/movies/1");
      console.log(deleteMovie.status);
      console.log(get.body);
      expect(deleteMovie.status).toBe(200);
    });
  });
});

describe("Cast GET route", () => {
  app.get("/cast", async (request, response) => {});
  test("should return 200", async () => {
    const res = await request.get("/cast");
    console.log(res.status);
    expect(res.status).toBe(200);
  });
});

describe("Cast GET route by id", () => {
  app.get("/cast:id", async (request, response) => {});
  test("should return 200", async () => {
    const res = await request.get("/cast/1");
    console.log(res.status);
    expect(res.status).toBe(200);
  });
});

describe("Cast POST route", () => {
  app.post("/cast", async (request, response) => {
    const cast = request.body;
    const newCast = await Cast.create(cast);
    response.send(newCast);
  });
  test("should return 200", async () => {
    const res = await request.post("/cast").send({
      name: "test movie",
      role: "test role",
    });
    console.log(res.status);
    console.log(res.body);
    expect(res.status).toBe(200);
  });
});

describe("Cast PUT route", () => {
  app.put("/cast:id", async (request, response) => {
    const cast = request.body;
    let updatedCast = await Cast.update(cast, {
      where: { id: request.params.id },
    });
    response.send("Updated!");
  });
  test("should return 200", async () => {
    const put = await request.put("/cast/1").send({
      name: "test cast 2",
      role: "test role 2",
    });
    const get = await request.get("/cast/1");
    console.log(get.status);
    console.log(get.body);
    expect(get.status).toBe(200);
  });

  describe("Cast DELETE route", () => {
    app.delete("/cast:id", async (request, response) => {
      const deletedCast = await Cast.destroy({
        where: { id: request.params.id },
      });
      let castDeleteReport = "Deletion failed";
      if (deletedCast) {
        castDeleteReport = "Deletion successful";
      }
      response.send(castDeleteReport);
    });
    test("should return 200", async () => {
      const deleteCast = await request.delete("/cast/1");
      const get = await request.get("/cast/1");
      console.log(deleteCast.status);
      console.log(get.body);
      expect(deleteCast.status).toBe(200);
    });
  });
});

describe("Crew GET route", () => {
  app.get("/crew", async (request, response) => {});
  test("should return 200", async () => {
    const res = await request.get("/crew");
    console.log(res.status);
    expect(res.status).toBe(200);
  });
});

describe("Crew GET route by id", () => {
  app.get("/crew:id", async (request, response) => {});
  test("should return 200", async () => {
    const res = await request.get("/crew/1");
    console.log(res.status);
    expect(res.status).toBe(200);
  });
});

describe("Crew POST route", () => {
  app.post("/crew", async (request, response) => {
    const crew = request.body;
    const newCrew = await Crew.create(crew);
    response.send(newCrew);
  });
  test("should return 200", async () => {
    const res = await request.post("/crew").send({
      name: "test crew",
      jobTitle: "test title",
    });
    console.log(res.status);
    console.log(res.body);
    expect(res.status).toBe(200);
  });
});

describe("Crew PUT route", () => {
  app.put("/crew:id", async (request, response) => {
    const crew = request.body;
    let updatedCrew = await Crew.update(crew, {
      where: { id: request.params.id },
    });
    response.send("Updated!");
  });
  test("should return 200", async () => {
    const put = await request.put("/crew/1").send({
      name: "test crew 2",
      jobTitle: "test title 2",
    });
    const get = await request.get("/crew/1");
    console.log(get.status);
    console.log(get.body);
    expect(get.status).toBe(200);
  });

  describe("Crew DELETE route", () => {
    app.delete("/crew:id", async (request, response) => {
      const deletedCrew = await Crew.destroy({
        where: { id: request.params.id },
      });
      let crewDeleteReport = "Deletion failed";
      if (deletedCrew) {
        crewDeleteReport = "Deletion successful";
      }
      response.send(crewDeleteReport);
    });
    test("should return 200", async () => {
      const deleteCrew = await request.delete("/crew/1");
      const get = await request.get("/crew/1");
      console.log(deleteCrew.status);
      console.log(get.body);
      expect(deleteCrew.status).toBe(200);
    });
  });
});

afterAll(async () => {
  await sequelize.sync({ force: true });
  sequelize.close();
});
