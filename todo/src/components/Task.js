import React from "react";

const Task = props => {
  console.log(props);
  return (
    <div>
      <p>{props.todo.item}</p>
      {/* <p>{props.todo.task}</p> */}
    </div>
  );
};

export default Task;
