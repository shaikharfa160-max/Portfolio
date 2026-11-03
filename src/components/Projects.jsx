import { useState } from "react";
import { projects, filters } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <span className="tag reveal">My work</span>
        <h2 className="title reveal">Projects I have built</h2>

        <div className="filters reveal">
          {filters.map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* key={filter} makes the cards animate in again every time the filter changes */}
        <div className="project-grid" key={filter}>
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} number={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
