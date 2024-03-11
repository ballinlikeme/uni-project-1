import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export const BalanceManager: React.FC = () => {
  return (
    <Box p={2}>
      <Stack gap={2}>
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Typography variant="h5">Balance</Typography>
            <Typography variant="h6">15.56 BYN</Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">Total Earnings</Typography>
            <Typography variant="h6">17.11 BYN</Typography>
          </Stack>
        </Stack>
        <Typography variant="body1">Rate: 10%</Typography>
      </Stack>
    </Box>
  );
};
