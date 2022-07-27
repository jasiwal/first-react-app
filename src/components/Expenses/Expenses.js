import { React, useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [changedYear, setChangedYear] = useState(2022);

  const filteredExpenseItems = props.items.filter(
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
        <ExpensesChart expenses={filteredExpenseItems} />
        <ExpenseList items={filteredExpenseItems} />
      </Card>
    </div>
  );
};

export default Expenses;
