import { createSlice } from "@reduxjs/toolkit";
const navState = { ham: false };
const navSlice = createSlice({
  name: "nav",
  initialState: navState,
  reducers: {
    toggle(state) {
      state.ham = !state.ham;
    },
  },
});
export default navSlice.reducer;
export const navActions = navSlice.actions;
