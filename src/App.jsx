import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaAward,
  FaBrain,
  FaMicrochip,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

// ── Typewriter Hook ───────────────────────────────────────────────────────────
function useTypewriter(words, speed = 100, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }
    setText(current.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return text;
}

// ── Brand SVG Icons ───────────────────────────────────────────────────────────
const HTMLIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <path fill="var(--accent)" d="M5 3l1.9 21.4L16 27l9.1-2.6L27 3z" />
    <path fill="rgba(255,255,255,0.2)" d="M16 25.4V5H5.9l1.6 18.1z" />
    <path
      fill="var(--bg)"
      d="M16 13H11.3l-.3-3.6H16V6H8l.8 9H16zm0 6.8l-.1.1-4-1.1-.3-3H9l.5 5.5 6.5 1.8z"
    />
    <path fill="#ccc" d="M16 13v3.3h4.4l-.4 4.4-4 1.1V25l6.5-1.8L23 9h-7v4z" />
  </svg>
);

const CSSIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <path fill="var(--accent)" d="M5 3l1.9 21.4L16 27l9.1-2.6L27 3z" />
    <path fill="rgba(255,255,255,0.2)" d="M16 25.4V5H5.9l1.6 18.1z" />
    <path
      fill="#ccc"
      d="M16 13H8.6l.3 3.4H16V13zm0-7H8l.3 3.4H16V6zm0 13.8l-.1.1-4-1.1-.3-3.1H8.4l.5 5.5 7.1 2z"
    />
    <path
      fill="var(--bg)"
      d="M16 13v3.4h7.1l-.7 6.4-6.4 1.8V28l7.1-2 .1-.5 1.1-12.5H16zm0-7v3.4h10.7l-.1-.9-.3-2.5H16z"
    />
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <rect width="32" height="32" rx="0" fill="var(--accent)" />
    <path
      fill="#000"
      d="M18.7 22.8c.5.8 1.1 1.4 2.3 1.4 1 0 1.6-.5 1.6-1.1 0-.8-.6-1.1-1.8-1.5l-.6-.3c-1.8-.8-3-1.8-3-3.8 0-1.9 1.4-3.3 3.7-3.3 1.6 0 2.7.6 3.5 2l-1.9 1.2c-.4-.8-.9-1.1-1.6-1.1-.7 0-1.1.5-1.1 1.1 0 .8.5 1.1 1.6 1.5l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.5-4.1 3.5-2.3 0-3.7-1.1-4.5-2.5l2-.9zM11.6 23c.4.6.7 1.2 1.5 1.2.7 0 1.2-.3 1.2-1.4V14.4h2.4v8.5c0 2.3-1.3 3.3-3.3 3.3-1.7 0-2.8-.9-3.3-2l1.5-.9v.7z"
    />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23 23 20.46" width="28" height="28">
    <circle cx="0" cy="0" r="2.05" fill="var(--accent)" />
    <g stroke="var(--accent)" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <path fill="var(--accent)" d="M16 3L3 10.3v14.4L16 32l13-7.3V10.3z" />
    <path fill="rgba(255,255,255,0.15)" d="M16 3L3 10.3v14.4L16 32V3z" />
    <path
      fill="#ccc"
      d="M16 8.6c-.4 0-.7.1-1 .3L9.3 12.2c-.6.4-1 1-.9 1.7v7.1c0 .7.4 1.3 1 1.7l5.7 3.3c.6.4 1.4.4 2 0l5.7-3.3c.6-.4 1-1 1-1.7v-7.1c0-.7-.4-1.3-1-1.7l-5.7-3.3c-.4-.2-.7-.3-1.1-.3zm0 2.1c.1 0 .3 0 .4.1l4 2.3-4.4 2.5-4.4-2.5 4-2.3c.1 0 .3-.1.4-.1zM10.3 14l4.6 2.6v5.2l-4.2-2.4a.7.7 0 01-.4-.6V14zm11.4 0v4.8c0 .3-.1.5-.4.6L17 21.8v-5.2l4.7-2.6z"
    />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <path
      fill="var(--accent)"
      d="M16 6.4C11.7 6.4 9.1 8.6 8 12.9c1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3.1 2.2 1.6 1.6 3.4 3.5 7.3 3.5 4.3 0 6.9-2.2 8-6.5-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3.1-2.2C21.7 8.2 19.9 6.4 16 6.4zM8 19.1c-4.3 0-6.9 2.2-8 6.5 1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3.1 2.2 1.6 1.6 3.4 3.5 7.3 3.5 4.3 0 6.9-2.2 8-6.5-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3.1-2.2C13.7 20.9 11.9 19.1 8 19.1z"
    />
  </svg>
);

// ── Data Arrays ───────────────────────────────────────────────────────────────
const skills = [
  { name: "HTML", Icon: HTMLIcon },
  { name: "CSS", Icon: CSSIcon },
  { name: "JavaScript", Icon: JSIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "Tailwind", Icon: TailwindIcon },
];

const projects = [
  {
    num: "01",
    title: "Spotify Clone",
    desc: "A full-stack Spotify clone with real audio playback, responsive UI, and an immersive music streaming experience.",
    tags: [" React", " Tailwind CSS", "FastAPI"],
    link: "https://github.com/Srush6007/Spotify-Clone-Music-Player",
    gradient: "linear-gradient(135deg, #cccccc, #888888)",
    glow: "#cccccc",
    image: "/spotify.jpg",
  },
  {
    num: "02",
    title: "Pantry Chef",
    desc: "A smart cooking companion that helps users discover recipes instantly based on the ingredients they already have.",
    tags: ["HTML", "CSS", "JavaScript", "UNSPLASH API"],
    link: "https://github.com/srush6007/pantry-chef",
    gradient: "linear-gradient(135deg, #ffffff, #aaaaaa)",
    glow: "#ffffff",
    image: "/pantry.jpg",
  },
  {
    num: "03",
    title: "NeerSetu Hydration Tracker",
    desc: "NeerSetu is a smart hydration tracking PWA with AI-powered insights, adaptive goals, reminders, analytics, and offline support.",
    tags: ["React", "TypeScript", "Supabase", "Google Gemini API", "PWA"],
    link: "https://github.com/Srush6007/NeerSetu",
    gradient: "linear-gradient(135deg, #eeeeee, #aaaaaa)",
    glow: "#eeeeee",
    image: "/neer.jpg",
  },
];

const achievements = [
  {
    year: "2024",
    title: "AICTE & Google AI-ML Internship",
    desc: "Completed a rigorous 10-week virtual internship focusing on Artificial Intelligence and Machine Learning, supported by AICTE, EduSkills, and Google for Developers.",
    gradient: "linear-gradient(135deg, #ffffff, #aaaaaa)",
    glow: "#ffffff",
    icon: <FaAward />,
    link: "/aicte-cert.pdf",
  },
  {
    year: "2026",
    title: "Infosys AI Primer",
    desc: "Earned a comprehensive certification validating core competencies in Artificial Intelligence from Infosys Springboard.",
    gradient: "linear-gradient(135deg, #eeeeee, #888888)",
    glow: "#eeeeee",
    icon: <FaBrain />,
    link: "/ai-primer-cert.pdf",
  },
  {
    year: "2026",
    title: " Natural Language Processing",
    desc: "Successfully completed specialized technical coursework in the field of Natural Language Processing.",
    gradient: "linear-gradient(135deg, #cccccc, #777777)",
    glow: "#cccccc",
    icon: <FaMicrochip />,
    link: "/nlp-cert.pdf",
  },
];

const education = [
  {
    year: "2023 — 2027",
    degree: "B.E in Electronics & Computer Science",
    school: "Don Bosco College of Engineering, Margao Goa",
    gradient: "linear-gradient(135deg, #ffffff, #999999)",
    glow: "#ffffff",
    icon: "❖",
  },
  {
    year: "2021 — 2023",
    degree: "HSC",
    school: "Loyola Higher Secondary School,  Margao, Goa",
    gradient: "linear-gradient(135deg, #cccccc, #777777)",
    glow: "#cccccc",
    icon: "⟡",
  },
];

const marqueeSkills = [...skills, ...skills, ...skills, ...skills];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  const typedText = useTypewriter(
    ["Learning Web Development", "Exploring AI"],
    90,
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #080808;
          --border: rgba(255,255,255,0.2);
          --border-soft: rgba(255,255,255,0.06);
          --accent: #e0e0e0;
          --accent2: #aaaaaa;
          --accent3: #ffffff;
          --text: #f0f0f0;
          --muted: #555555;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: 'Rajdhani', sans-serif; overflow-x: hidden; }
        ::selection { background: var(--accent3); color: #000; }

        body::before {
          content: ''; position: fixed; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px; pointer-events: none; z-index: -2;
        }
        body::after {
          content: ''; position: fixed; top: 50%; left: 80%; transform: translate(-50%, -50%);
          width: 800px; height: 800px; border-radius: 50%;
          border: 1px dashed rgba(255,255,255,0.1); opacity: 1; z-index: -1;
          animation: spin 40s linear infinite; pointer-events: none;
        }
        @keyframes spin { 100% { transform: translate(-50%, -50%) rotate(360deg); } }

        .blob { position: fixed; border-radius: 50%; filter: blur(140px); pointer-events: none; z-index: 0; }
        .blob-1 { width:600px;height:600px;background:radial-gradient(circle,rgba(255,255,255,.06),transparent 70%);top:-200px;right:-100px;animation:blobFloat 12s ease-in-out infinite; }
        .blob-2 { width:500px;height:500px;background:radial-gradient(circle,rgba(180,180,180,.05),transparent 70%);bottom:100px;left:-150px;animation:blobFloat 15s ease-in-out infinite reverse; }
        .blob-3 { width:300px;height:300px;background:radial-gradient(circle,rgba(255,255,255,.04),transparent 70%);top:50%;left:50%;animation:blobFloat 10s ease-in-out infinite 3s; }

        .portfolio-wrap { position: relative; z-index: 1; }

        .nav {
          position:fixed; top:24px; left:50%; transform:translateX(-50%);
          z-index:100; background:rgba(8,8,8,0.92); backdrop-filter:blur(10px);
          border-bottom: 2px solid rgba(255,255,255,0.3);
          clip-path: polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
          padding:14px 40px; display:flex; justify-content: space-between; align-items: center;
          width: 90%; max-width: 1100px; 
          animation:fadeDown .7s cubic-bezier(.22,1,.36,1) forwards;
          filter: drop-shadow(0 0 12px rgba(255,255,255,0.08));
        }
        
        .nav-brand {
          font-family: 'Chakra Petch', sans-serif; 
          font-size: 26px;
          font-weight: 800; 
          color: var(--text); 
          letter-spacing: 0.05em; 
          text-decoration: none;
          text-transform: uppercase;
          line-height: 0.9;
        }
        .nav-brand::after { display: none !important; }
        
        .nav-links { display: flex; gap: 36px; align-items: center; }
        .nav-links a { font-family:'Chakra Petch',sans-serif; font-size:14px; font-weight:700; letter-spacing:.1em; color:var(--muted); text-decoration:none; text-transform:uppercase; transition:all .25s; position:relative; }
        .nav-links a::after { content:''; position:absolute; bottom:-4px; left:0; right:0; height:2px; background:var(--accent3); transform:scaleX(0); transition:transform .25s; }
        .nav-links a:hover { color:var(--text); text-shadow: 0 0 8px rgba(255,255,255,0.5); }
        .nav-links a:hover::after { transform:scaleX(1); }

        .hero { min-height:100vh; display:flex; align-items:center; max-width:1100px; margin:0 auto; padding:120px 40px 60px; }
        .hero-inner { display:grid; grid-template-columns:1fr auto; align-items:center; gap:80px; width:100%; }

        .hero-eyebrow { display:inline-flex; align-items:center; gap:10px; font-size:13px; font-family:'Chakra Petch',sans-serif; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--accent2); border-left:4px solid var(--accent2); background:rgba(255,255,255,0.05); clip-path:polygon(0 0,100% 0,calc(100% - 10px) 100%,0 100%); padding:8px 24px 8px 12px; margin-bottom:32px; }
        .badge-dot { width:8px; height:8px; background:var(--accent3); border-radius:0; box-shadow:0 0 8px var(--accent3); animation:pulse 2s ease infinite; }

        .hero h1 { font-family:'Chakra Petch',sans-serif; font-size:clamp(44px,6vw,84px); font-weight:700; line-height:1.0; letter-spacing:-.02em; margin-bottom:24px; text-transform:uppercase; }
        
        .typewriter-wrap { display:inline-block; min-height:1.1em; background:linear-gradient(135deg,#ffffff 0%,#aaaaaa 50%,#eeeeee 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .typewriter-cursor { display:inline-block; background:var(--accent3); width:8px; height:0.8em; margin-left:6px; animation:blink .7s step-end infinite; }

        .hero-sub { color:var(--muted); font-size:20px; font-weight:500; max-width:480px; line-height:1.6; margin-bottom:40px; border-left:2px solid var(--border); padding-left:16px; }
        .hero-btns { display:flex; gap:20px; flex-wrap:wrap; }

        .btn-primary { padding:16px 32px; background:var(--accent3); color:#000; font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:15px; text-transform:uppercase; letter-spacing:.1em; border:none; cursor:pointer; text-decoration:none; display:inline-block; clip-path:polygon(15px 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,0 100%,0 15px); transition:transform .2s,filter .3s; filter:drop-shadow(0 0 12px rgba(255,255,255,0.25)); }
        .btn-primary:hover { transform:translateY(-3px); filter:drop-shadow(0 0 22px rgba(255,255,255,0.55)); background:#fff; }

        .btn-ghost { padding:16px 32px; background:rgba(255,255,255,0.04); color:var(--accent3); font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:15px; text-transform:uppercase; letter-spacing:.1em; border:1px solid rgba(255,255,255,0.25); cursor:pointer; text-decoration:none; display:inline-block; clip-path:polygon(15px 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,0 100%,0 15px); transition:all .2s; }
        .btn-ghost:hover { background:rgba(255,255,255,0.1); text-shadow:0 0 8px rgba(255,255,255,0.5); }

        .pfp-wrap { position:relative; flex-shrink:0; }
        .pfp-orbit { position:absolute; inset:-20px; border-radius:50%; border:2px dashed rgba(255,255,255,0.2); animation:spin-slow 20s linear infinite; }
        .pfp-orbit::before { content:''; position:absolute; width:12px; height:12px; background:var(--accent3); border-radius:0; top:50%; right:-6px; transform:translateY(-50%); box-shadow:0 0 16px rgba(255,255,255,0.6); }
        .pfp-ring { width:210px; height:210px; border-radius:50%; border:2px solid rgba(255,255,255,0.3); padding:10px; box-shadow:0 0 20px rgba(255,255,255,0.08); }
        .pfp-inner { width:100%; height:100%; border-radius:50%; background:rgba(255,255,255,0.05); display:flex; align-items:center; justify-content:center; border:1px dashed rgba(255,255,255,0.15); overflow:hidden; }
        .pfp-inner img { width: 100%; height: 100%; object-fit: cover; }

        .hero-stats { display:flex; gap:40px; margin-top:56px; padding-top:32px; border-top:1px dashed rgba(255,255,255,0.12); }
        .stat-num { font-family:'Chakra Petch',sans-serif; font-size:32px; font-weight:700; color:#fff; text-shadow:0 0 10px rgba(255,255,255,0.4); }
        .stat-label { font-family:'Chakra Petch',sans-serif; font-size:13px; color:var(--muted); margin-top:4px; text-transform:uppercase; letter-spacing:.1em; }

        .sec { max-width:1100px; margin:0 auto; padding:120px 40px; }
        .sec-label { font-family:'Chakra Petch',sans-serif; font-size:14px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:var(--accent2); margin-bottom:14px; display:flex; align-items:center; gap:10px; }
        .sec-label::before { content:''; width:24px; height:2px; background:var(--accent2); }
        h2.sec-title { font-family:'Chakra Petch',sans-serif; font-size:clamp(30px,4vw,52px); font-weight:700; letter-spacing:-.02em; margin-bottom:60px; line-height:1.1; text-transform:uppercase; color:#fff; }
        h2.sec-title span { color:var(--accent3); }

        .marquee-wrap { overflow:hidden; border-top:1px solid var(--border); border-bottom:1px solid var(--border); background:rgba(255,255,255,0.01); padding:20px 0; }
        .marquee-track { display:flex; gap:24px; width:max-content; animation:marquee 20s linear infinite; }
        .marquee-track:hover { animation-play-state:paused; }
        .skill-pill { display:flex; align-items:center; gap:12px; padding:14px 26px; border:1px solid var(--border); color:var(--accent); font-family:'Chakra Petch',sans-serif; font-size:15px; font-weight:600; text-transform:uppercase; clip-path:polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%); transition:all .25s; cursor:default; background:rgba(255,255,255,0.02); }
        .skill-pill:hover { background:rgba(255,255,255,0.07); box-shadow:0 0 15px rgba(255,255,255,0.08); color:#fff; }

        .projects-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:32px; }
        .achievements-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:32px; }
        .achiev-icon { font-size:32px; margin-bottom:16px; display:block; }

        .grad-card { padding:32px; position:relative; background:rgba(10,10,10,0.95); border:1px solid rgba(255,255,255,0.12); clip-path:polygon(20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%,0 20px); transition:transform .3s,border-color .3s; display:flex; flex-direction:column; }
        .grad-card:hover { transform:translateY(-8px); border-color:rgba(255,255,255,0.35); background:rgba(255,255,255,0.03); }
        .grad-card .card-bg { display:none; }
        .grad-card .card-glow { position:absolute; width:150px; height:150px; border-radius:50%; filter:blur(60px); opacity:.1; transition:opacity .4s; pointer-events:none; top:-50px; right:-50px; z-index:0; }
        .grad-card:hover .card-glow { opacity:.25; }
        .grad-card .card-content { position:relative; z-index:2; flex-grow:1; display:flex; flex-direction:column; }
        .grad-card .card-shine { position:absolute; top:0; left:0; width:100%; height:3px; z-index:3; }

        .project-num { font-family:'Chakra Petch',sans-serif; font-size:12px; font-weight:700; color:var(--accent2); background:rgba(255,255,255,0.05); padding:4px 10px; width:fit-content; margin-bottom:20px; text-transform:uppercase; border:1px solid rgba(255,255,255,0.1); }
        
        .project-image-wrap { width: 100%; height: 180px; overflow: hidden; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--border-soft); }
        .project-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .grad-card:hover .project-image { transform: scale(1.05); }

        .project-title { font-family:'Chakra Petch',sans-serif; font-size:24px; font-weight:700; margin-bottom:14px; text-transform:uppercase; color:#fff; }
        .project-desc { color:var(--muted); font-size:16px; font-weight:500; line-height:1.6; margin-bottom:24px; flex-grow:1; }
        .project-tags { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px; }
        .tag { font-size:12px; font-family:'Chakra Petch',sans-serif; font-weight:600; padding:4px 12px; background:rgba(255,255,255,0.04); color:var(--accent); border:1px solid rgba(255,255,255,0.12); text-transform:uppercase; }
        .project-link { display:inline-flex; align-items:center; gap:8px; font-family:'Chakra Petch',sans-serif; font-size:14px; font-weight:700; color:var(--accent); text-decoration:none; background:none; border:none; cursor:pointer; padding:0; transition:gap .2s,text-shadow .2s; text-transform:uppercase; margin-top:auto; }
        .project-link:hover { gap:12px; color:#fff; text-shadow:0 0 8px rgba(255,255,255,0.4); }

        .education-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:32px; }
        .edu-icon { font-size:36px; margin-bottom:20px; display:block; color:var(--accent); }
        .edu-year { font-family:'Chakra Petch',sans-serif; font-size:13px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--accent2); margin-bottom:10px; }
        .edu-degree { font-family:'Chakra Petch',sans-serif; font-size:22px; font-weight:700; color:#fff; margin-bottom:6px; text-transform:uppercase; }
        .edu-school { color:var(--muted); font-size:16px; font-weight:500; }

        .contact-grid { display:grid; grid-template-columns:1fr 1.6fr; gap:48px; align-items:start; }
        .contact-cards { display:flex; flex-direction:column; gap:16px; }
        .contact-info-header h3 { font-family:'Chakra Petch',sans-serif; font-size:32px; font-weight:700; color:#fff; margin-bottom:16px; text-transform:uppercase; }
        .contact-info-header p { color:var(--muted); font-size:16px; font-weight:500; line-height:1.6; margin-bottom:32px; border-left:2px solid var(--border); padding-left:16px; }

        .social-grad-card { display:flex; align-items:center; gap:16px; padding:16px 20px; text-decoration:none; color:var(--accent); font-family:'Chakra Petch',sans-serif; font-size:15px; font-weight:600; text-transform:uppercase; transition:all .2s; background:rgba(0,0,0,0.6); border:1px solid rgba(255,255,255,0.12); clip-path:polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%); }
        .social-grad-card:hover { background:rgba(255,255,255,0.07); color:#fff; border-color:rgba(255,255,255,0.35); padding-left:24px; }

        .form-card { background:rgba(10,10,10,0.95); border:1px solid rgba(255,255,255,0.12); padding:40px; clip-path:polygon(20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%,0 20px); }
        .form-field { margin-bottom:20px; }
        .form-field input,.form-field textarea { width:100%; padding:16px 20px; background:rgba(0,0,0,0.7); border:1px solid rgba(255,255,255,0.1); color:var(--text); font-family:'Rajdhani',sans-serif; font-weight:600; font-size:16px; outline:none; transition:all .25s; resize:none; clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px); }
        .form-field input:focus,.form-field textarea:focus { border-color:rgba(255,255,255,0.4); box-shadow:0 0 15px rgba(255,255,255,0.06); }
        .form-field input::placeholder,.form-field textarea::placeholder { color:var(--muted); }
        .btn-full { width:100%; display:block; text-align:center; margin-top:10px; }

        footer { position:relative; z-index:1; text-align:center; padding:32px; border-top:1px solid rgba(255,255,255,0.1); color:var(--muted); font-size:14px; font-family:'Chakra Petch',sans-serif; letter-spacing:.1em; text-transform:uppercase; }
        footer span { color:#fff; font-weight:700; }

        .reveal { opacity:0; transform:translateY(32px); transition:opacity .6s ease,transform .6s ease; }
        .reveal.visible { opacity:1; transform:translateY(0); }
        .reveal-delay { transition-delay:.15s; }

        @keyframes fadeDown { from{opacity:0;transform:translateX(-50%) translateY(-20px)}to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @keyframes marquee { from{transform:translateX(0)}to{transform:translateX(-50%)} }
        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 8px rgba(255,255,255,0.5)}50%{opacity:.6;box-shadow:0 0 16px rgba(255,255,255,0.8)} }
        @keyframes spin-slow { from{transform:rotate(0deg)}to{transform:rotate(360deg)} }
        @keyframes blobFloat { 0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(30px,-20px) scale(1.05)}66%{transform:translate(-20px,15px) scale(.95)} }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }

        @media(max-width:900px){ .projects-grid{grid-template-columns:1fr} .education-grid{grid-template-columns:1fr} .contact-grid{grid-template-columns:1fr;gap:40px} .achievements-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:700px){ 
          .hero-inner{grid-template-columns:1fr} 
          .pfp-wrap{display:none} 
          .nav{ padding:16px 20px; width:90%; flex-direction:column; gap:12px; clip-path:none; border-radius:12px; } 
          .nav-brand { margin-bottom: 4px; }
          .nav-links { gap: 16px; flex-wrap: wrap; justify-content: center; }
          .hero-stats{gap:24px;flex-wrap:wrap} .sec{padding:80px 24px} .hero{padding:120px 24px 60px} .form-card{padding:24px} 
          .achievements-grid{grid-template-columns:1fr}
        }
      `}</style>

      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <nav className="nav">
        <a href="#home" className="nav-brand">
          <div>SRUSHTI</div>
          <div>HARKARE</div>
        </a>
        <div className="nav-links">
          <a href="#home">home</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#achievements">achievements</a>
          <a href="#education">education</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <div className="portfolio-wrap">
        <section id="home" className="hero">
          <motion.div
            className="hero-inner"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="hero-eyebrow">
                <span className="badge-dot" />
                Available for internships
              </div>

              <h1>
                <span className="typewriter-wrap">
                  {typedText}
                  <span className="typewriter-cursor"></span>
                </span>
              </h1>

              <p className="hero-sub">
                I create visually engaging and user-friendly interfaces that
                blend design, performance, and functionality.
              </p>
              <div className="hero-btns">
                <a href="#projects" className="btn-primary">
                  <span>View Projects</span>
                </a>
                <a href="#contact" className="btn-ghost">
                  Get in Touch
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <div className="stat-num">3+</div>
                  <div className="stat-label">Projects Built</div>
                </div>
                <div>
                  <div className="stat-num">5+</div>
                  <div className="stat-label">Skills Mastered</div>
                </div>
                <div>
                  <div className="stat-num">∞</div>
                  <div className="stat-label">Passion for Code</div>
                </div>
              </div>
            </div>

            <div className="pfp-wrap">
              <div className="pfp-orbit" />
              <div className="pfp-ring">
                <div className="pfp-inner">
                  <img src="/profile.jpg" alt="Srushti Harkare" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="sec">
          <div className="reveal">
            <p className="sec-label">What I work with</p>
            <h2 className="sec-title">
              My <span>Skills</span>
            </h2>
          </div>
          <div className="marquee-wrap reveal reveal-delay">
            <div className="marquee-track">
              {marqueeSkills.map((s, i) => (
                <div key={i} className="skill-pill">
                  <s.Icon />
                  {s.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="sec">
          <div className="reveal">
            <p className="sec-label">What I've built</p>
            <h2 className="sec-title">
              Featured <span>Projects</span>
            </h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="grad-card reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="card-bg" />
                <div
                  className="card-shine"
                  style={{ background: project.gradient }}
                />
                <div
                  className="card-glow"
                  style={{ background: project.glow }}
                />
                <div className="card-content">
                  <div className="project-num">Project — {project.num}</div>

                  <div className="project-image-wrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>

                  <div className="project-title">{project.title}</div>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS & ACHIEVEMENTS SECTION ───────────────────────────────────── */}
        <section id="achievements" className="sec">
          <div className="reveal">
            <p className="sec-label">What I've done</p>
            <h2 className="sec-title">
              Certifications <span>&amp; Achievements</span>
            </h2>
          </div>
          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="grad-card reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="card-bg" />
                <div
                  className="card-shine"
                  style={{ background: item.gradient }}
                />
                <div className="card-glow" style={{ background: item.glow }} />
                <div className="card-content">
                  <span className="achiev-icon">{item.icon}</span>
                  <div className="edu-year">{item.year}</div>
                  <div
                    className="project-title"
                    style={{ fontSize: "20px", marginBottom: "8px" }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="project-desc"
                    style={{
                      fontSize: "14px",
                      marginBottom: "20px",
                      flexGrow: 1,
                    }}
                  >
                    {item.desc}
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    style={{ marginTop: "auto" }}
                  >
                    View Credential <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="education" className="sec">
          <div className="reveal">
            <p className="sec-label">My background</p>
            <h2 className="sec-title">
              Education <span>&amp; Journey</span>
            </h2>
          </div>
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="grad-card reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="card-bg" />
                <div
                  className="card-shine"
                  style={{ background: edu.gradient }}
                />
                <div className="card-glow" style={{ background: edu.glow }} />
                <div className="card-content">
                  <span className="edu-icon">{edu.icon}</span>
                  <div className="edu-year">{edu.year}</div>
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-school">{edu.school}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="sec">
          <div className="reveal">
            <p className="sec-label">Let's connect</p>
            <h2 className="sec-title">
              Get in <span>Touch</span>
            </h2>
          </div>
          <div className="contact-grid">
            <div className="reveal">
              <div className="contact-info-header">
                <h3>Let's build something amazing together.</h3>
                <p>
                  Looking forward to connecting and working on exciting
                  projects.
                </p>
              </div>
              <div className="contact-cards">
                <a href="tel:+919356213617" className="social-grad-card">
                  <MdPhone size={20} />
                  +91 93562 13617
                </a>

                <a
                  href="mailto:srushtiharkare2005@gmail.com"
                  className="social-grad-card"
                >
                  <MdEmail size={20} />
                  srushtiharkare2005@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/srushti-harkare-a8517b325/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-grad-card"
                >
                  <FaLinkedin size={18} />
                  linkedin.com/in/srushti-harkare
                </a>
                <a
                  href="https://github.com/srush6007"
                  target="_blank"
                  rel="noreferrer"
                  className="social-grad-card"
                >
                  <FaGithub size={18} />
                  github.com/srush6007
                </a>
              </div>
            </div>
            <div className="reveal reveal-delay">
              <div className="form-card">
                <div className="form-field">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-field">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-field">
                  <textarea rows="5" placeholder="Your Message..." />
                </div>
                <button type="button" className="btn-primary btn-full">
                  <span>Send Message →</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        © 2026 <span>Srushti Harkare</span> — Designed &amp; Built with ⚡
      </footer>
    </>
  );
}
