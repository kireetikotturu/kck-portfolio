import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

const statusLabel = {
  live: 'live',
  internship: 'internship build',
};

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="card group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-teal-dim dark:hover:border-teal"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-mono text-xs text-ink/50 dark:text-paper/50">
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-teal-dim dark:bg-teal" />
          {statusLabel[project.status] || 'shipped'}
        </span>
        <span className="font-mono text-xs text-ink/30 dark:text-paper/30">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold">{project.name}</h3>
      <p className="mb-3 font-mono text-xs text-teal-dim dark:text-teal">{project.tagline}</p>
      <p className="mb-4 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
        {project.description}
      </p>

      <ul className="mb-4 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-ink/60 dark:text-paper/60">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-dim dark:bg-amber" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mb-5 mt-auto flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-paper-line px-2 py-0.5 font-mono text-[11px] text-ink/60 dark:border-ink-line dark:text-paper/60"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 border-t border-paper-line pt-4 dark:border-ink-line">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-mono text-sm text-ink/70 transition-colors hover:text-teal-dim dark:text-paper/70 dark:hover:text-teal"
        >
          <FiGithub size={14} /> code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-mono text-sm text-ink/70 transition-colors hover:text-teal-dim dark:text-paper/70 dark:hover:text-teal"
        >
          <FiArrowUpRight size={14} /> live demo
        </a>
      </div>
    </motion.article>
  );
}
