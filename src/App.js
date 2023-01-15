import { useState } from 'react'

import Expenses from './compnents/Expenses/Expenses'
// import ExpensesFilter from "./compnents/Expenses/ExpensesFilter";
import NewExpense from './compnents/NewExpenses/NewExpense'

const Initial_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
]

function App() {
  const [Addexpenses, setAddexpenses] = useState(Initial_Expenses)

  const AddNewExpense = (expensedata) => {
    setAddexpenses((prevExpenses) => {
      return [expensedata, ...prevExpenses]
    })
    // console.log(Addexpenses)
  }

  return (
    <>
      <h1 style={{textAlign: 'center' ,fontWeight: '700'} }>Expense Tracker</h1>
      <NewExpense addingnewexpense={AddNewExpense} />

      <Expenses items={Addexpenses} />
    </>
  )
}

export default App
