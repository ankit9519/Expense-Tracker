import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummyData = [
  {
    title: "Car Insurance",
    amount: 294,
    date: new Date(2024, 2, 28),
  },
  {
    title: "Shopping",
    amount: 66,
    date: new Date(2025, 5, 26),
  },
  {
    title: "Investments",
    amount: 450,
    date: new Date(2026, 7, 12),
  },
  {
    title: "Electricity Bill",
    amount: 200,
    date: new Date(2026, 6, 2),
  },
];

function App() {
  const [expenses, setExpense] = useState(dummyData);

  function handleNewExpense(expense) {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={handleNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
