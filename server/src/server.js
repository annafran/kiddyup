const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config({
  path: __dirname + "/../.env",
  debug: true,
  override: false,
});

const mongoDbUri = process.env.MONGO_URI || "mongodb://localhost:27017/kiddyup";

const port = process.env.PORT || 5001;
mongoose
  .connect(mongoDbUri)
  .then(() => {
    console.log("Connected to mongoose");
  })
  .catch((error) => {
    console.log("Connection to mongoose failed", error);
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
