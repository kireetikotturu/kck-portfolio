import { profile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-paper-line py-8 dark:border-ink-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-ink/40 dark:text-paper/40">
          © {new Date().getFullYear()} {profile.name} — built with the MERN stack.
        </p>
        <p className="font-mono text-xs text-ink/40 dark:text-paper/40">status: available for opportunities</p>
      </div>
    </footer>
  );
}
