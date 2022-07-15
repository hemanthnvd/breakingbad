import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputState";

const store = configureStore({
  reducer: { input: inputReducer },
});
export default store;
