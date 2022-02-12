import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    transaction_number: "",
    people_total: "",
    tip: "",
    total_person: "",
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
      state.transaction_number = "";
      state.people_total = "";
      state.tip = "";
      state.total_person = "";
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
