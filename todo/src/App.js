import React, { useReducer } from "react";
import TodoList from "./components/TodoList";

import "./App.css";

import { reducer, intialState } from "./reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  console.log(intialState);

  return (
    <div className="App">
      <h1>ToDo</h1>
      <TodoList tasks={state.todos} />
    </div>
  );
};

export default App;
