import './ExpenseForm.css'
import { useState } from 'react'
const ExpenseForm = (props) => {
  const [title, settitle] = useState('')
  const [amount, setamount] = useState('0')
  const [date, setdate] = useState('2019-01-01')

  const titleChangeHandler = (event) => {
    settitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setamount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setdate(event.target.value)
  }
  const FormHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    }
    // console.log(expenseData);
    settitle('')
    setamount('0')
    setdate('')
    props.onSaveExpenses(expenseData)
  }

  return (
    
    <form onSubmit={FormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="1"
            step="5"
            required
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            required
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onclicking}>Cancle</button>

        <button type="submit" onSubmit={props.onclicking}>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
