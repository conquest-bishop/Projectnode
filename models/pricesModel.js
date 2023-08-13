const mongoose = require("mongoose")

const PriceSchema = new mongoose.Schema({
    day:{
        type: String,
        
    },
    night:{
        type: String,
        
    },
    less:{
        type: String,
        
    }

})

module.exports = mongoose.model('Price', PriceSchema)