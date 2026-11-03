import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container center">
        <span className="tag reveal">Contact</span>
        <h2 className="big reveal">Let's work together</h2>
        <p className="reveal">Have a project, an idea or just want to say hi? My inbox is always open.</p>

        <div className="contact-buttons reveal">
          <a className="btn dark" href={`mailto:${profile.email}`}>Say hello 👋</a>
          <a className="btn light" href={profile.resume} download>Download resume ⬇</a>
        </div>

        <div className="social reveal">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </section>
  );
}
