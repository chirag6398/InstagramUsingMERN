const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const Authenticate = async function (req, res, next) {
  try {
    const token = req.cookie.jwtoken;
    const verifyToken = jwt.verify({ token }, process.env.SECRET_KEY);
    const userExist = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (userExist) {
      req.token = token;
      req.UserID = req.userExist._id;
      req.UserEmail = req.userExist.email;
      next();
    } else {
      console.log("user not login");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = Authenticate;
