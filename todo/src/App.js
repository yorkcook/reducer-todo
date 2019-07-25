import React, { useReducer } from "react";
import TodoList from "./components/TodoList";

import "./App.css";

import {
  reducer,
  intialState,
  ADD_TODO,
  CLEAR_TODO,
  TOGGLE_TODO
} from "./reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  console.log(intialState);

  const addTodo = todo => {
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const toggleTodo = id => {
    dispatch({ type: TOGGLE_TODO, payload: id });
  };

  const clearTodo = e => {
    e.preventDefault();
    dispatch({ type: CLEAR_TODO });
  };

  return (
    <div className="App">
      <h1>ToDo</h1>
      <TodoList tasks={state.todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
