import './App.css'
import ProjectCard from './ProjectCard'


function App() {

  const projects = [
    {
      id: 1,
      name: "Bank Loan Analysis",
      description: "Analyzing loan applications, credit risk, and repayment patterns."
    },
    {
      id: 2,
      name: "Healthcare Analytics",
      description: "Analyzing healthcare data to create useful business insights."
    },
    {
      id: 3,
      name: "Housing Market Analysis",
      description: "Analyzing housing prices and factors that affect property values."
    }
  ]

  return (
    <div>
      <h1>My Portfolio Projects</h1>

      <p>I am practicing React by building project cards.</p>

      <div>
        {projects.map((project) => (
          <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App