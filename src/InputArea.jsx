import React from "react";

const InputArea = (props) => {
  return (
    <div className="form">
      <input onChange={props.onChanged} type="text" value={props.todoText} />
      <button onClick={props.onClicked}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
