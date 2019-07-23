import React from "react";
import Task from "./Task";

const TodoList = props => {
  return (
    <div>
      <h1>Tasks</h1>
      {props.tasks.map(task => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TodoList;
