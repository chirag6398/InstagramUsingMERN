const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;
    console.log(token);
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyToken, "verify");
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    console.log(1);
    console.log(rootUser, "rootuser");
    if (!rootUser) {
      throw new Error("user not found");
    }
    console.log(2);
    console.log(rootUser);
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    console.log(3);
    next();
  } catch (err) {
    res.status(401).send("unauthorized: no token available");
  }
};

module.exports = Authenticate;
