import React, {useState} from "react";

function Input(props) {
  
    var [inputText, setText] = useState("")

    function Change(event){
        const newValue = event.target.value;
          setText(newValue);
       }

    return (
    <div className="form">
      <input onChange={Change} type="text" value={inputText} />
      <button onClick={() => {
         props.Additem(inputText)
          setText("")
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
