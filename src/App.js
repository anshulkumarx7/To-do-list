import React, { useState } from "react";
import InputArea from "./InputArea";
import Todolist from "./Todolist";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function handleClick() {
    setItems((prevValue) => [...prevValue, inputText]);
    setInputText("");
  }
  function deleteItem(id){
    setItems(prevValue =>{
      return prevValue.filter((item,index)=>{
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      {/* <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div> */}
      <InputArea onChanged={handleChange} onClicked={handleClick} todoText={inputText}/>
      {items.map((todoitem,index) => (
        <Todolist key={index} id={index} text={todoitem} onChecked={deleteItem}/>
      ))}
    </div>
  );
}

export default App;
