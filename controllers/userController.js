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
  console.log(typeof JSON.parse(req.body.id));
  const newInfo = req.body;
  const userId = req.query.id;
  const users = getUsers();
  const parsedId = JSON.parse(req.query.id);

  if (typeof parsedId == "object") {
    return res.send("provide a number in the query");
  }

  const foundUser = users.find(
    (user) => parseInt(user.id) === parseInt(userId)
  )

  if (!foundUser) {
    res.send("no user found");
  } else {
    if (newInfo.id) {
      foundUser.id = newInfo.id;
    } else if (newInfo.gender) {
      foundUser.gender = newInfo.gender;
    } else if (newInfo.name) {
      foundUser.name = newInfo.name;
    } else if (newInfo.contact) {
      foundUser.contact = newInfo.contact;
    } else if (newInfo.address) {
      foundUser.address = newInfo.address;
    } else if (newInfo.photoUrl) {
      foundUser.photoUrl = newInfo.photoUrl;
    }
  }

  fs.writeFileSync(__dirname + "/../users.json", JSON.stringify(users));
  res.status(200).send("success");
};

module.exports = {
  getRandomUsers,
  getRandomUser,
  createRandomUser,
  updateRandomUser,
};
