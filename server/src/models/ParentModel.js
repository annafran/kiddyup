const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChildSchema = new Schema({
    years: { type: Number, min: 0 },
    months: { type: Number, min: 0 },
});

const ParentSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        parentStatus: { type: String, required: true },
        age: { type: Number, required: true },
        email: { type: String, required: true },
        profilePhoto: { type: String, required: true },
        children: [ChildSchema],
        city: { type: String, required: true },
        interests: { type: [String] },
        // coordinates: {
        //     type: [Number, Number],
        //     index: "2d",
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
