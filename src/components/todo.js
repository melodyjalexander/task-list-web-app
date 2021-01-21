import React from "react";

export default function Todo({ todoList }) {
  return (
    <div className="taskList">
      <p className="taskListTitle">Current</p>

      {todoList.map((todoItem) => (
        <div className="taskContainer" key={todoItem.id}>
          <h5 className="taskTag">{todoItem.title}</h5>
          <div className="taskActionsContainer">
            <label>
              <input type="radio" name="radio-button" value="{isCompleted}" />
              <span>{todoItem.description}</span>
            </label>
            <button className="editButton">+</button>
          </div>
        </div>
      ))}

      <div>
        <button className="addTask">
          <h5>Add new task</h5>
        </button>
      </div>
    </div>
  );
}
