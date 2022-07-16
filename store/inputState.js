import { createSlice } from "@reduxjs/toolkit";
const inputState = { button: false, text: "" };
const inputSlice = createSlice({
  name: "input",
  initialState: inputState,
  reducers: {
    toggle(state) {
      state.button = !state.button;
    },
    liveText(state, action) {
      state.text = action.payload;
    },
  },
});
export default inputSlice.reducer;
export const inputActions = inputSlice.actions;
