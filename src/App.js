import React from "react";
import "./App.css";

function App() {
  let avatarImage = require("./sampleAvatar.jpeg");
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
          <h2>Lucy Young</h2>
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
        <div className="taskContainer">
          <label>
            <input type="radio" name="radio-button" value="task" />
            <span>Package batch orders from Saturday</span>
          </label>
          <button className="editButton">+</button>
        </div>

        <div>
          <button className="addTask">Add new task</button>
        </div>
      </div>
    </div>
  );
}

export default App;
