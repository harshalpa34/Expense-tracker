import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

export const ExpensesList = (props) => {
   



    if (props.filter.length === 0) {     // filterExpenses Component is used here to map the filtered expenses only
        return <h2 className="expenses-list__fallback"> Expenses are not found</h2>
    }
    return (
        <ul className="expenses-list">
            {props.filter.map((element) => (
                <ExpenseItem
                    key={element.id}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                />
            ))}
        </ul>
    )

}
