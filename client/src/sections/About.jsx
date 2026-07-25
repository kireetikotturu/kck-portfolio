import SectionHeading from '../components/SectionHeading';
import { about } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading index="01" eyebrow="Profile" title="About" />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-ink/75 dark:text-paper/75">
              {p}
            </p>
          ))}
        </div>
        <div className="card p-6">
          <p className="eyebrow mb-3">Education</p>
          <p className="font-display text-lg font-semibold">{about.education.degree}</p>
          <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">{about.education.school}</p>
          <div className="mt-4 flex items-center justify-between font-mono text-xs text-ink/50 dark:text-paper/50">
            <span>{about.education.years}</span>
            <span className="rounded border border-paper-line px-2 py-0.5 dark:border-ink-line">
              {about.education.detail}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
