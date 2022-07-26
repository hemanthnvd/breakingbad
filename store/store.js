import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputState";
import charactersReducer from "./characters";

const store = configureStore({
  reducer: { input: inputReducer, characters: charactersReducer },
});
export default store;
