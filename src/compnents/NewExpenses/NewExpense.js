import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

import { useState } from "react";

function NewExpense(props) {
    const [isediting, setisediting] = useState(false)


    const expensessaved = (expenseData) => {
        const expensedata = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.addingnewexpense(expensedata)
        setisediting(false)
    }


    const showform = () =>{
        setisediting(true)
    }
    const hideform = () =>{
        setisediting(false)
    }

    return (
        <div className="new-expense">

            {!isediting && <button onClick={showform}> Add New Expense</button>}
            
            {isediting && <ExpenseForm onSaveExpenses={expensessaved}  onclicking= {hideform} />}
        </div>
    )

}

export default NewExpense;