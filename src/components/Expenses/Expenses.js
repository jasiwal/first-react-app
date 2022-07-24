import { React, useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const [changedYear, setChangedYear] = useState(2022);

  const expenseItems = props.items.filter(
    (eachItem) =>
      eachItem.date.getFullYear().toString() === changedYear.toString()
  );

  const yearChangeHandlerForExpenses = (changedYearArg) => {
    setChangedYear(changedYearArg);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={changedYear}
          onYearChange={yearChangeHandlerForExpenses}
        />
        <ExpenseList items={expenseItems} />
      </Card>
    </div>
  );
};

export default Expenses;
