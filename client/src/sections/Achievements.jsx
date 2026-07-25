import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <SectionHeading index="05" eyebrow="Milestones" title="Achievements" />
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item) => (
          <div key={item} className="card flex gap-3 p-5">
            <span className="font-mono text-teal-dim dark:text-teal">✓</span>
            <p className="text-sm leading-relaxed text-ink/75 dark:text-paper/75">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
