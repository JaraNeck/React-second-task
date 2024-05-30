import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import MonthSelector from "./components/MonthSelector";
import List from "./components/List";
import Detail from "./components/Detail";
import ExpenseProvider from "./contexts/ExpenseContext";

function App() {
  return (
    <ExpenseProvider>
      <BrowserRouter>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "80%", maxWidth: "800px" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Form />
                    <MonthSelector />
                    <List />
                  </>
                }
              />
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ExpenseProvider>
  );
}

export default App;
