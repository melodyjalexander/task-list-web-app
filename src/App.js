import React from "react";
import "./App.css";
import avatarImage from "./sampleAvatar.jpeg";

function App() {
  const user = {
    firstName: "Lucy",
    lastName: "Young",
    avatar: avatarImage,
  };

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const todoList = [
    {
      id: 1,
      title: "Business",
      description: "Batch package orders from Saturday",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Pet",
      description: "Pick up dog food at 2pm",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Health",
      description: "Schedule teeth cleaning soon",
      isCompleted: false,
    },
  ];

  return (
    <div>
      <header>
        <div className="dateHeader">
          <h1>Friday, February 5, 2021</h1>
        </div>

        <div className="user">
          <img
            src={avatarImage}
            className="userAvatar"
            alt="sample avatar illustration"
          ></img>
          <h2>{formatName(user)}</h2>
        </div>
      </header>

      <nav>
        <ul>
          <li>
            <h4>Tasks</h4>
          </li>
          <li>
            <h4>Journal</h4>
          </li>
          <li>
            <h4>Budget</h4>
          </li>
        </ul>
      </nav>

      <div className="taskList">
        <p className="taskListTitle">Current</p>

        {todoList.map((todoItem) => (
          <div className="taskContainer">
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
    </div>
  );
}

export default App;
