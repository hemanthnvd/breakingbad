import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputState";
import charactersReducer from "./characters";
import episodesReducer from "./episodes";
import quotesReducer from "./quotes";
import deathsReducer from "./deaths";

const store = configureStore({
  reducer: {
    input: inputReducer,
    characters: charactersReducer,
    episodes: episodesReducer,
    quotes: quotesReducer,
    deaths: deathsReducer,
  },
});
export default store;
