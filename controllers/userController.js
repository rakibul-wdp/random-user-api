const fs = require("fs");

const getRandomUsers = (req, res) => {
  res.send("all random users");
};

const getRandomUser = (req, res) => {
  res.send("Hello function user");
};

const createRandomUser = (req, res) => {
  const { id, gender, name, contact, address, photoUrl } = req.body;
  if ((id, gender, name, contact, address, photoUrl)) {
    const user = { id, gender, name, contact, address, photoUrl };
    fs.writeFile(
      "../users/users.json",
      {
        id,
        gender,
        name,
        contact,
        address,
        photoUrl,
      },
      (err) => {
        console.log(err);
      }
    );
  }
};

const updateRandomUser = (req, res) => {
  res.send('update random user data');
};

module.exports = { getRandomUsers, getRandomUser, createRandomUser, updateRandomUser };
