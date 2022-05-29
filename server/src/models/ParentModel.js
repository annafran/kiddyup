const mongoose = require("mongoose");

const { Schema } = mongoose;

const ParentSchema = new Schema({
    firstName: { type: String, required: true },
});

const ParentModel = mongoose.model("Parent", ParentSchema);

module.exports = ParentModel;
