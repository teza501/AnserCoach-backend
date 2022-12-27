const mongoose = require("mongoose");

const CohortRegisteredSchema = new mongoose.Schema({
    courseType: {
        type: String,
    },
    name: {
        type: String,
    },
    parentName: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    sClass: {
        type: Number,
    },
    otp: {
        type: Number,
    },
    board:{
        type: String
    }
});

module.exports = mongoose.model("CohortRegisteredUser", CohortRegisteredSchema);
