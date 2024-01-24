const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const tokenKey = process.env.JWT_TOKEN_KEY;
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "token required" });

  try {
    const decoded = jwt.verify(token, tokenKey);
    req.user = decoded;
  } catch {
    return res.status(401).json({ message: "invalid token" });
  }

  return next();
};

module.exports = verifyToken;
