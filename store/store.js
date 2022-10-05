import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputState";
import charactersReducer from "./characters";
import episodesReducer from "./episodes";

const store = configureStore({
  reducer: { input: inputReducer, characters: charactersReducer, episodes: episodesReducer },
});
export default store;
