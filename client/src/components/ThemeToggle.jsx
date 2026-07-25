import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="relative flex h-9 w-9 items-center justify-center rounded-md border border-paper-line text-ink transition-colors hover:border-teal-dim hover:text-teal-dim dark:border-ink-line dark:text-paper dark:hover:border-teal dark:hover:text-teal"
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}
