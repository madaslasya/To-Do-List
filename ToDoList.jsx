import React, { useState } from "react";
import "./App.css";

function ToDoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ React Todo List</h1>
      
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        style={{ padding: "10px", width: "250px" }}
      />
      <button 
        onClick={addTask} 
        style={{ marginLeft: "10px", padding: "10px 20px" }}
      >
        Add Task
      </button>

      <ul style={{ listStyle: "none", marginTop: "20px" }}>
        {todos.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item} 
            <button 
              onClick={() => deleteTask(index)} 
              style={{ marginLeft: "15px", color: "white", background: "red", border: "none", padding: "5px 10px", cursor: "pointer" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
