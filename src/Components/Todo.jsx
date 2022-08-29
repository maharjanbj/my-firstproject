import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState([]);
  const [todos, setTodos] = useState([
    "Take a walk.",
    "Buy grocery.",
    "Read a book.",
    "Take a nap.",
  ]);

  console.log(input);
  console.log(todos);

  function handleSubmit() {
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="todo">
      <div className="todo-logo">Todo App</div>

      <div className="todo-form">
        <form>
          <input
            type="text"
            className="task"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <input
            type="button"
            className="button"
            name="Enter"
            value="Add Todo"
            disabled={!input}
            onClick={handleSubmit}
          />
        </form>
      </div>
      <div className="todo-list">
        <h3>Task List</h3>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
