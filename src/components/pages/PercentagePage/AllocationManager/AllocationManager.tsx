import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Slider,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";

const marks = [
  { value: 0, label: "0 BYN" },
  { value: 100, label: "100 BYN" },
];

export const AllocationManager: React.FC = () => {
  const initialValue = Number(localStorage.getItem("sliderValue")) ?? 0;

  const [sliderValue, setSliderValue] = useState<number>(initialValue);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const formatValueDisplay = (value: number) => {
    return `${value} BYN`;
  };

  const handleSliderValueChange = (_event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      setSliderValue(value);
    }
  };

  const handleConfirmClick = () => {
    setShowAlert(true);
    localStorage.setItem("sliderValue", String(sliderValue));
  };

  return (
    <>
      <Box p={3}>
        <Stack gap={2}>
          <Typography variant="h6">Percentage Allocation</Typography>
          <Typography>
            Please specify the portion you are willing to allocate from the
            total amount of each transaction.
          </Typography>
          <Stack justifyContent="center" alignItems="center">
            <Slider
              sx={{ width: "90%" }}
              marks={marks}
              getAriaValueText={formatValueDisplay}
              valueLabelDisplay="auto"
              value={sliderValue}
              onChange={handleSliderValueChange}
            />
          </Stack>
          <Button
            variant="contained"
            onClick={handleConfirmClick}
            disabled={initialValue === sliderValue}
          >
            Confirm
          </Button>
        </Stack>
      </Box>
      <Snackbar
        open={showAlert}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setShowAlert(false)}
      >
        <Alert severity="success" onClose={() => setShowAlert(false)}>
          Successfully changed the allocation percentage!
        </Alert>
      </Snackbar>
    </>
  );
};
