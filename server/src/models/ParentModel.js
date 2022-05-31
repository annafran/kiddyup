const mongoose = require("mongoose");
const { Schema } = mongoose;

const ParentSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        parentStatus: { type: String, required: true },
        birthday: { type: Date, required: true },
        email: { type: String, required: true },
        profilePhoto: { type: String, required: true },
        bio: { type: String, required: true },
        numberChildren: { type: Number, required: true },
        birthdayChildOne: { type: Date },
        birthdayChildTwo: { type: Date },
        birthdayChildThree: { type: Date },
        birthdayChildFour: { type: Date },
        neighbourhood: { type: String, required: true },
        hobbies: { type: [String] },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            },
        },
    }
);

const ParentModel = mongoose.model("Parent", ParentSchema);

module.exports = ParentModel;
