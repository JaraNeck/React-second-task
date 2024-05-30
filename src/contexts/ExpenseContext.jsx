import { Children, createContext, useState } from "react";

export const ExpenseContext = createContext();

export default function ExpenseProvider({ children }) {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <ExpenseContext.Provider
      value={{
        selectedMonth,
        setSelectedMonth,
        expenses,
        setExpenses,
        addExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
