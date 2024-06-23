import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openMenu: false,
};

const commonSlice = createSlice({
  name: "CommonSlice",
  initialState,
  reducers: {
    setHamburgerState: (state, { payload }) => {
      state.openMenu = payload;
    },
  },
});

export const commonReducer = commonSlice.reducer;
export const {
  setHamburgerState,
} = commonSlice.actions;
