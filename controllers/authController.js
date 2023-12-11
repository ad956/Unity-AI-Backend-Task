const jwt = require("jsonwebtoken");
const User = require("../models/user");

function register(req, res) {
  const { username, password, type } = req.body;
  const user = new User({ username, password, type });

  user
    .save()
    .then(() => res.json({ message: "User registered successfully" }))
    .catch((err) => res.status(400).json({ message: err.message }));
}

function login(req, res) {
  const { username, password } = req.body;

  User.findOne({ username, password })
    .then((user) => {
      if (user) {
        const token = jwt.sign(
          { username, type: user.type },
          process.env.ACCESS_TOKEN
        );
        res.json({ token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

module.exports = { register, login };
