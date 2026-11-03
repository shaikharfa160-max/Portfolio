import { about, profile } from "../data/portfolio";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <span className="tag reveal">About me</span>
        <h2 className="title reveal">A little bit about me</h2>

        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <a className="btn dark" href={profile.resume} download>Download resume</a>
          </div>

          <div className="about-cards">
            <div className="info-card reveal">
              <h3>🎓 Education</h3>
              <p><b>{about.education.degree}</b></p>
              <p>{about.education.place}</p>
              <p className="small">{about.education.time}</p>
            </div>

            <div className="info-card reveal">
              <h3>🖍️ Hobbies</h3>
              <div className="pills">
                {about.hobbies.map((h) => <span key={h}>{h}</span>)}
              </div>
            </div>

            <div className="info-card reveal">
              <h3>🗣️ Languages</h3>
              <div className="pills">
                {about.languages.map((l) => <span key={l}>{l}</span>)}
              </div>
            </div>

            <div className="info-card reveal">
              <h3>📍 Location</h3>
              <p>{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
