import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, seExpenses] = useState([
    {
      id: 1,
      description: "Groceries",
      amount: 500,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Rent",
      amount: 1000,
      category: "Rent",
    },
    {
      id: 3,
      description: "Gas",
      amount: 200,
      category: "Gas",
    },
  ]);
  return (
    <div>
      <ExpenseList
        onDelete={(id) => seExpenses(expenses.filter((item) => item.id !== id))}
        expenses={expenses}
      />
    </div>
  );
};

export default App;
