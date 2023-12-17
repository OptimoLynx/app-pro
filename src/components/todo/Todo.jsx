import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function Todo() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((preItems) => {
      return [...preItems, inputText];
    });
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
      <InputArea onAdd={addItem} />
      <button onClick={deleteItem}>
        <span>Delete</span>
      </button>
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
