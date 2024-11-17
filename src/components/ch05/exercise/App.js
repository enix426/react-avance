// App.js
import React from "react";
import AddTodo from "./AddToDo";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div>
      <h1>Gestion des Tâches</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
