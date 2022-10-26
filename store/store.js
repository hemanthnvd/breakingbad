import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputState";
import charactersReducer from "./characters";
import episodesReducer from "./episodes";
import quotesReducer from "./quotes";
import deathsReducer from "./deaths";
import navReducer from "./navState";

const store = configureStore({
  reducer: {
    input: inputReducer,
    characters: charactersReducer,
    episodes: episodesReducer,
    quotes: quotesReducer,
    deaths: deathsReducer,
    nav: navReducer,
  },
});
export default store;
