import React from "react";
import "./App.css";

function App() {
  let myTitle = "Today";
  let taskStatus = "Upcoming";
  let sampleTask = "Pick up drying cleaning";
  return (
    <div>
      <h1>{myTitle}</h1>
      <h2>{taskStatus}</h2>
      <ul>
        <li>{sampleTask}</li>
        <li>{sampleTask}</li>
        <li>{sampleTask}</li>
      </ul>
    </div>
  );
}

export default App;
