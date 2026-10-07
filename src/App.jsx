import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { projects } from './projects'
import ProjectDetail from './ProjectDetail'
import NotFound from './NotFound'
import TaskList from './TaskList'
import AddTask from './AddTask'
import { useEffect,useState } from 'react'
function Home() {
  return (
    <div>
      <h1>My Portfolio Projects</h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
        />
      ))}
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>I am learning React and building projects for my portfolio.</p>
    </div>
  )
}

function App() {
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const handleAddTask = (newTask) => {
  setTasks((tasks) => [...tasks, newTask])
}

const handleDeleteTask = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/tasks/${id}`,
      {
        method: 'DELETE',
      }
    )

    if (!response.ok) {
      throw new Error('Failed to delete task')
    }

    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  } catch (error) {
    console.error('Error deleting task:', error)
  }
}
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AddTask onAdd={handleAddTask} />
      
      
      <div>
      <TaskList 
      tasks={tasks}
      onDelete={handleDeleteTask}
      />
    </div>
    </BrowserRouter>

    
  )
}

export default App