import { useEffect, useState } from "react";
import { profile, roles } from "../data/portfolio";

export default function Hero() {
  // Typing effect: type a word, wait, delete it, then type the next word
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = roles[index];
    let delay = deleting ? 45 : 95;
    if (!deleting && text === word) delay = 1500;
    if (deleting && text === "") delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % roles.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="hello">Hello, I'm</p>
        <h1>{profile.fullName}</h1>
        <h2 className="typing">
          {text}
          <span className="cursor">|</span>
        </h2>
        <p className="hero-about">
          A Computer Engineering student who loves building clean, colourful and easy-to-use web interfaces.
        </p>
        <div className="hero-buttons">
          <a className="btn primary" href="#projects">View my work</a>
          <a className="btn outline" href="#contact">Contact me</a>
          <a className="btn gold" href={profile.resume} download>Download resume ⬇</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-card">
          <div className="code-bar">
            <span></span><span></span><span></span>
          </div>
          <pre>
{`const arfa = {
  role: "Front-End Developer",
  skills: [
    "HTML", "CSS",
    "JavaScript", "React"
  ],
  hobbies: [
    "Painting", "Sketching"
  ],
  loves: "clean interfaces",
};`}
          </pre>
        </div>
        <span className="chip chip1">&lt;/&gt;</span>
        <span className="chip chip2">Aa</span>
        <span className="chip chip3">{"{ }"}</span>
      </div>
    </section>
  );
}
