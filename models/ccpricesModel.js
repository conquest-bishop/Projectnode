const mongoose = require("mongoose")

const CpriceSchema = new mongoose.Schema({
    tyre:{
        type: String,
        
    },
    battery:{
        type: String,
        
    }

})

module.exports = mongoose.model('Cprice', CpriceSchema)