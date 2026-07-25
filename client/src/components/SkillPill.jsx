export default function SkillGroup({ title, items }) {
  return (
    <div className="card p-5">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-ink/40 dark:text-paper/40">
        "{title}"
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-baseline gap-2 font-mono text-sm">
            <span className="text-amber-dim dark:text-amber">-</span>
            <span className="text-ink/80 dark:text-paper/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
