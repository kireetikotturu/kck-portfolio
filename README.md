# Kireeti Kotturi — Portfolio (MERN Stack)

A premium, modern developer portfolio built on the MERN stack (MongoDB, Express, React, Node.js),
with a terminal/console-inspired design, full dark & light mode, and a working contact form backed
by a real API.

**Live design direction:** dark "engineering console" theme by default, with a warm paper-toned
light mode. Monospace accents, a typing-terminal hero, and project cards styled like deployed
services (`● live`) — because that's literally what you ship.

---

## 1. Tech Stack

| Layer      | Stack                                                                 |
|------------|------------------------------------------------------------------------|
| Frontend   | React 18, Vite, Tailwind CSS, Framer Motion, React Router             |
| Backend    | Node.js, Express.js                                                    |
| Database   | MongoDB (Mongoose ODM)                                                 |
| Other      | Helmet, CORS, express-rate-limit, morgan, dotenv                       |

---

## 2. Folder Structure

```
portfolio-mern/
├── client/                     # React frontend (Vite)
│   ├── src/
│   │   ├── components/         # Reusable UI building blocks
│   │   ├── sections/           # Page sections (Hero, About, Projects, ...)
│   │   ├── context/            # ThemeContext (dark/light mode)
│   │   ├── data/               # Your resume data lives here — edit this file first
│   │   ├── hooks/               # Custom hooks (useTypewriter, etc.)
│   │   ├── utils/               # api.js — talks to the backend
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                     # Express + MongoDB backend
│   ├── config/db.js            # Mongo connection
│   ├── models/                 # Contact.js, Project.js
│   ├── controllers/            # Route logic
│   ├── routes/                 # /api/contact, /api/projects
│   ├── middleware/             # error handler, rate limiter
│   ├── seed/seedProjects.js    # Seeds your projects into MongoDB
│   ├── server.js               # Entry point
│   └── package.json
│
└── README.md
```

This split (`client` / `server`) is the standard scalable MERN layout — each half deploys and
scales independently (client → Vercel/Netlify, server → Render/Railway), and each has its own
`package.json`, so you never mix frontend and backend dependencies.

---

## 3. What's already filled in for you

Every piece of resume content (internship, projects, skills, achievements, education, contact
links) is already wired in from your resume. The **single file you'll touch most** when you want
to update content is:

```
client/src/data/portfolioData.js
```

Everything on the page (name, tagline, experience, all 4 projects, skills, achievements) is
pulled from that one file — no hunting through components to change text.

---

## 4. Running it locally

### 4.1 Frontend only (fastest — works even without MongoDB)

```bash
cd client
npm install
cp .env.example .env      # defaults are fine for local dev
npm run dev
```

Opens at `http://localhost:5173`. The site works fully with **static data** even if the backend
isn't running — the contact form will just show a friendly "backend not connected" message, and
the rest of the site (which is 95% of it) needs no backend at all.

### 4.2 Backend (Express + MongoDB)

```bash
cd server
npm install
cp .env.example .env
# edit .env and set MONGO_URI (use MongoDB Atlas free tier, or local mongod)
npm run seed     # optional: pushes your 4 projects into MongoDB
npm run dev      # starts on http://localhost:5000
```

With the backend running, the contact form actually saves messages to MongoDB, and `/api/projects`
becomes the live source of your project cards (still falls back to static data if the API is
unreachable, so the site never breaks in production if the backend goes to sleep on a free tier).

---

## 5. Environment variables

**`client/.env`**
```
VITE_API_URL=http://localhost:5000/api
```

**`server/.env`**
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIENT_ORIGIN=http://localhost:5173
```

---

## 6. Deploying

- **Frontend (client/):** Vercel or Netlify. Build command `npm run build`, output dir `dist`.
  Set `VITE_API_URL` to your deployed backend URL + `/api`.
- **Backend (server/):** Render or Railway. Set `MONGO_URI` and `CLIENT_ORIGIN` (your deployed
  frontend URL, so CORS allows it) as environment variables.
- **Database:** MongoDB Atlas (free M0 cluster is enough for a portfolio).

---

## 7. Updating content later

- **Text/projects/skills:** edit `client/src/data/portfolioData.js` only.
- **Colors/fonts:** edit the CSS variables at the top of `client/src/index.css` and
  `client/tailwind.config.js`.
- **New project:** add an object to the `projects` array in `portfolioData.js` — the grid picks
  it up automatically, no component changes needed.
- **New section:** create a file in `client/src/sections/`, import it in `App.jsx`.

---

## 8. Notes

- Dark mode is the default (matches the terminal-console theme); toggle persists in
  `localStorage` and respects the visitor's OS preference on first visit.
- All animations respect `prefers-reduced-motion`.
- The contact form has basic client-side validation and server-side rate limiting
  (5 requests / 15 min / IP) to prevent spam.
