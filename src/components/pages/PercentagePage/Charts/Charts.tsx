import React from "react";
import { Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    amount: 485,
  },
  {
    name: "Feb",
    amount: 342,
  },
  {
    name: "Mar",
    amount: 395,
  },
  {
    name: "Apr",
    amount: 390,
  },
  {
    name: "May",
    amount: 280,
  },
  {
    name: "Jun",
    amount: 348,
  },
  {
    name: "Jul",
    amount: 356,
  },
  {
    name: "Aug",
    amount: 374,
  },
  {
    name: "Sep",
    amount: 315,
  },
  {
    name: "Oct",
    amount: 459,
  },
  {
    name: "Nov",
    amount: 175,
  },
  {
    name: "Dec",
    amount: 210,
  },
];

export const Charts: React.FC = () => {
  return (
    <Box p={3} sx={{ height: "100%" }}>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
