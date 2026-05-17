import { useState } from 'react'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (!task.trim()) return
    setTasks((prevTasks) => [...prevTasks, task.trim()])
    setTask('')
  }

  const deleteTask = (indexToDelete) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToDelete)
    )
  }

  return (
    <main>
      <h1>Tasks</h1>

      <input
        name="task"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="button" onClick={addTask}>
        Add Task
      </button>

      <ul>
        {tasks.map((item, index) => (
          <li key={`${item}-${index}`}>
            <span>{item}</span>
            <button type="button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
