import { createSlice } from "@reduxjs/toolkit";
const episodesState = { epiList: [] };
const episodesSlice = createSlice({
  name: "episodes",
  initialState: episodesState,
  reducers: {
    addEpi(state, action) {
      if (state.epiList.length === 0) {
        state.epiList = [...action.payload];
      }
    },
  },
});
export default episodesSlice.reducer;
export const episodesAction = episodesSlice.actions;
