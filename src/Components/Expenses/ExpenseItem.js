// import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    // this is for learning state in react below code for changing the title after click on button

    // const[newTitle,setNewTitle]=useState("");
    // const[title,setTitle]=useState(props.title);

    // const clickHandler = () => {
    //     setTitle(newTitle);
    // }
    // const changeHandler=(event)=>{
    //     setNewTitle(event.target.value);
    // }


    return (
        <Card className="expense-item">

            < ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>

            {/* <input type="text" value={newTitle} onChange={changeHandler}></input>
            <button onClick={clickHandler}>Change Title</button> */}

        </Card>

    );
}

export default ExpenseItem;