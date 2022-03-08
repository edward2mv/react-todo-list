import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  //Evento 
  const onClickButton = (msg)=>{
    alert(msg);
  }
  return (
    <button className="CreateTodoButton"
    onClick= { () => onClickButton('AQui v el modal') }
    >
    +
    </button>
  );
}

export { CreateTodoButton };
