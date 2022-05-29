const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config({
    path: __dirname + "/../.env",
    debug: true,
    override: false,
});

const port = process.env.PORT || 5001;
mongoose
    .connect("mongodb://localhost:27017/bubup")
    .then(() => {
        console.log("Connected to mongoose");
    })
    .catch((err) => {
        console.log("Connection to mongoose failed", err);
    });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
