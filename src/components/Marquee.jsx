const words = ["HTML", "CSS", "JavaScript", "React.js", "UI Design", "Web Development"];

// A tilted band with words that keep moving. The list is repeated so the loop has no gap.
export default function Marquee() {
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div className="marquee-wrap">
      <div className="marquee">
        <div className="marquee-track">
          {repeated.map((word, i) => (
            <span key={i}>{word} <b>✦</b></span>
          ))}
        </div>
      </div>
    </div>
  );
}
