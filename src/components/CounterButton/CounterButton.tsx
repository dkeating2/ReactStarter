import { useState } from "react";

import { Button, Stack, TextField, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/reducers/CounterReducer/CounterReducer";

const CounterButton = () => {
  const [incrementBy, setIncrementBy] = useState(2);

  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementBy = () => {
    dispatch(incrementByAmount(Number(incrementBy)));
  };

  return (
    <>
      <Stack spacing={2}>
        <Typography data-testid="CurrentCount">
          Current Count: {count}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            data-testid="IncrementButton"
            variant="contained"
            onClick={handleIncrement}
          >
            +1
          </Button>
          <Button
            data-testid="DecrementButton"
            variant="contained"
            onClick={handleDecrement}
          >
            -1
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            data-testid="IncrementByButton"
            variant="contained"
            onClick={handleIncrementBy}
          >
            Increment By{" "}
          </Button>
          <TextField
            InputProps={{ "aria-label": "IncrementByField" }}
            value={incrementBy}
            onChange={(e) => {
              setIncrementBy(Number(e.target.value));
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};
export default CounterButton;
