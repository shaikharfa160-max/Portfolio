// Change your details here. The whole portfolio updates from this one file.

export const GITHUB_USER = "shaikharfa160-max";

export const profile = {
  name: "Arfa",
  fullName: "Shaikh Arfa",
  location: "Mumbai, India",
  email: "shaikharfa160@gmail.com",
  linkedin: "https://www.linkedin.com/in/arfa-shaikh-07a82b380",
  github: `https://github.com/${GITHUB_USER}`,
  resume: "/Arfa_Resume.pdf", // put your resume PDF inside the "public" folder with this name
};

// Words that are typed again and again in the hero section
export const roles = ["Front-End Developer", "Web Designer", "Creative Coder"];

export const skillGroups = [
  {
    title: "Front-End",
    skills: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React.js", icon: "⚛️" },
    ],
  },
  {
    title: "Databases (Concepts)",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "SQL", icon: "🗄️" },
    ],
  },
  {
    title: "Programming (Basics)",
    skills: [
      { name: "C", icon: "🔧" },
      { name: "C++", icon: "⚙️" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "CodeNova",
    category: "React",
    description:
      "An interactive platform that teaches DSA, OOP and Cryptography with step-by-step visuals, quizzes, 1v1 duels and competitions. I built its front-end.",
    tags: ["React", "JavaScript", "CSS"],
    github: `https://github.com/${GITHUB_USER}/CodeNova`,
    live: "https://code-nova-ashen.vercel.app",
  },
  {
    id: 3,
    title: "NutriPredict",
    category: "Python",
    description:
      "An AIML micro project that predicts daily calorie requirement using Machine Learning and suggests a matching diet plan.",
    tags: ["Python", "Flask", "Scikit-learn"],
    github: `https://github.com/${GITHUB_USER}/NutriPredict`,
    live: "https://nutri-predict-sigma.vercel.app",
  },
  {
    id: 4,
    title: "Currency Converter",
    category: "JavaScript",
    description:
      "Converts money between world currencies using live exchange rates, with country flags for every currency.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: `https://github.com/${GITHUB_USER}/Currency-Converter`,
    live: "https://currency-converter-ecru-seven.vercel.app",
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    category: "JavaScript",
    description: "A two player Tic Tac Toe game that finds the winner automatically and lets you restart anytime.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: `https://github.com/${GITHUB_USER}/Tic-Tac-Toe`,
    live: "https://tictactoe-rho-five.vercel.app",
  },
  {
    id: 6,
    title: "Rock Paper Scissors",
    category: "JavaScript",
    description: "Play Rock Paper Scissors against the computer and keep track of your score.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: `https://github.com/${GITHUB_USER}/Rock-Paper-Scissors`,
    live: "https://rock-paper-scissors-dun-sigma.vercel.app",
  },
];

export const filters = ["All", "React", "JavaScript", "Python"];

export const about = {
  paragraphs: [
    "I'm a Computer Engineering student at Government Polytechnic, Mumbai, who enjoys turning ideas into clean, easy-to-use web interfaces.",
    "I work with HTML, CSS, JavaScript and React.js, and I pay a lot of attention to small design details like spacing, colours and animation. I have learned databases such as MongoDB and SQL in theory, and I know the basics of C, C++, Python and Java.",
  ],
  education: {
    degree: "Diploma in Computer Engineering",
    place: "Government Polytechnic, Mumbai",
    time: "2024 – Present · 6th Semester",
  },
  hobbies: ["Painting", "Sketching"],
  languages: ["Hindi", "English", "Urdu"],
};
