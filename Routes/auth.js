const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../model/userSchema");
const Authenticate = require("../middleware/Authenticate");
router.get("/", (req, res) => {
  res.send("hello auth");
});

router.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("plz fill all fields");
      return res
        .status(422)
        .json({ error: "plz fill all fields", status: 422 });
    } else {
      const userExist = await User.findOne({ email });
      if (userExist) {
        const isMatch = await bcrypt.compare(password, userExist.password);
        if (isMatch) {
          const token = await userExist.generateAuthToken();
          console.log("token : ", token);
          res.cookie("jwttoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true,
          });

          return res
            .status(201)
            .json({ message: "user login successfully", status: 201 });
        } else {
          console.log("password does not match");
          return res
            .status(422)
            .json({ error: "password does not match", status: 422 });
        }
      } else {
        console.log("user not exist");
        return res.status(422).json({ error: "user not exist", status: 422 });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      console.log("not filled all fields");
      return res
        .status(422)
        .json({ error: "pls filled all fields", status: 422 });
    } else {
      const existUser = await User.findOne({ email });
      if (existUser) {
        console.log("user exist");
        return res
          .status(422)
          .json({ error: "this email already exist", status: 422 });
      } else {
        const userRegisteration = new User({ email, password });

        const status = await userRegisteration.save();
        if (status) {
          return res
            .status(201)
            .json({ message: "user signup successfully", status: 201 });
        } else {
          console.log("user not registered");
          return res
            .status(501)
            .json({ error: "internal server error", status: 501 });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/logout", Authenticate, (req, res) => {
  res.clearCookie("jwttoken", { path: "/" });
  res.status(201).json({ message: "user logout successefully", status: 201 });
});

module.exports = router;
