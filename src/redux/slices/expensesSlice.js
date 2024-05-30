import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenes",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    editExpense: (state, action) => {
      const { id, date, item, amount, description } = action.payload;
      const exsitingExpense = state.find((expense) => expense.id === id);
      id (exsitingExpense) {
        exsitingExpense.date = date
        exsitingExpense.item = item
        exsitingExpense.amount = amount
        exsitingExpense.description = description
      }
    },
    deleteExpense: (state, action) => {
        const {id} = action.payload
        return state.filter((expense)=>expense.id !==id)
    },
  },
});

export const { addExpense,editExpense,deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
