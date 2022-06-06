import { configureStore } from "@reduxjs/toolkit";
import drinkReducer from "../features/drinkSlice";

export const store = configureStore({
  reducer: {
    drink: drinkReducer,
  },
});
