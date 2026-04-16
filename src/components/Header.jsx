import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSun, FaMoon, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const whatsappUrl = 'https://wa.me/255683186987?text=Hello%20Vitamsana%2C%20I%20want%20to%20place%20an%20order.';
  const { cartCount, setIsCartOpen } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/shop' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[#fff8f1]/70 backdrop-blur-xl dark:border-white/10 dark:bg-[#140f0c]/78">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          to="/"
          className="flex items-center gap-3 text-brand-700 transition hover:text-brand-500 dark:text-brand-200 dark:hover:text-brand-100"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-lg font-bold text-white shadow-warm">
            V
          </span>
          <span>
            <span className="block font-display text-2xl font-bold leading-none">Vitamsana</span>
            <span className="block text-[10px] uppercase tracking-[0.26em] text-[#876754] dark:text-[#d7bfab]">
              Kitchen and grill
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative font-medium
                text-[#7b5d4b] dark:text-[#d6beaa]
                hover:text-brand-600 dark:hover:text-brand-200 transition-all
                ${isActive
                  ? 'after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-brand-500'
                  : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-500"
          >
            <FaWhatsapp />
            Order now
          </a>
          <button
            onClick={toggleTheme}
            className="rounded-full border border-brand-200/80 bg-white/60 p-2 text-[#7b5d4b] transition hover:bg-brand-50 dark:border-brand-400/20 dark:bg-white/5 dark:text-[#d6beaa] dark:hover:bg-brand-400/10"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <div
            className="relative cursor-pointer rounded-full border border-brand-200/80 bg-white/60 p-2 text-[#7b5d4b] transition hover:bg-brand-50 dark:border-brand-400/20 dark:bg-white/5 dark:text-[#d6beaa] dark:hover:bg-brand-400/10"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-brand-200/80 bg-white/60 p-2 text-[#7b5d4b] transition hover:bg-brand-50 dark:border-brand-400/20 dark:bg-white/5 dark:text-[#d6beaa] dark:hover:bg-brand-400/10"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <div
            className="relative cursor-pointer rounded-full border border-brand-200/80 bg-white/60 p-2 text-[#7b5d4b] transition hover:bg-brand-50 dark:border-brand-400/20 dark:bg-white/5 dark:text-[#d6beaa] dark:hover:bg-brand-400/10"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white animate-pulse">
                {cartCount}
              </span>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full border border-brand-200/80 bg-white/60 p-2 text-[#7b5d4b] transition hover:bg-brand-50 dark:border-brand-400/20 dark:bg-white/5 dark:text-[#d6beaa] dark:hover:bg-brand-400/10"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </header>
  );
};

export default Header;
