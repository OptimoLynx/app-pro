import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((preItems) => {
      return [...preItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((preItems) => {
      return preItems.filter((item, index) => {
        return index !== id;
      });
    });
    /*     setInputText("");
    setItems([]); */
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
        <button onClick={deleteItem}>
          <span>Delete</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
