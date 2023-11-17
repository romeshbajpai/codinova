const key = "CD3C7DF3-D84F-49FC-B99F-6721BAFD381A";
const axios = require("axios");
const ExchangeIconModel = require("../models/exchangeIcon.model");

const congif = {
  headers: {
    "X-CoinAPI-Key": "CD3C7DF3-D84F-49FC-B99F-6721BAFD381A",
  },
};
const getData = async () => {
  try {
    const res = await axios.get(
      `https://rest.coinapi.io/v1/exchanges/icons/32`,
      congif
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


exports.addExchangeIcon = async (req, res) => {
  try {
    const ExcahngeIconRes = await getData();
    await ExchangeIconModel.insertMany(ExcahngeIconRes);
    return res.status(200).send(ExcahngeIconRes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


exports.getExchangeIcon = async (req, res) => {
  try {
    const ExchangeIconRes = await ExchangeIconModel.aggregate([
      {
        $lookup: {
          from: "exchangedatas",
          localField: "exchange_id",
          foreignField: "exchange_id",
          as: "data"
        }
      },
      {
        $unwind:"$data"
      },
      {
        $project: {
          _id: 0,
          exchange_id: 1,
          url: 1,
          website: "$data.website",
          name: "$data.name",
          data_symbols_count: "$data.data_symbols_count",
          volume_1hrs_usd: "$data.volume_1hrs_usd",
          volume_1day_usd: "$data.volume_1day_usd",
          volume_1mth_usd: "$data.volume_1mth_usd",
          data_trade_start: "$data.data_trade_start",
          data_trade_end: "$data.data_trade_end",
          data_quote_start: "$data.data_quote_start",
          data_quote_end: "$data.data_quote_end",
          data_orderbook_start: "$data.data_orderbook_start",
          data_orderbook_end:"$data.data_orderbook_end"
        }
      },
      {
        $sort: { volume_1day_usd: -1 }
      }
    ])
    return res.status(200).send(ExchangeIconRes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

