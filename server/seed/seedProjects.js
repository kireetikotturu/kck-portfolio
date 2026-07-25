import 'dotenv/config';
import mongoose from 'mongoose';
import Project from '../models/Project.js';

const projects = [
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
    github: 'https://github.com/',
    demo: 'https://example.com/',
    status: 'live',
    order: 1,
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
    github: 'https://github.com/',
    demo: 'https://example.com/',
    status: 'live',
    order: 2,
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
    github: 'https://github.com/',
    demo: 'https://example.com/',
    status: 'live',
    order: 3,
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
    github: 'https://github.com/',
    demo: 'https://example.com/',
    status: 'internship',
    order: 4,
  },
];

async function seed() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('❌ MONGO_URI is not set in server/.env — cannot seed.');
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log('✅ Connected to MongoDB');

  for (const project of projects) {
    await Project.findOneAndUpdate({ id: project.id }, project, { upsert: true, new: true });
    console.log(`  → upserted ${project.name}`);
  }

  console.log('🌱 Seed complete.');
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
