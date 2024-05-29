import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import MonthSelector from "./components/MonthSelector";
import List from "./components/List";
import Detail from "./components/Detail";

function App() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <Router>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%", maxWidth: "800px" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Form addExpense={addExpense} />
                  <MonthSelector
                    selectedMonth={selectedMonth}
                    setSelectedMonth={setSelectedMonth}
                  />
                  <List expenses={expenses} selectedMonth={selectedMonth} />
                </>
              }
            />
            <Route
              path="/detail/:id"
              element={<Detail expenses={expenses} setExpenses={setExpenses} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
