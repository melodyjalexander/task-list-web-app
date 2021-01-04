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

      <div>
        <button></button>
        <p>Current</p>
        <p>Complete batch orders from Saturday</p>
        <button></button>
      </div>

      <div>
        <button>Add new task</button>
      </div>
    </div>
  );
}

export default App;
