const mongoose = require("mongoose");
const ParentModel = require("../models/ParentModel");
const { names, bios, photos, status } = require("./seedHelpers");

mongoose
    .connect("mongodb://localhost:27017/kiddyup")
    .then(() => {
        console.log("Connected to mongo db");
    })
    .catch((error) => {
        console.log("Mongoose connection failed");
        console.log(error);
    });

const seedDb = async () => {
    await ParentModel.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random20 = Math.floor(Math.random() * 20);
        const profile = new ParentModel({
            firstName: `${random20(firstName)}`,
            parentStatus: `${random20(status)}`,
        });

        await profile.save();
    }
};
seedDb().then(() => {
    mongoose.connection.close();
});
