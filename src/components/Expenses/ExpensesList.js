import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ items }) {
  if (items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no Expenses</h2>;
  }
  return (
    <ul className='expenses-list'>
      {items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.title}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
