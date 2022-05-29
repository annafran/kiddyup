const mongoose = require("mongoose");

const { Schema } = mongoose;

const ParentSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String },
    age: { type: Number },
    numberChildren: { type: Number, required: true },
    ageChildOne: { type: Number },
    ageChildTwo: { type: Number },
    genderChildOne: { type: String },
    genderChildTwo: { type: String },
    hobbies: [{ type: String }],
    location: {
        lat: { type: String, required: true },
        long: { type: String, required: true },
    },
});

const ParentModel = mongoose.model("Parent", ParentSchema);

module.exports = ParentModel;
