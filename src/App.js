import React from "react";
import "./App.css";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="container">
      <h1>ToDo List Using React And Redux</h1>
      <Todo />
    </div>
  );
};

export default App;
