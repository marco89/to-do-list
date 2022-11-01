import React, { useState } from 'react';
import './App.css';

function App() {

  // State hook - 'useState'

  // setter functions and they populate the input box so best to start as empty str
  // ** $newTask is the name of the input box **
  const [newTask, setNewTask] = useState("");
  // creates an empty array called $tasks
  const [tasks, setTasks] = useState([]);

  // these are the helper functions

  // this is called when clicking the Add button and just console logs where's entered into $newTask i.e. the text input
  function addTask() {

    if (!newTask) {
      alert("Please add a new task")
      return;
    }

    const task = {
      // generates random ID for each task
      id: Math.floor(Math.random() * 1000),
      value: newTask
    };
    // adds the value of $task to the oldList array
    setTasks(oldList => [...oldList, task]);

    // sets the input field $newTask back to empty after an entry is added to list
    setNewTask("");
  }

  function deleteTask(id) {
    // creates a new array of all tasks with an id that is NOT the id we passed in to delete 
    // so its an array of all items that are not the one we want to delete
    const retainedArray = tasks.filter(tasks => tasks.id !== id);
    // adds $retainedArray to the task list ($tasks) 
    setTasks(retainedArray);
  }

  return (
    <body>
    <div className="App">
        {/* 1. Header */}
        <h1>To-do List App</h1>

        {/* 2. Input (input and button) */}

        <input
          type="text"
          placeholder="Please add a task..."
          value={newTask}
          // sets the value of the input box
          onChange={e => setNewTask(e.target.value)}
        />

        <button onClick={() => addTask()}>Add</button>

        {/* 3. List of items (unordered list with list items inside) */}
        <ul>
          {tasks.map(task => {
            return (
              // outputs the value from $newTask (input bar) as an unordered list  and creates the red delete button
              // delete button works by calling $deleteTask function and passes it the $task array and $id property as params
              <li key={task.id}>{task.value} <button class='delete-button' onClick={() => deleteTask(task.id)}>❌</button></li>
            )
          })}
        </ul>
    </div>
    </body>
  );
}

export default App;
