import "./ExpenseDate.css";
import Card from "../UI/Card";

function ExpenseDate({ date }) {
  const expenseDate = date;
  return (
    <Card className='expense-date'>
      <div className='expense-date__month'>
        {expenseDate.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className='expense-date__year'>
        {expenseDate.toLocaleString("en-US", { year: "numeric" })}
      </div>
      <div className='expense-date__day'>
        {expenseDate.toLocaleString("en-US", { day: "2-digit" })}
      </div>
    </Card>
  );
}

export default ExpenseDate;
