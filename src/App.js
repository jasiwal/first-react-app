
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 3, 21),
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

  const saveExpenseHandler = (saveExpenseData) =>{

    console.log('Inside App')
    console.log(saveExpenseData);

  }

  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseHandler} />
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
