import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DiaryState {
  diary: string;
}

const initialState: DiaryState = {
  diary: "",
};

export const diarySlice = createSlice({
  name: "diarySlice",
  initialState,
  reducers: {
    diaryReducer: (state, action: PayloadAction<string>) => {
      state.diary = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { diaryReducer } = diarySlice.actions;

export default diarySlice.reducer;
