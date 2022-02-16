require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

const app = express();
app.use(formidable());
app.use(cors());

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

app.get("/", (req, res) => {
  res.json("Welcome on my Marvel API =)");
});

app.get("*", (req, res) => {
  res.status(404).json("This page doesn't exist !");
});

app.listen(3100, (req, res) => {
  console.log("Server started");
});