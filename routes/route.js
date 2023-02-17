const express = require("express");
const route = express.Router();
const {
  getRandomUser,
  createRandomUser,
  getRandomUsers,
  updateRandomUser,
  bulkUpdate,
  deleteUser,
} = require("../controllers/userController");

route.get("/randoms", getRandomUsers);
route.get("/random", getRandomUser);
route.post("/save", createRandomUser);
route.patch("/update", updateRandomUser);
route.patch("/bulkupdate", bulkUpdate);
route.delete("/delete", deleteUser);

module.exports = route;
