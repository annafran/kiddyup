const fetch = require("cross-fetch");
const mongoose = require("mongoose");
const ParentModel = require("../models/ParentModel");

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

    const getData = async () => {
        const response = await fetch(
            "https://randomuser.me/api/?inc=gender,name,location,email,dob,phone,picture&results=50&noinfo"
        );
        const data = await response.json();
        const profiles = data.results;
        return profiles;
    };

    const createProfiles = async () => {
        const profiles = await getData();
        const arrayOfProfiles = profiles.map((profile) => {
            return {
                firstName: `${profile.name.first}`,
                hobby: "test",
            };
        });

        console.log(arrayOfProfiles);
        for (let person of arrayOfProfiles) {
            const parent = new ParentModel(person);
            await parent.save();
        }
    };
    createProfiles();
};

seedDb().then(() => {
    mongoose.connection.close();
});
