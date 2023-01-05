const fs = require("fs");

const getRandomUser = (req, res) => {
  res.send("Hello function user");
};

const createRandomUser = (req, res) => {
  console.log(req.body);
  const { id, gender, name, contact, address, photoUrl } = req.body;
  if ((id, gender, name, contact, address, photoUrl)) {
    fs.appendFile(
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

module.exports = { getRandomUser, createRandomUser };
