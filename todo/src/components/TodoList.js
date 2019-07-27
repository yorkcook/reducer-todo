import React from "react";
import Task from "./Task";

const TodoList = props => {
  return (
    <div>
      <h1>Tasks</h1>
      {props.tasks.map(todo => {
        return (
          <Task
            key={todo.id}
            todo={todo}
            toggleTodo={props.toggleTodo}
            clearTodo={props.clearTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
