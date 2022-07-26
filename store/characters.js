import { createSlice } from "@reduxjs/toolkit";
const charactersState = { charList: [] };
const characterSlice = createSlice({
  name: "characters",
  initialState: charactersState,
  reducers: {
    addChar(state, action) {
      console.log(action.payload);
      if (state.charList.length === 0) {
        state.charList = [...action.payload];
      }
    },
  },
});
export default characterSlice.reducer;
export const charactersAction = characterSlice.actions;
