const mongoose = require("mongoose");

const exchangedataSchema = new mongoose.Schema({
    exchange_id : {
        type : String,
        required: false
    },
    website : {
        type : String,
        required: false
    },
    name : {
        type : String,
        required: false
    },
    data_symbols_count : {
        type : Number,
        required: false
    },
    volume_1hrs_usd : {
        type : Number,
        required: false
    },
    volume_1day_usd : {
        type : Number,
        required: false
    },
    volume_1mth_usd : {
        type : Number,
        required: false
    },
    data_trade_start : {
        type : Date,
        required: false
    },
    data_trade_end : {
        type : Date,
        required: false
    },
    data_quote_start : {
        type : Date,
        required: false
    },
    data_quote_end : {
        type : Date,
        required: false
    },
    data_orderbook_start : {
        type : Date,
        required: false
    },
    data_orderbook_end : {
        type : Date,
        required: false
    },

},
{timeStamps:true,versionKey:false})

const ExchangeDataModel = new mongoose.model("ExchangeData",exchangedataSchema)
module.exports  = ExchangeDataModel;