const express = require("express");
const route = express.Router();
const { getRandomUser } = require("../controllers/userController");

route.get("/random", getRandomUser);

module.exports = route;