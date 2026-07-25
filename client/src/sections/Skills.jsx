import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillPill';
import { skills } from '../data/portfolioData';

const groups = [
  { key: 'languages', title: 'languages' },
  { key: 'frontend', title: 'frontend' },
  { key: 'backend', title: 'backend' },
  { key: 'ai', title: 'ai / genai' },
  { key: 'databases', title: 'databases' },
  { key: 'tools', title: 'tools' },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading index="04" eyebrow="package.json" title="Skills" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <SkillGroup key={g.key} title={g.title} items={skills[g.key]} />
        ))}
      </div>
    </section>
  );
}
