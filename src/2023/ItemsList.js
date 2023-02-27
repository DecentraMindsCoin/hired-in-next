import React, { useState } from 'react';

const ItemsList = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Item 1', description: 'Description 1', done: false },
    { id: 2, title: 'Item 2', description: 'Description 2', done: false },
    { id: 3, title: 'Item 3', description: 'Description 3', done: false },
  ]);

  const toggleItemStatus = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const doneItems = items.filter((item) => item.done).length;

  return (
    <div>
      <h2>Items List</h2>
      <p>Number of items done: {doneItems}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => toggleItemStatus(item.id)}>
              {item.done ? 'Mark as not done' : 'Mark as done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;