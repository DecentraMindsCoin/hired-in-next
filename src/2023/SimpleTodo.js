import React, { useState } from "react";

function SimpleTodo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleNewTodoChange(event) {
    setNewTodo(event.target.value);
  }

  function handleNewTodoAddition() {
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  }

  function handleTodoCompletion(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function handleTodoDeletion(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleTodoCompletion(index)}
              />
              {todo.text}
            </label>
            <button onClick={() => handleTodoDeletion(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input value={newTodo} onChange={handleNewTodoChange} />
      <button onClick={handleNewTodoAddition}>Add Todo</button>
    </div>
  );
}

export default SimpleTodo;
