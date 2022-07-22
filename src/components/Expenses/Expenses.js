import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const getFilteredItems = (oldItems, filterYear) => {
    return oldItems.filter(
      (eachItem) => eachItem.date.getFullYear() == filterYear
    );
  };

  const [changedYear, setChangedYear] = useState(2022);

  const [expenseItems, setExpenseItems] = useState(
    getFilteredItems(props.items, changedYear)
  );

  const yearChangeHandlerForExpenses = (changedYearArg) => {
    setChangedYear(changedYearArg);

    setExpenseItems(getFilteredItems(props.items, changedYearArg));
    console.log(getFilteredItems(props.items, changedYearArg));
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={changedYear}
          onYearChange={yearChangeHandlerForExpenses}
        />
        {expenseItems.map((expense) => (
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
