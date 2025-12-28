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

  return (
    <div className = "container">
      <h1>To-do List</h1>
      <div className = "input-box">
        <input
          type = "text"
          value = {inputText}
          onChange = {(event) => setInputText(event.target)}
          placeholder = "What do you have to do?"
        />
        <button onClick = {addTask}>Adicionar</button>
      </div>
    </div>
  )
}

export default App
