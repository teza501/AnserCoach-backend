const mongoose = require("mongoose");

const cohortNotesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("CohortNotes", cohortNotesSchema);