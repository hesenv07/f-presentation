import { configureStore } from "@reduxjs/toolkit";
import { commonReducer } from "./slices";



export const store = configureStore({
  reducer: {
    //slices
    common: commonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

