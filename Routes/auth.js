const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send("hello auth");
});
router.post("/register", async (req, res) => {
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

module.exports = router;
