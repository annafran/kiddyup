const mongoose = require("mongoose");
const { Schema } = mongoose;

const ParentSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        parentStatus: { type: String, required: true },
        age: { type: Number, required: true },
        email: { type: String, required: true },
        profilePhoto: { type: String, required: true },
        numberChildren: { type: Number, required: true },
        ageChildOne: { years: { type: Number }, months: { type: Number } },
        ageChildTwo: { years: { type: Number }, months: { type: Number } },
        ageChildThree: { years: { type: Number }, months: { type: Number } },
        ageChildFour: { years: { type: Number }, months: { type: Number } },
        city: { type: String, required: true },
        hobbies: { type: [String] },
        // coordinates: {
        //     type: [String],
        //     required: true,
        // },
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
