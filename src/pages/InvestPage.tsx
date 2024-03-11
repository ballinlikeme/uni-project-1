import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Image } from "@mui/icons-material";
// import abinbev from "../assets/abinbev.jpg";
// import ambev from "../assets/ambev.png";
// import estee from "../assets/estee.png";
// import imperial_brands from "../assets/imperial_brands.png";
// import pfizer from "../assets/pfizer.jpg";
// import polaris from "../assets/polaris.png";
// import reckitt from "../assets/reckitt.png";
// import roche from "../assets/roche.jpg";
// import tobacco from "../assets/tobacco.png";
// import yum_china from "../assets/yum_china.png";

/**
 * Если кто-то читает этот код,
 * в чем я очень сильно сомневаюсь,
 * знай, что это приложение это полный пиздец.
 * Да и ты сам долбаеб еще тот. Иди нахуй короч :)
 */

export const InvestPage: React.FC = () => {
  return (
    <Box py={5} width="100%" height="100%">
      <Paper elevation={4}>
        <Box p={3}>
          <Stack direction="column" gap={3}>
            <Typography variant="h6">
              Here is a curated list of companies, recommended for investment by
              AI algorithm
            </Typography>
            <Stack direction="row" flexWrap="wrap">
              {data.map((val) => (
                <Stack key={val.id} flex="0 0 50%">
                  <Typography variant="body1">{val.fullName}</Typography>
                  <Typography variant="subtitle2">{val.symbol}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

const data = [
  {
    id: 1,
    symbol: "YUMC",
    fullName: "Yum China Holdings Inc",
    price: "$38.67",
    image: "../assets/yum_china.png",
  },
  {
    id: 2,
    symbol: "RHHBY",
    fullName: "Roche Holding AG ADR",
    price: "$30.24",
    image: "../assets/roche.jpg",
  },
  {
    id: 3,
    symbol: "BTI",
    fullName: "British American Tobacco ",
    price: "$29.60",
    image: "../assets/tobacco.png",
  },
  {
    id: 4,
    symbol: "IMBBY",
    fullName: "Imperial Brands PLC ADR",
    price: "$22.03",
    image: "../assets/imperial_brands.png",
  },
  {
    id: 5,
    symbol: "RBGLY",
    fullName: "Reckitt Benckiser Group PLC ADR",
    price: "$10.79",
    image: "../assets/reckitt.png",
  },
  {
    id: 6,
    symbol: "PFE",
    fullName: "Pfizer Inc",
    price: "$26.66",
    image: "../assets/pfizer.jpg",
  },
  {
    id: 7,
    symbol: "BUD",
    fullName: "Anheuser-Busch InBev SA/NV ADR",
    price: "$59.96",
    image: "../assets/abinbev.jpg",
  },
  {
    id: 8,
    symbol: "PII",
    fullName: "Polaris Inc",
    price: "$97.27",
    image: "../assets/polaris.png",
  },
  {
    id: 9,
    symbol: "ABEV",
    fullName: "Ambev SA ADR",
    price: "$2.41",
    image: "../assets/ambev.png",
  },
  {
    id: 10,
    symbol: "EL",
    fullName: "The Estee Lauder Companies Inc Class A",
    price: "$144.43",
    image: "../assets/estee.png",
  },
];
