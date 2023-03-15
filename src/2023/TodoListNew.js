import React, { useState } from 'react';

function TodoListNew() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }

  function handleAddTodo() {
    newTodo ? (setTodoList([...todoList, { id: Date.now(), text: newTodo, completed: false }]), setNewTodo('')) : null;
  }
  
  function handleDelete(id) {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  }
  
  function handleToggleComplete(id) {
    const updatedTodoList = todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    setTodoList(updatedTodoList);
  }
  
  function handleFilterChange(event) {
    setFilter(event.target.value);
  }
  
  let filteredTodoList = filter === 'completed' ? todoList.filter(todo => todo.completed) : filter === 'incomplete' ? todoList.filter(todo => !todo.completed) : todoList;
  

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        <label>Filter:</label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <TodoList todoList={filteredTodoList} onToggleComplete={handleToggleComplete} handleDelete={handleDelete}/>
    </div>
  );
}

function TodoList({ todoList, onToggleComplete, handleDelete }) {
  return (
    <ul>
      {todoList.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggleComplete, handleDelete }) {
  const { id, text, completed } = todo;

  function handleClick() {
    onToggleComplete(id);
  }
  function handleDeleted() {
    handleDelete(id);
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={handleClick} />
        {text}
      </label>
      <button onClick={handleDeleted}>Delete</button>
    </li>
  );
}

export default TodoListNew;
