import React from "react";


function Todolist(props){
    return <li
    onClick= {() => {props.onChecked(props.id)}}
    >{props.list}</li>
}

export default Todolist;