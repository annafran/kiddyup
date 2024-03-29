const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const ParentModel = require("./models/ParentModel");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/profiles", async (req, res, next) => {
  try {
    const profiles = await ParentModel.find({}).sort({ createdDate: -1 });
    res.status(200).send(profiles);
  } catch (error) {
    next(error);
  }
});

app.get("/profiles/:id", async (req, res, next) => {
  const { id } = req.params;
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  try {
    if (isValidId) {
      const profile = await ParentModel.findById(id);
      if (profile) {
        return res.status(200).send(profile);
      }

      throw new error("Profile not found");
    } else {
      throw new error("Invalid profile Id");
    }
  } catch (error) {
    if (error === "Profile not found") {
      error.status = 404;
    }
    if (error === "Invalid profile Id") {
      error.status = 400;
    }
    next(error);
  }
});

app.post("/profiles", async (req, res, next) => {
  try {
    const { body } = req;
    const newProfile = new ParentModel(body);
    await newProfile.save();
    return res.status(201).send(newProfile);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
