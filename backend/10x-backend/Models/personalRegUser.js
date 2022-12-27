const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonalRegSchema = new mongoose.Schema({
   
    name: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    subject: {
        type: Boolean,
        required: true,
    },
    otp: {
        type: Number,
    },
    class: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:false,
    }
});

module.exports = mongoose.model("personalRegistered", PersonalRegSchema);
