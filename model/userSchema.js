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

const User = monsoose.Model("User", userSchema);
module.exports = User;
