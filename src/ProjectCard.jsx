import LikeButton
 from "./LikeButton"

function ProjectCard({ name, description }) {
  return (
    <div className="project-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <LikeButton/>
    </div>
  )
}

export default ProjectCard