import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ThemeToggle from './ThemeToggle';

const MobileMenu = ({ isOpen, onClose }) => {
  const { cartCount, setIsCartOpen } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute right-4 top-20 w-72 rounded-[26px] border border-white/50 bg-[#fff8f1]/90 shadow-warm backdrop-blur dark:border-white/10 dark:bg-[#1a1411]/92">
        <nav className="p-4">
          <p className="px-4 pb-3 font-display text-2xl font-bold text-brand-700 dark:text-brand-200">
            Vitamsana
          </p>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md font-medium ${
                    isActive
                      ? 'bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-200'
                      : 'text-[#4e392d] dark:text-[#f1dfd0] hover:bg-brand-100/70 dark:hover:bg-brand-400/12'
                  } transition-colors`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md font-medium ${
                    isActive
                      ? 'bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-200'
                      : 'text-[#4e392d] dark:text-[#f1dfd0] hover:bg-brand-100/70 dark:hover:bg-brand-400/12'
                  } transition-colors`
                }
              >
                Menu
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md font-medium ${
                    isActive
                      ? 'bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-200'
                      : 'text-[#4e392d] dark:text-[#f1dfd0] hover:bg-brand-100/70 dark:hover:bg-brand-400/12'
                  } transition-colors`
                }
              >
                About Us
              </NavLink>
            </li>

          </ul>
        </nav>

        <div className="flex items-center justify-between border-t border-brand-200/70 p-4 dark:border-brand-400/15">
          <button
            onClick={() => {
              setIsCartOpen(true);
              onClose();
            }}
            className="flex items-center space-x-2 text-[#4e392d] transition hover:text-brand-600 dark:text-[#f1dfd0] dark:hover:text-brand-200"
          >
            <span>Cart ({cartCount})</span>
          </button>

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
