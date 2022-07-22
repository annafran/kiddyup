const fetch = require("cross-fetch");
const mongoose = require("mongoose");
const ParentModel = require("../models/ParentModel");

const interests = [
  "foodie",
  "fitness lover",
  "yoga guru",
  "beauty stylist",
  "bookworm",
  "crafty",
  "green finger",
  "surfy",
  "pet lover",
  "sports fan",
  "dancer",
  "music lover",
  "geek",
  "social butterfly",
  "photographer",
  "gamer",
  "outdoorsy",
  "movie goer",
  "home body",
];

const mongoDbUri = process.env.MONGO_URI || "mongodb://localhost:27017/kiddyup";

mongoose
  .connect(mongoDbUri)
  .then(() => {
    console.log("Connected to mongo db");
    seedDb().then(() => {
      mongoose.connection.close();
      console.log("Cleared and seeded database");
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
      "https://randomuser.me/api/?inc=gender,name,location,gender,email,dob,picture&results=50&noinfo"
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
        children: [
          {
            years: Math.floor(Math.random() * 11),
            months: Math.floor(Math.random() * 13),
          },
          {
            years: Math.floor(Math.random() * 11),
            months: Math.floor(Math.random() * 13),
          },
        ],
        city: profile.location.city,
        coordinates: [
          parseFloat(profile.location.coordinates.latitude),
          parseFloat(profile.location.coordinates.longitude),
        ],
        interests: [
          interests[Math.floor(Math.random() * interests.length)],
          interests[Math.floor(Math.random() * interests.length)],
        ],
      };
    });

    await ParentModel.insertMany(arrayOfProfiles);
  };

  await createProfiles();
};
