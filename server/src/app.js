const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const ParentModel = require("./models/ParentModel");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/profiles", async (req, res) => {
    try {
        const profiles = await ParentModel.find({});
        res.status(200).send(`Here are the profiles: ${profiles}`);
    } catch (error) {
        next(error);
    }
});

app.post("/profiles", async (req, res, next) => {
    try {
        const body = req.body;
        const newProfile = new ParentModel(body);
        await newProfile.save();
        res.status(201).send(newProfile);
    } catch (error) {
        error.status = 400;
        next(error);
    }
});

module.exports = app;
