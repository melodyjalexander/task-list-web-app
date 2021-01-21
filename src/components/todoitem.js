import React from "react";

export default function TodoItem({ todoItem, onCompleteTask }) {
  const handleCompleteTask = () => onCompleteTask(todoItem.id);
  return (
    <div className="taskContainer" key={todoItem.id}>
      <h5 className="taskTag">{todoItem.title}</h5>
      <div className="taskActionsContainer">
        <label>
          <input
            type="radio"
            name="radio-button"
            onChange={handleCompleteTask}
            checked={isCompleted}
          />
          <span>{todoItem.description}</span>
        </label>
        <button className="editButton">+</button>
      </div>
    </div>
  );
}
