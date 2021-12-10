const express = require("express");
const path = require("path");
const { Movie } = require("../src/models/movie");
const { Cast } = require("../src/models/cast");
const { Crew } = require("../src/models/crew");
const { check, validationResult } = require("express-validator");

const app = express();
const port = 3000;
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/movies", async (req, res) => {
  const allMovies = await Movie.findAll();
  res.json(allMovies);
});

app.get("/movies/:id", async (req, res) => {
  const movie = await Movie.findByPk(req.params.id);
  res.json(movie);
});

app.post("/movies", async (req, res) => {
  let newMovie = await Movie.create(req.body);
  res.json(newMovie);
});

app.put("/movies/:id", async (req, res) => {
  let updatedMovie = await Movie.update(req.body, {
    where: { id: req.params.id },
  });
  res.send("Updated!");
});

app.delete("/movies/:id", async (req, res) => {
  const deletedMovie = await Movie.destroy({
    where: { id: req.params.id },
  });
  let movieDeleteReport = "Deletion failed";
  if (deletedMovie) {
    movieDeleteReport = "Deletion successful";
  }
  res.send(movieDeleteReport);
});

app.get("/cast", async (req, res) => {
  const allCast = await Cast.findAll();
  res.json(allCast);
});

app.get("/cast/:id", async (req, res) => {
  const cast = await Cast.findByPk(req.params.id);
  res.json(cast);
});

app.post("/cast", async (req, res) => {
  let newCast = await Cast.create(req.body);
  res.json(newCast);
});

app.put("/cast/:id", async (req, res) => {
  let updatedCast = await Cast.update(req.body, {
    where: { id: req.params.id },
  });
  res.send("Updated!");
});

app.delete("/cast/:id", async (req, res) => {
  const deletedCast = await Cast.destroy({
    where: { id: req.params.id },
  });
  let castDeleteReport = "Deletion failed";
  if (deletedCast) {
    castDeleteReport = "Deletion successful";
  }
  res.send(castDeleteReport);
});

app.get("/crew", async (req, res) => {
  const allCrew = await Crew.findAll();
  res.json(allCrew);
});

app.get("/crew/:id", async (req, res) => {
  const crew = await Crew.findByPk(req.params.id);
  res.json(crew);
});

app.post("/crew", async (req, res) => {
  let newCrew = await Crew.create(req.body);
  res.json(newCrew);
});

app.put("/crew/:id", async (req, res) => {
  let updatedCrew = await Crew.update(req.body, {
    where: { id: req.params.id },
  });
  res.send("Updated!");
});

app.delete("/crew/:id", async (req, res) => {
  const deletedCrew = await Crew.destroy({
    where: { id: req.params.id },
  });
  let crewDeleteReport = "Deletion failed";
  if (deletedCrew) {
    crewDeleteReport = "Deletion successful";
  }
  res.send(crewDeleteReport);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
