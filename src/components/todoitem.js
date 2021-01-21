import React from "react";

export default function TodoItem({ todoItem, onCompleteTask, handleDelete }) {
  const handleCompleteTask = () => onCompleteTask(todoItem.id);
  return (
    <div className="taskContainer" key={todoItem.id}>
      <h5 className="taskTag">{todoItem.title}</h5>
      <div className="taskActionsContainer">
        <label>
          <input
            type="radio"
            id={todoItem.id}
            name="task"
            onChange={handleCompleteTask(todoItem.id)}
            value={todoItem.isCompleted}
            checked={todoItem.isCompleted}
          />
          <span>{todoItem.description}</span>
        </label>
        <button
          className="editButton"
          type="button"
          onClick={handleDelete(todoItem.id)}
        >
          x
        </button>
      </div>
    </div>
  );
}
