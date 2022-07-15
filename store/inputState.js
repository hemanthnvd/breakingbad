import { createSlice } from "@reduxjs/toolkit";
const inputState = 0;
const inputSlice = createSlice({
  name: "input",
  initialState: inputState,
  reducers: {
    toggle: (state) => {
      return !state;
    },
  },
});
export default inputSlice.reducer;
export const inputActions = inputSlice.actions;
