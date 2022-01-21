import { createSlice } from "@reduxjs/toolkit";

export const clickDateSlice = createSlice({
  name: "clickDate",
  initialState: {
    clickDateValue: false,
  },
  reducers: {
    onClickDate: (state) => {
      state.clickDateValue = true;
    },
    unClickDate: (state) => {
      state.clickDateValue = false;
    },
  },
});

export const { onClickDate, unClickDate } = clickDateSlice.actions;
export default clickDateSlice.reducer;
