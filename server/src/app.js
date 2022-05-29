const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const ParentModel = require("./models/ParentModel");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/profiles", async (req, res) => {
    const profiles = await ParentModel.find({});
    res.send(`Here are the profiles: ${profiles}`);
});

app.post("/profiles", async (req, res) => {
    const body = req.body;
    const newProfile = new ParentModel(body);
    await newProfile.save();
    res.send(newProfile);
});

module.exports = app;
