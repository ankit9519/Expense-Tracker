import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setIsFormVisible(false); // Hide the form fields after submission
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  return (
    <form onSubmit={submitHandler}>
      {isFormVisible ? (
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2030-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
      ) : (
        <div className='new-expense__actions' style={{ textAlign: "center" }}>
          <button type='button' onClick={toggleFormVisibility}>
            Add Expense
          </button>
        </div>
      )}
      {isFormVisible && (
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
