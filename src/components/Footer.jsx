import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`border-t py-8 transition-all duration-300 ${
        theme === 'light'
          ? 'border-brand-100 bg-[#fff5ea]'
          : 'border-white/10 bg-[#120d0a]'
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-6">
        <div>
          <p className={`font-display text-2xl font-bold ${theme === 'light' ? 'text-brand-700' : 'text-brand-200'}`}>
            Vitamsana
          </p>
          <p className={`mt-2 text-sm leading-7 ${theme === 'light' ? 'text-[#6a5142]' : 'text-[#d4bfae]'}`}>
            Fresh food, warm atmosphere, and simple ordering across dine-in and digital touchpoints.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/softwarengineer442tz?igsh=YnJ4YTRxbzRibGN6"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition ${
                theme === 'light'
                  ? 'border-brand-200 bg-white text-brand-700 hover:border-brand-500 hover:text-brand-500'
                  : 'border-brand-400/20 bg-white/5 text-brand-200 hover:border-brand-300 hover:text-white'
              }`}
              aria-label="Visit Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com/@softwarengineer442tz"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition ${
                theme === 'light'
                  ? 'border-brand-200 bg-white text-brand-700 hover:border-brand-500 hover:text-brand-500'
                  : 'border-brand-400/20 bg-white/5 text-brand-200 hover:border-brand-300 hover:text-white'
              }`}
              aria-label="Visit TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${theme === 'light' ? 'text-brand-700' : 'text-brand-200'}`}>
            Quick contact
          </p>
          <div className={`mt-3 space-y-2 text-sm ${theme === 'light' ? 'text-[#6a5142]' : 'text-[#d4bfae]'}`}>
            <a href="https://wa.me/255683186987?text=Hello%20Vitamsana%2C%20I%20want%20to%20order." target="_blank" rel="noopener noreferrer" className="block hover:text-brand-500">
              WhatsApp: +255 683 186 987
            </a>
            <a href="tel:+255683186987" className="block hover:text-brand-500">
              Call: +255 683 186 987
            </a>
            <p>Open daily: 8:00 AM to 11:00 PM</p>
          </div>
        </div>

        <div>
          <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${theme === 'light' ? 'text-brand-700' : 'text-brand-200'}`}>
            Visit
          </p>
          <p className={`mt-3 text-sm leading-7 ${theme === 'light' ? 'text-[#6a5142]' : 'text-[#d4bfae]'}`}>
            Dar es Salaam, Tanzania
          </p>
          <p className={`mt-4 text-sm ${theme === 'light' ? 'text-[#6a5142]' : 'text-[#d4bfae]'}`}>
            &copy; {new Date().getFullYear()} Vitamsana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
