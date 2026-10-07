function TaskList({ tasks, onDelete }) {
  return (
    <div>
      <h2>Tasks</h2>

      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>

          <p>
            Status: {task.completed ? "Completed" : "Not completed"}
          </p>

          <button onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default TaskList