const fetch = require("cross-fetch");
const mongoose = require("mongoose");
const ParentModel = require("../models/ParentModel");

const hobbies = [
    "swimming",
    "dancing",
    "cooking",
    "running",
    "listening to music",
    "hiking",
    "reading books",
    "playing video games",
    "playing the guitar",
    "travelling",
    "writing poems",
    "crochet",
    "knitting",
    "painting",
    "walking",
    "going out with friends",
    "diving",
    "camping",
    "waterskiing",
    "surfing",
    "playing with my kids",
];

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
            "https://randomuser.me/api/?inc=gender,name,location,gender,email,dob,picture&nat=nz&results=50&noinfo"
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
                parentStatus: profile.gender === "male" ? "papa" : "mama",
                age: profile.dob.age,
                email: profile.email,
                profilePhoto: profile.picture.large,
                numberChildren: Math.floor(Math.random() * 6),
                ageChildOne: {
                    years: Math.floor(Math.random() * 11),
                    months: Math.floor(Math.random() * 13),
                },
                city: profile.location.city,
                hobbies: [
                    hobbies[Math.floor(Math.random() * hobbies.length)],
                    hobbies[Math.floor(Math.random() * hobbies.length)],
                ],
                // coordinates: [profile.coordinates],
            };
        });

        await ParentModel.insertMany(arrayOfProfiles);
    };

    await createProfiles();
};
