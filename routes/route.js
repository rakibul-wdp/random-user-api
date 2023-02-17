const express = require("express");
const route = express.Router();
const {
  getRandomUser,
  createRandomUser,
  getRandomUsers,
} = require("../controllers/userController");

route.get("/randoms", getRandomUsers);
route.get("/random", getRandomUser);
route.post("/save", createRandomUser);

module.exports = route;
