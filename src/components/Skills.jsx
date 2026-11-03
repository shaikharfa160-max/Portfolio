import { skillGroups } from "../data/portfolio";

// Each card gets a different tilt. On hover it straightens up and jumps a little.
const tilts = ["-4deg", "3deg", "-2deg", "4deg", "-3deg", "2deg"];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      {/* spinning round badge */}
      <div className="badge-wrap">
        <svg className="spin" viewBox="0 0 200 200">
          <defs>
            <path id="ring" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
          </defs>
          <text>
            <textPath href="#ring" textLength="470" lengthAdjust="spacing">
              HTML • CSS • JAVASCRIPT • REACT.JS • UI DESIGN •
            </textPath>
          </text>
        </svg>
        <span className="badge-center">&lt;/&gt;</span>
      </div>

      <div className="container">
        <span className="tag tag-tilt reveal">My skills</span>
        <h2 className="title reveal">Things I work with</h2>

        {skillGroups.map((group) => (
          <div className="skill-group reveal" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-row">
              {group.skills.map((skill, i) => (
                <div className="skill-card" key={skill.name} style={{ "--tilt": tilts[i % tilts.length] }}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
