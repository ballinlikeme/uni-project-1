import React from "react";
import { Box, Stack, Typography, Button, Tooltip } from "@mui/material";

export const CardManager: React.FC = () => {
  return (
    <Box p={2}>
      <Stack>
        <Typography variant="h6">Your card</Typography>
        <Typography>Check your cards</Typography>
      </Stack>
      <Stack
        pt={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2">Active card ends in 7462</Typography>
        <Tooltip
          placement="top"
          arrow
          title="This feature is under construction"
        >
          <span>
            <Button disabled variant="text">
              Manage Cards
            </Button>
          </span>
        </Tooltip>
      </Stack>
    </Box>
  );
};
