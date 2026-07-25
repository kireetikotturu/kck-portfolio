import { useEffect, useState } from 'react';

/**
 * Types out a list of { command, output } lines one character at a time,
 * revealing the output once each command finishes typing.
 */
export function useTypewriter(lines, { speed = 28, lineDelay = 450, startDelay = 300 } = {}) {
  const [renderedLines, setRenderedLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timeouts = [];

    async function run() {
      await wait(startDelay);
      for (let i = 0; i < lines.length; i += 1) {
        if (cancelled) return;
        const { command, output } = lines[i];
        for (let c = 1; c <= command.length; c += 1) {
          if (cancelled) return;
          await wait(speed);
          setRenderedLines((prev) => {
            const next = [...prev];
            next[i] = { command: command.slice(0, c), output: '', showOutput: false };
            return next;
          });
        }
        await wait(lineDelay);
        if (cancelled) return;
        setRenderedLines((prev) => {
          const next = [...prev];
          next[i] = { command, output, showOutput: true };
          return next;
        });
      }
      if (!cancelled) setDone(true);
    }

    function wait(ms) {
      return new Promise((resolve) => {
        const id = setTimeout(resolve, ms);
        timeouts.push(id);
      });
    }

    run();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { renderedLines, done };
}
