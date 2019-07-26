import React from "react";

const Task = props => {
  console.log(props);
  return (
    <div>
      <button
        onClick={e => {
          e.preventDefault();
          props.toggleTodo(props.todo.id);
        }}
      >
        <p>{props.todo.item}</p>
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          props.clearTodo(props.todo.id);
        }}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Task;
