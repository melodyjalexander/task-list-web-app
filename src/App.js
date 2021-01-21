import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Tab from "./components/tabbar.js";
import Todo from "./components/todo.js";
import avatarImage from "./sampleAvatar.jpeg";

function App() {
  const user = {
    name: "Lucy Young",
    avatar: avatarImage,
  };

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
      <Header user={user} />
      <Tab />
      <Todo todoList={todoList} />
    </div>
  );
}

export default App;
