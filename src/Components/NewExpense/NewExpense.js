import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{

    const saveExpenseDataHandler=(enteredExpenseData)=>{
          const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
          }
           
        //   sending same obj data to app.js
          props.onAddExpense(expenseData); 
          
        console.log(expenseData);
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>

        </div>
    );       
}

export default NewExpense;