const bcrypt = require("bcryptjs");
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
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = monsoose.model("User", userSchema);
module.exports = User;
