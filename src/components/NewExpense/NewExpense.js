import { React, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [hideExpenseForm, setHideExpenseForm] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveExpense(expenseData);
    setHideExpenseForm(true);
    //console.log(expenseData);
  };

  const onCancelHandler = (event) => {
    setHideExpenseForm(true);
  };

  const showExpenseFormHandler = (event) => {
    setHideExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {hideExpenseForm ? (
        <button onClick={showExpenseFormHandler}>Add New Expense.</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
