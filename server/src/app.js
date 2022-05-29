const express = require("express");
const app = express();
const cors = require("cors");
const ParentModel = require("./models/ParentModel");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
