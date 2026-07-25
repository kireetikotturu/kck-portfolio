import { useTypewriter } from '../hooks/useTypewriter';

export default function TerminalWindow({ lines }) {
  const { renderedLines, done } = useTypewriter(lines);

  return (
    <div className="card w-full overflow-hidden font-mono text-sm shadow-xl">
      <div className="flex items-center gap-2 border-b border-paper-line bg-paper px-4 py-3 dark:border-ink-line dark:bg-ink">
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20 dark:bg-paper/20" />
        <span className="ml-2 text-xs text-ink/40 dark:text-paper/40">kireeti@portfolio: ~</span>
      </div>
      <div className="min-h-[220px] space-y-3 px-5 py-5">
        {renderedLines.map((line, i) => (
          <div key={i}>
            <p>
              <span className="text-teal-dim dark:text-teal">➜</span>{' '}
              <span className="text-amber-dim dark:text-amber">~</span>{' '}
              <span>{line.command}</span>
              {!line.showOutput && <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-teal-dim dark:bg-teal" />}
            </p>
            {line.showOutput && <p className="pl-4 text-ink/60 dark:text-paper/60">{line.output}</p>}
          </div>
        ))}
        {done && (
          <p>
            <span className="text-teal-dim dark:text-teal">➜</span>{' '}
            <span className="text-amber-dim dark:text-amber">~</span>{' '}
            <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-teal-dim dark:bg-teal" />
          </p>
        )}
      </div>
    </div>
  );
}
