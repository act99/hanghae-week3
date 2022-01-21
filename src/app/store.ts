import { configureStore } from "@reduxjs/toolkit";
import clickDateReducer from "./services/clickDate";
// import { dateClickSlice } from "./services/dateClickSlice";

export default configureStore({
  reducer: {
    clickDate: clickDateReducer,
  },
});

// export type CommonRootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
