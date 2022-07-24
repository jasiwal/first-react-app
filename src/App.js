import { React, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 3, 21),
  },
  {
    id: "e2",
    title: "TV",
    amount: 994.12,
    date: new Date(2022, 5, 5),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 150.12,
    date: new Date(2022, 6, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const saveExpenseHandler = (saveExpenseData) => {
    setExpenses((prevExpenses) => {
      return [saveExpenseData, ...prevExpenses];
    });

    console.log("Inside App");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
