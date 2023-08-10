const mongoose = require("mongoose")

const SignupSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    emailinput:{
        type: String,
        //wont save this email more than once eg for multiple accounts with same email|
        unique: true 
    },
    role:{
        type: Number
    },
    branch:{
        type: String 
    },
    password:{
        type: String 
    }
})

module.exports = mongoose.model('Signup', SignupSchema)