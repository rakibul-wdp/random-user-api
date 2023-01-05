const express = require("express");
const route = express.Router();
const { getRandomUser, createRandomUser } = require("../controllers/userController");

route.get("/random", getRandomUser);
route.post('/save', createRandomUser);

module.exports = route;