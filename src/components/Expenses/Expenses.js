import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [changedYear, setChangedYear] = useState(2021);

  const yearChangeHandlerForExpenses = (changedYearArg) => {
    setChangedYear(changedYearArg);
    console.log(changedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={changedYear}
          onYearChange={yearChangeHandlerForExpenses}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
