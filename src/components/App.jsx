import React, { useState } from "react";
import Todolist from "./Todolist";
import Input from "./Input";

function App() {
  
 var [list, setList] = useState([])

  
    function addList(inputText){
      setList(prev => {
        return [
          ...prev,
          inputText
        ]
      })
    }
    function deleteItems(id){
      setList(prev => {
        return prev.filter(function(name,index){
               return index !== id
        })
      })}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input
      Additem = {addList}
      />
      <div>
        <ul>
           {list.map((todolist,i) => (
              <Todolist
              key={i}
              id={i}
              list={todolist}
              onChecked={deleteItems}
              ></Todolist> ))}  
        </ul>
      </div>
    </div>
  );
}

export default App;
