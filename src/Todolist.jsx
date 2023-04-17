
import React from "react";
function Todolist(props) {
  // const[styling,setStyling]=useState(false);
  // function handleStyle(){
  //     setStyling(prevValue => !prevValue);
  // }
  return (
    <div onClick={()=>{
        props.onChecked(props.id);
    }}>
      <ul>
        <li>{props.text}</li>
      </ul>
    </div>
  );
}

export default Todolist;
