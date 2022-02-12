import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { transactionSlice } from "./transaction";

export const rootReducer = combineReducers({
  transaction: transactionSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
