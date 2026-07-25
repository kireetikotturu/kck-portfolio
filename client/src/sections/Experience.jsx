import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading index="02" eyebrow="Track record" title="Experience" />
      <div className="space-y-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card grid gap-4 p-6 sm:grid-cols-[220px_1fr]"
          >
            <div>
              <p className="font-display text-lg font-semibold">{job.role}</p>
              <p className="font-mono text-sm text-teal-dim dark:text-teal">{job.company}</p>
              <p className="mt-1 font-mono text-xs text-ink/40 dark:text-paper/40">{job.period}</p>
            </div>
            <ul className="space-y-2 border-t border-paper-line pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 dark:border-ink-line">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-dim dark:bg-amber" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
