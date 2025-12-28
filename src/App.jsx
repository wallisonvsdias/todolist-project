import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTask = () => {
    if (inputText.trim() !== "") {
    const newTask = {
      id: Date.now(),
      text: inputText,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInputText('');
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed : !task.completed } : task
    ))
  };
 
  return (
    <div className = "container">
      <h1>To-do List</h1>

      <div className = "input-box">
        <input
          type = "text"
          value = {inputText}
          onChange = {(event) => setInputText(event.target.value)}
          placeholder = "What do you have to do?"
        />
        <button onClick = {addTask}>Adicionar</button>
      </div>

      <ul className = "task-list">
        {tasks.map(task => (
          <li
            key = {task.id}
            className = {task.completed ? "completed" : ""}>
              <span onClick={() => toggleTask(task.id)}>
                {task.text}
              </span>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default App
