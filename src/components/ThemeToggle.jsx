import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full border border-brand-200/80 bg-white/70 p-2 text-brand-700 transition hover:bg-brand-50 dark:border-brand-400/20 dark:bg-white/5 dark:text-brand-100 dark:hover:bg-brand-400/10 ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FaMoon />
      ) : (
        <FaSun />
      )}
    </button>
  );
};

export default ThemeToggle;
