import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { projects } from './projects'
import ProjectDetail from './ProjectDetail'
import NotFound from './NotFound'
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
    </BrowserRouter>
  )
}

export default App