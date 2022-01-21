import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const dDay = new Date();

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: dDay.getTime(),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
