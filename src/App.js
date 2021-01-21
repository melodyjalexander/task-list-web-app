import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Tab from "./components/tabbar.js";
import TodoList from "./components/todoList.js";
import avatarImage from "./sampleAvatar.jpeg";
import { useState } from "react";
import { nanoid } from "nanoid";
import TodoItem from "./components/todoitem";

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

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleChangeNewTaskTitle = (e) => {
    let value = e.target.value;
    setNewTaskTitle(value);
  };

  const handleChangeNewTaskDescription = (e) => {
    let value = e.target.value;
    setNewTaskDescription(value);
  };

  const handleAddNewTask = () => {
    let newTask = {
      id: nanoid(),
      title: newTaskTitle,
      description: newTaskDescription,
      isCompleted: false,
    };

    setTodoList((prevTodoList) => [...prevTodoList, newTask]);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  return (
    <div>
      <Header user={user} />
      <Tab />
      <TodoList todoList={todoList} />
      <div className="newTaskModule">
        <label>
          <h4>Tag</h4>
          <input
            type="text"
            onChange={handleChangeNewTaskTitle}
            value={newTaskTitle}
            className="taskTag"
          ></input>
        </label>

        <label>
          <h4>Task</h4>
          <input
            type="text"
            onChange={handleChangeNewTaskDescription}
            value={newTaskDescription}
            className="taskDescription"
          ></input>
        </label>
      </div>
      <button className="addTask" onClick={handleAddNewTask}>
        <h5>Add new task</h5>
      </button>
    </div>
  );
}

export default App;
