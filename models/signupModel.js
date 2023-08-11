const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")


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
        type: String
    },
    branch:{
        type: String 
    },
    password:{
        type: String 
    }
})

SignupSchema.plugin(passportLocalMongoose,{usernameField: 'emailinput'})

module.exports = mongoose.model('Register', SignupSchema)