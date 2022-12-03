const fs = require("fs");

const getUsers = () => {
  const data = fs.readFileSync(__dirname + "/../users.json");
  const users = JSON.parse(data);
  return users;
};

const getRandomUsers = (req, res) => {
  res.send("all random users");
};

const getRandomUser = (req, res) => {
  res.send("Hello function user");
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
