import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HeartState {
  heart: number | null;
}

const initialState: HeartState = {
  heart: 0,
};

export const heartSlice = createSlice({
  name: "heartSlice",
  initialState,
  reducers: {
    heartReducer: (state, action: PayloadAction<number | null>) => {
      state.heart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { heartReducer } = heartSlice.actions;

export default heartSlice.reducer;
