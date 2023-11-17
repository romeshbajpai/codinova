const express = require("express");
const connect = require("./configs/db");
const  exchangeRoute = require("./routes/exchangeData.route")
const exchangeIconRoute = require("./routes/exchangeIcon.route")
const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json())
app.use("/Api/v2/coinApi",exchangeRoute)
app.use("/Api/v2/coinApi/icon",exchangeIconRoute)
app.listen(5000,async ()=>{
    try {
        await connect();
        console.log(`your application is running at http://localhost:5000`);
    } catch (error) {
        console.log(error);
    }
})