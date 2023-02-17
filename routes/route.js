const express = require("express");
const route = express.Router();
const {
  getRandomUser,
  createRandomUser,
  getRandomUsers,
  updateRandomUser,
  bulkUpdate,
} = require("../controllers/userController");

route.get("/randoms", getRandomUsers);
route.get("/random", getRandomUser);
route.post("/save", createRandomUser);
route.post("/update", updateRandomUser);
route.post("/bulkupdate", bulkUpdate);

module.exports = route;
