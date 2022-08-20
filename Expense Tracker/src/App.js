import React from "react";
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css";

const App = () => {
  const expenses = [
    {
      id1: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 19),
    },
    {
      id1: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2022, 7, 20),
    },
    {
      id1: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 7, 21),
    },
    {
      id1: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 7, 22),
    },
  ];
  return (
    <div>
      <h2> Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
