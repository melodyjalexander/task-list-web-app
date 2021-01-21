import React from "react";
import TodoItem from "./todoitem.js";

export default function TodoList({ todoList }) {
  return (
    <div className="taskList">
      <p className="taskListTitle">Current</p>

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </div>
  );
}
