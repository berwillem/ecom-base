const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const routes = require("./routes/index");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);
// access log
const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
app.use(morgan("dev", { stream: logStream }));
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

mongoose
  .connect(process.env.DB_URI)
  .then(console.log("succefuly connected to db"))
  .catch((err) => console.log(err));
