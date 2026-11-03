export default function ProjectCard({ project, number }) {
  return (
    <article className="project-card">
      <span className="project-number">0{number}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="pills small">
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo ↗</a>}
      </div>
    </article>
  );
}
