import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    transaction_number: 0,
    people_total: 0,
    tip: 0,
    total_person: 0,
  },
  reducers: {
    addTransaction(state, action) {
      state.transaction_number = action.payload;
    },
    addPeople(state, action) {
      state.people_total = action.payload;
    },
    addTip(state, action) {
      state.tip = action.payload;
    },
    addTotalPerson(state, action) {
      state.total_person = action.payload;
    },
    resetransaction(state) {
      state.transaction_number = 0;
      state.people_total = 0;
      state.tip = 0;
      state.total_person = 0;
    },
  },
});

export const {
  addTransaction,
  addPeople,
  addTip,
  addTotalPerson,
  resetransaction,
} = transactionSlice.actions;
