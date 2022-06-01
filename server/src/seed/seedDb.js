const fetch = require("cross-fetch");
const mongoose = require("mongoose");
const ParentModel = require("../models/ParentModel");

mongoose
    .connect("mongodb://localhost:27017/kiddyup")
    .then(() => {
        console.log("Connected to mongo db");
        seedDb().then(() => {
            mongoose.connection.close();
        });
    })
    .catch((error) => {
        console.log("Mongoose connection failed");
        console.log(error);
    });

const seedDb = async () => {
    await ParentModel.deleteMany({});

    const getData = async () => {
        const response = await fetch(
            "https://randomuser.me/api/?inc=gender,name,location,email,dob,picture&results=50&noinfo"
        );
        const data = await response.json();
        const profiles = data.results;
        return profiles;
    };

    const createProfiles = async () => {
        const profiles = await getData();
        const arrayOfProfiles = profiles.map((profile) => {
            return {
                firstName: profile.name.first,
                lastName: profile.name.last,
                parentStatus: "update this",
                age: profile.dob.age,
                email: profile.email,
                profilePhoto: profile.picture.medium,
                bio: "update this",
                numberChildren: Math.floor(Math.random() * 6),
                birthdayChildOne: 2021 - 11 - 03,
                neighbourhood: profile.location.city,
                hobbies: ["dancing", "cooking"],
                // coordinates: [profile.coordinates],
            };
        });

        await ParentModel.insertMany(arrayOfProfiles);
    };

    await createProfiles();
};
