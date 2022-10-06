import { createSlice } from "@reduxjs/toolkit";
const deathsState = { deaList: [] };
const deathsSlice = createSlice({
  name: "deaths",
  initialState: deathsState,
  reducers: {
    addDea(state, action) {
      if (state.deaList.length === 0) {
        state.deaList = [...action.payload];
      }
    },
  },
});
export default deathsSlice.reducer;
export const deathsAction = deathsSlice.actions;
