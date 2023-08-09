const mongoose = require("mongoose")

const ClinicSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    emailinput:{
        type: String,
        //wont save this email more than once eg for multiple accounts with same email|
        unique: true 
    },
    phoneinput:{
        type: Number
    },
    niniput:{
        type: String 
    },
    carType:{
        type: String 
    },
    modelinput:{
        type: String 
    },
    colorinput:{
        type: String 
    },
    numberplate:{
        type: String 
    },
    services:{
        type: String 
    },
    cost:{
        type: String 
    },
    date:{
        type: String 
    },
    time:{
        type: String 
    },
    depart:{
        type: String 
    }
})

module.exports = mongoose.model('Clinic', ClinicSchema)