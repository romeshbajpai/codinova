const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://romeshbajpai19:Romesh123@cluster0.pasu3yo.mongodb.net/";
//'mongodb://0.0.0.0:27017/coin'
const connect = async ()=>{
    try {
         return  await mongoose.connect(MONGO_URL);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;