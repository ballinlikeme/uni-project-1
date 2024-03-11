import axios from "axios";

const SECRET_KEY = "c0729e2d53054614960e03cdff0a68d4";
const REST_API_URL = "https://api.twelvedata.com";
const API_TOKEN = "lh7mkfTqOGClhh2fGy6Mw7yTuOH0FZaZcgoKlpOI";

export async function getStocksPrice() {
  const symbols = [
    "YUMC",
    "RHHBY",
    "BTI",
    "IMBBY",
    "RBGLY",
    "PFE",
    "BUD",
    "PII",
    "ABEV",
    "EL",
  ];

  const prices = await Promise.all(
    symbols.map(async (symbol) => {
      const response = await axios.get(
        `https://api.stockdata.org/v1/data/quote?symbols=${symbol}}&api_token=${API_TOKEN}`
      );

      return response.data;
    })
  );

  return prices;
}
