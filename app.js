const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");
dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require("./Routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app listen at port ${PORT}`);
});
