import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 {profile.fullName}. Designed and built with React.</p>
    </footer>
  );
}
