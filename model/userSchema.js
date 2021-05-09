const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const monsoose = require("mongoose");
const userSchema = new monsoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = monsoose.model("User", userSchema);
module.exports = User;
