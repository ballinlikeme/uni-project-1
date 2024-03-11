import React from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { AllocationManager } from "../components/pages/PercentagePage/AllocationManager";
import { BalanceManager } from "../components/pages/PercentagePage/BalanceManager";
import { CardManager } from "../components/pages/PercentagePage/CardsManager";
import { Charts } from "../components/pages/PercentagePage/Charts";

export const PercentagePage: React.FC = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={5}>
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <Paper elevation={4} sx={{ height: "100%" }}>
              <Charts />
            </Paper>
          </Grid>
          <Grid item sm={6}>
            <Stack gap={4}>
              <Paper elevation={4}>
                <AllocationManager />
              </Paper>
              <Paper elevation={4}>
                <Box p={3}>
                  <Stack gap={3}>
                    <Paper elevation={4}>
                      <CardManager />
                    </Paper>
                    <Paper elevation={4}>
                      <BalanceManager />
                    </Paper>
                    {/* <Paper elevation={4}>
                    <Box p={2}>Content 3</Box>
                  </Paper> */}
                  </Stack>
                </Box>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
        <Grid container mt={2} spacing={4}>
          <Grid item xs={6}>
            <Paper elevation={4}>
              <Box p={3}>
                <Stack gap={2}>
                  <Typography variant="h6" fontSize="18px">
                    Here is a curated list of companies, recommended for
                    investment by AI algorithm
                  </Typography>
                  <Stack>
                    {data.map((val) => (
                      <Stack key={val.id}>
                        <Typography>
                          {val.id}. {val.fullName} ({val.price})
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const data = [
  {
    id: 1,
    symbol: "YUMC",
    fullName: "Yum China",
    price: "$38.67",
    image: "../assets/yum_china.png",
  },
  {
    id: 2,
    symbol: "RHHBY",
    fullName: "Roche Holding",
    price: "$30.24",
    image: "../assets/roche.jpg",
  },
  {
    id: 3,
    symbol: "BTI",
    fullName: "British American Tobacco",
    price: "$29.60",
    image: "../assets/tobacco.png",
  },
  {
    id: 4,
    symbol: "IMBBY",
    fullName: "Imperial Brands",
    price: "$22.03",
    image: "../assets/imperial_brands.png",
  },
  {
    id: 5,
    symbol: "RBGLY",
    fullName: "Reckitt Benckiser Group",
    price: "$10.79",
    image: "../assets/reckitt.png",
  },
  {
    id: 6,
    symbol: "PFE",
    fullName: "Pfizer",
    price: "$26.66",
    image: "../assets/pfizer.jpg",
  },
  {
    id: 7,
    symbol: "BUD",
    fullName: "Anheuser-Busch InBev",
    price: "$59.96",
    image: "../assets/abinbev.jpg",
  },
  {
    id: 8,
    symbol: "PII",
    fullName: "Polaris",
    price: "$97.27",
    image: "../assets/polaris.png",
  },
  {
    id: 9,
    symbol: "ABEV",
    fullName: "Ambev",
    price: "$2.41",
    image: "../assets/ambev.png",
  },
  {
    id: 10,
    symbol: "EL",
    fullName: "Estee Lauder",
    price: "$144.43",
    image: "../assets/estee.png",
  },
];
