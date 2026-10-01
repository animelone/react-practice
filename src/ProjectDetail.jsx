import { useParams, Link } from 'react-router-dom'
import { projects } from './projects'

function ProjectDetail() {
  const { id } = useParams()

  const project = projects.find(
    (project) => project.id === Number(id)
  )

  if (!project) {
    return <h1>Project Not Found</h1>
  }

  return (
    <div>
      <h1>{project.name}</h1>

      <p>{project.description}</p>

      <p>{project.details}</p>

      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default ProjectDetail