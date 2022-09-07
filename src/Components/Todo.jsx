import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState([]);
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem));
  // const [todos, setTodos] = useState([
  //   "Take a walk.",
  //   "Buy grocery.",
  //   "Read a book.",
  //   "Take a nap.",
  // ]);

  console.log(input);
  console.log(todos);

  // Local Storage Setup
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') == null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  //set item to localstorage
  const saveLocalTodos = (todo) => {
    //check if there is already items in the localstorage
    if(localStorage.getItem('todos') == null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      todoLocal.push(todo);
      localStorage.setItem('todos',JSON.stringify(todoLocal));
    }
  }

  // Create: Add new todo
  function handleSubmit() {
    setTodos([...todos, input]);
    setInput('')
  }

  //Update: Update the individual items in the array having index
  function updateTodo(index){
    const newTodos = [...todos];
    //newTodos[index] = input;
    newTodos.splice(index, 1, input);
    setTodos(newTodos);
    setInput('');
  }

  //Delete: Delete the individual items in the array having index
  function deleteTodo(index){
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  //Remove All: It removes all the items in the array
  function removeall(){
    setTodos([])
    localStorage.setItem('todo',JSON.stringify([]))
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
            <li>
              {todo}
              <button className="update"
              onClick={ () => updateTodo(todos.indexOf(todo))}
              >
                Update
                </button>
              <button className="delete"
              onClick={ () => deleteTodo(todos.indexOf(todo))}
              >
                Delete
                </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="todo-removeall">
        <button className="button"
        onClick={removeall}
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default Todo;
