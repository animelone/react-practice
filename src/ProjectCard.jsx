import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

function ProjectCard({ id, name, description }) {
  return (
    <div className="project-card">
      <h2>{name}</h2>

      <p>{description}</p>

      <Link to={`/projects/${id}`}>
        View Project
      </Link>

      <LikeButton />
    </div>
  )
}

export default ProjectCard