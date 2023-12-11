const jwt = require("jsonwebtoken");

const secretKey = process.env.ACCESS_TOKEN;

function authenticate(req, res, next) {
  const token = req.header("Authorization").split(" ")[1];

  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = { authenticate };
