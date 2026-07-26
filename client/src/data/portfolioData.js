// ────────────────────────────────────────────────────────────────
// Edit this file to update everything on the site. No component
// changes needed — the UI reads from here.
// ────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Chandra Kireeti Kotturi',
  shortName: 'Kireeti',
  initials: 'CK',
  role: 'Full-Stack Developer',
  tagline: 'Building scalable, asynchronous web apps with the MERN stack — and shipping GenAI pipelines on top of them.',
  location: 'Hyderabad, India',
  email: 'kireetikotturi2@gmail.com',
  phone: '+91 7989919952',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
    leetcode: 'https://leetcode.com/',
  },
  // Shown in the terminal hero as a typed command output
  terminalLines: [
    { command: 'whoami', output: 'kireeti — full-stack developer (MERN)' },
    { command: 'stack --list', output: 'React · Node.js · Express · MongoDB · TypeScript · FastAPI' },
    { command: 'status', output: 'open to Frontend / Full-Stack / FDE roles' },
  ],
  stats: [
    { label: 'DSA problems solved', value: '200+' },
    { label: 'Shipped projects', value: '4' },
    { label: 'Internship', value: 'Blujay Tech' },
  ],
};

export const about = {
  paragraphs: [
    "I'm a full-stack developer who works end to end — React and TypeScript on the frontend, Node.js/Express and FastAPI on the backend, and PostgreSQL/MongoDB underneath. Most of what I build ends up talking to an LLM somewhere: ATS scoring pipelines, tutoring assistants, resume analysis — real product features powered by the Gemini API, not demos.",
    "I care about the parts that don't show up in a screenshot: stateless JWT auth done right, tenant-scoped data isolation, webhook signature verification, and frontend session handling that survives the back button. I graduated with a B.Tech in Computer Science from KL University and completed AccioJob's MERN Stack program.",
  ],
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'KL University, Vijayawada',
    years: '2020 – 2024',
    detail: 'CGPA: 8.2',
  },
};

export const experience = [
  {
    role: 'Web Developer — Intern',
    company: 'Blujay Technologies',
    period: 'Oct 2025 – Jun 2026',
    points: [
      'Designed and developed a complete e-learning web platform supporting online IT courses and student onboarding.',
      'Built responsive UIs with React.js and implemented backend functionality with Node.js.',
      'Created course pages, registration systems, and secure login/signup including Google OAuth authentication.',
      'Integrated student dashboards, booking functionality, blog management, and form validation.',
    ],
  },
];

export const projects = [
  {
    id: 'joblens',
    name: 'JobLens',
    tagline: 'AI-Powered Job Market Analyzer',
    description:
      'A multi-tenant, full-stack SaaS enabling recruiters and job seekers to upload job datasets and analyze market trends via real-time MongoDB aggregation pipelines. Includes a GenAI-powered ATS scoring pipeline (Gemini) combining a local keyword pre-filter with generative resume matching to cut API latency and cost.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'Stripe', 'JWT'],
    highlights: [
      'Stateless JWT auth with httpOnly cookies + strict tenant-scoped data isolation',
      'Tiered Stripe subscriptions with cryptographically verified webhook sync',
      'Resilient bfcache restoration and cross-tab auth state consistency',
    ],
    github: 'https://github.com/kireetikotturu/AI-Job-Analyser',
    demo: 'https://ai-job-analyser-three.vercel.app/',
    status: 'live',
  },
  {
    id: 'studyassistantpro',
    name: 'StudyAssistantPro',
    tagline: 'AI Tutor Platform',
    description:
      'A full-stack async e-learning monorepo pairing a React SPA with a high-concurrency FastAPI backend, using SQLAlchemy Async and asyncpg against a serverless PostgreSQL (Neon) database.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy Async', 'Gemini API', 'Stripe'],
    highlights: [
      'Context-aware GenAI tutoring pipeline with tier-based (free/pro) system prompts',
      'Stateless JWT verification secured with Passlib Bcrypt password hashing',
      'Automated subscription lifecycle via Stripe Checkout + signature-verified webhooks',
    ],
    github: 'https://github.com/kireetikotturu/study-assistant-pro',
    demo: 'https://study-assistant-pro.vercel.app/chat',
    status: 'live',
  },
  {
    id: 'trackfi',
    name: 'TrackFi',
    tagline: 'Personal Finance Tracker',
    description:
      'A type-safe, responsive personal finance tracker with strict interfaces and union types enforcing compile-time safety across income/expense data.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase Auth', 'Recharts'],
    highlights: [
      'Email + Google sign-in via Firebase Auth, typed global auth state via React Context',
      'Dynamic Pie / Bar / Line charts from typed, chart-ready Firestore aggregates',
      'Search, filter, sort, and transaction reset across a mobile-first UI',
    ],
    github: 'https://github.com/kireetikotturu/ExpenseTrackerAccio',
    demo: 'https://expense-tracker-accio.vercel.app/',
    status: 'live',
  },
  {
    id: 'elearning',
    name: 'E-Learning Platform',
    tagline: 'Built during internship at Blujay Technologies',
    description:
      'A complete e-learning platform supporting online IT courses and student onboarding, with course pages, registration, secure login/signup with Google OAuth, dashboards, booking, and blog management.',
    stack: ['React', 'Node.js', 'Express', 'Google OAuth'],
    highlights: [
      'Responsive UI built with React.js',
      'Secure login/signup including Google OAuth authentication',
      'Student dashboards, booking functionality, and blog management system',
    ],
    status: 'internship',
  },
];

export const skills = {
  languages: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'],
  frontend: ['React.js', 'React Router', 'Context API', 'Tailwind CSS', 'Vite'],
  backend: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  ai: ['Google Gemini API', 'LLM-based pipelines', 'Prompt engineering'],
  databases: ['PostgreSQL', 'MongoDB (Mongoose)', 'Firestore', 'SQLite'],
  tools: ['Git', 'GitHub', 'Postman', 'Netlify', 'Render', 'Vercel', 'VS Code', 'Firebase Console'],
};

export const achievements = [
  'Solved 200+ Data Structures & Algorithms problems on LeetCode and competitive programming platforms.',
  'Completed the MERN Stack program at AccioJob, focused on hands-on full-stack development.',
];
