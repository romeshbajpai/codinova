const key = "CD3C7DF3-D84F-49FC-B99F-6721BAFD381A";
const  axios = require("axios");
const ExchangeDataModel = require("../models/exchangeData.model");

const congif = {
    headers: {
        "X-CoinAPI-Key" : "CD3C7DF3-D84F-49FC-B99F-6721BAFD381A",
    },
  };
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://rest.coinapi.io/v1/exchanges`,
        congif
      );
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const addExchangeData = async (req,res)=>{
    try {
      const ExcahngeRes = await getData();
      await ExchangeDataModel.insertMany(ExcahngeRes);
      return res.status(200).send(ExcahngeRes)
    } catch (error) {
        return res.status(500).send(error.message)
    }
  }
  module.exports = addExchangeData;