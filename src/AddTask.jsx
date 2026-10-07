import { useState } from 'react'

function AddTask({ onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!title.trim()) {
      return
    }

    try {
      const response = await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
        }),
      })

      const newTask = await response.json()

      onAdd(newTask)
      setTitle('')
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTask