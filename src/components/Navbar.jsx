import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Navbar becomes solid after you scroll a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled || open ? "solid" : ""}`}>
      <a className="brand" href="#home">
        {profile.name.toLowerCase()}<span>.</span>
      </a>

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? "✕" : "☰"}
      </button>

      <nav className={open ? "open" : ""}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="nav-resume" href={profile.resume} download>Resume ⬇</a>
      </nav>
    </header>
  );
}
