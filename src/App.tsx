import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
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

  const visibleCategory = expenses.filter((item) =>
    selectedCategory ? item.category === selectedCategory : expenses
  );
  return (
    <>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div>
        <ExpenseList
          onDelete={(id) =>
            seExpenses(expenses.filter((item) => item.id !== id))
          }
          expenses={visibleCategory}
        />
      </div>
    </>
  );
};

export default App;
