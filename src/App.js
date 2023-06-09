import React,{useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

let Dummy_Expense=[
    {
        id:'e1',
        date: new Date(2023,6,6),
        title:'college fee',
        amount:5000
    },
    {
        id:'e2',
        date: new Date(2023,6,20),
        title:'birthday party',
        amount:400
    },
    {
        id:'e3',
        date: new Date(2023,6,5),
        title:'world environment day',
        amount:1000
    },
    {
        id:'e4',
        date: new Date(2023,9,5),
        title:'teacher day',
        amount:500
    }

];

const App=()=> {
   const[expenses,setExpenses]= useState(Dummy_Expense);

   const addExpenseHandler=(expense)=> {
   const updatedExpense=[expense,...expenses];
   setExpenses(updatedExpense);
   };

    return (
        <div>
           <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}

export default App;