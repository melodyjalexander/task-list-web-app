import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Tab from "./components/tabbar.js";
import TodoList from "./components/todoList.js";
import avatarImage from "./sampleAvatar.jpeg";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Lucy Young",
    avatar: avatarImage,
  });

  const [todoList, setTodoList] = useState([
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
  ]);

  return (
    <div>
      <Header user={user} />
      <Tab />
      <TodoList todoList={todoList} />
      <div>
        <button className="addTask">
          <h5>Add new task</h5>
        </button>
      </div>
    </div>
  );
}

export default App;
