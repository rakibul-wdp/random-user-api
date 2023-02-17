const fs = require("fs");

const getUsers = () => {
  const data = fs.readFileSync(__dirname + "/../users.json");
  const users = JSON.parse(data);
  return users;
};

const getRandomUsers = (req, res) => {
  if (req.query.num === undefined) {
    const users = getUsers();
    console.log("hit", users);
    res.send(users);
  } else {
    const users = getUsers();
    const usersToBeShown = req.query.num;
    const result = users.splice(0, usersToBeShown);
    console.log("hit with query");
    res.send(result);
  }
};

const getRandomUser = (req, res) => {
  const users = getUsers();
  const randomUser = users[Math.floor(Math.random() * users.length)];
  res.send(randomUser);
};

const createRandomUser = (req, res) => {
  const user = req.body;
  const { id, gender, name, contact, address, photoUrl } = user;
  if (!id || !gender || !name || !contact || !address || !photoUrl) {
    res.send("Missing properties or values");
  } else {
    const users = getUsers();
    users.push(user);
    fs.writeFileSync("users.json", JSON.stringify(users));
    res.status(200).send("Success");
  }
};

const updateRandomUser = (req, res) => {
  res.send("update random user data");
};

module.exports = {
  getRandomUsers,
  getRandomUser,
  createRandomUser,
  updateRandomUser,
};
