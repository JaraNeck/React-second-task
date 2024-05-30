import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import MonthSelector from "./components/MonthSelector";
import List from "./components/List";
import Detail from "./components/Detail";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

function App() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [expenses, setExpenses] = useState([]);
  // const addExpense = useSelector((state) => state.addExpense);

  // const addExpense = (newExpense) => {
  //   setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  // };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "80%", maxWidth: "800px" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Form />
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
                element={
                  <Detail expenses={expenses} setExpenses={setExpenses} />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
