import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    if (savedTheme === 'light') {
      document.documentElement.style.setProperty('--primary-bg', '#fff8f1');
      document.documentElement.style.setProperty('--primary-text', '#2f241d');
      document.documentElement.style.setProperty('--accent', '#d96a12');
    } else {
      document.documentElement.style.setProperty('--primary-bg', '#120d0a');
      document.documentElement.style.setProperty('--primary-text', '#f7efe5');
      document.documentElement.style.setProperty('--accent', '#f68f32');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');

    if (newTheme === 'light') {
      document.documentElement.style.setProperty('--primary-bg', '#fff8f1');
      document.documentElement.style.setProperty('--primary-text', '#2f241d');
      document.documentElement.style.setProperty('--accent', '#d96a12');
    } else {
      document.documentElement.style.setProperty('--primary-bg', '#120d0a');
      document.documentElement.style.setProperty('--primary-text', '#f7efe5');
      document.documentElement.style.setProperty('--accent', '#f68f32');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
