import React, { useState } from "react";

const TodoForm = props => {
  const [todo, setTodo] = useState("");

  const handleChange = e => {
    setTodo(([e.target.name] = e.target.value));
  };

  const submit = e => {
    e.preventDefault();
    props.addTodo(todo);
    setTodo("");
  };

  //console.log(todo);

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={submit}>
        <input type="text" name="todo" value={todo} onChange={handleChange} />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
