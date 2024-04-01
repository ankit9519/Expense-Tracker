import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ title, amount, date }) {
  const [newTitle, setNewTitle] = useState(title);
  const expensePrice = amount;

  function handleTitleChange() {
    setNewTitle("Updated");
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{newTitle}</h2>
        <div className='expense-item__price'>${expensePrice}</div>
      </div>
      <button onClick={handleTitleChange}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
