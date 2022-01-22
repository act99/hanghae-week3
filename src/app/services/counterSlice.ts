import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export interface CounterState {
  value: number;
}

const dDay = new Date();
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
