import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import { profile } from '../data/portfolioData';

const links = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#contact', label: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-paper-line bg-paper/90 backdrop-blur dark:border-ink-line dark:bg-ink/90'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-widest">
          <span className="rounded border border-teal-dim px-2 py-1 text-teal-dim dark:border-teal dark:text-teal">
            {profile.initials}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-ink/70 transition-colors hover:text-teal-dim dark:text-paper/70 dark:hover:text-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="text-ink md:hidden dark:text-paper"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-paper-line bg-paper px-6 py-4 md:hidden dark:border-ink-line dark:bg-ink">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm text-ink/80 dark:text-paper/80"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
