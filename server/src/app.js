const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const ParentModel = require("./models/ParentModel");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/profiles", async (req, res, next) => {
    try {
        const profiles = await ParentModel.find({});
        res.status(200).send(profiles);
    } catch (error) {
        next(error);
    }
});

app.get("/profiles/:id", async (req, res) => {
    const { id } = req.params;
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (isValidId) {
        const profile = await ParentModel.findById(id);
        if (profile) {
            return res.send(profile);
        }

        return res.status(404).send({ message: "Profile not found" });
    } else {
        res.status(400).send({ message: "Invalid profile Id" });
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
