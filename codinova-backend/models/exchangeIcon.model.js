const mongoose = require("mongoose");

const exchangeIconSchema = new mongoose.Schema({
    exchange_id : {
        type : String,
        required: false
    },
    url : {
        type : String,
        required: false
    }
   
},
{timeStamps:true,versionKey:false})

const ExchangeIconModel = new mongoose.model("ExchangeIcon",exchangeIconSchema)
module.exports  = ExchangeIconModel;