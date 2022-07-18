import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [changedYear, setChangedYear] = useState("");

  const yearChangeHandlerForExpenses = (changedYearArg) => {
    setChangedYear(changedYearArg);
    console.log(changedYear);
  };

  return (
    <div>
      <ExpensesFilter
        selected={changedYear}
        onYearChange={yearChangeHandlerForExpenses}
      />
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
