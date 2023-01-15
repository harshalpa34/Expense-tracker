import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'
import React, { useState } from 'react';
import { ExpensesList } from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [dropdownyear, setdropdownyear] = useState(2022)

  const gettingyearfromexpensefilter = (year) => {
    setdropdownyear(year)
  }
  const filteredExpenses = props.items.filter((element) => {
    return element.date.getFullYear().toString() === dropdownyear
  })  //code to fileter the expenses shown with respect to the year given the filterExpenses compenet is created and that compent is uded below

  return (
   
      <Card className="expenses">
        <ExpensesFilter dropdownyearidentifier={gettingyearfromexpensefilter} />

        <ExpensesChart expense = {filteredExpenses} />
        <ExpensesList filter={filteredExpenses} />
      </Card>
    
  )
}

export default Expenses
