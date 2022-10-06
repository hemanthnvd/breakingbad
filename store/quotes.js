import { createSlice } from "@reduxjs/toolkit";
const quotesState = { quoList: [] };
const quotesSlice = createSlice({
  name: "quotes",
  initialState: quotesState,
  reducers: {
    addQuo(state, action) {
      if (state.quoList.length === 0) {
        state.quoList = [...action.payload];
      }
    },
  },
});
export default quotesSlice.reducer;
export const quotesAction = quotesSlice.actions;
