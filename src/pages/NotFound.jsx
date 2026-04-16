import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFound = () => {
  const { language } = useLanguage();
  const text = {
    en: {
      title: 'Page Not Found',
      description: 'The page you requested could not be found. Return to the Vitamsana home page to continue browsing the restaurant experience.',
      heading: 'That page is off the menu.',
      body: 'The link you opened does not exist right now, but the main Vitamsana experience is ready and easy to get back to.',
      cta: 'Return home',
    },
    sw: {
      title: 'Ukurasa Haujapatikana',
      description: 'Ukurasa uliotafuta haujapatikana. Rudi kwenye ukurasa wa nyumbani wa Vitamsana kuendelea.',
      heading: 'Ukurasa huo haupo kwenye menyu.',
      body: 'Link uliyofungua haipo kwa sasa, lakini uzoefu mkuu wa Vitamsana upo tayari na ni rahisi kurudi.',
      cta: 'Rudi nyumbani',
    },
  }[language];
  usePageMeta({
    title: text.title,
    description: text.description,
    path: '/404',
  });

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="surface-card w-full max-w-2xl px-6 py-12 text-center md:px-10">
        <p className="pill-label">404</p>
        <h1 className="mt-4 text-5xl font-bold text-ink-900 dark:text-white md:text-6xl">
          {text.heading}
        </h1>
        <p className="mx-auto mb-8 mt-4 max-w-xl text-lg leading-8 text-[#6d5445] dark:text-[#d8c4b5]">
          {text.body}
        </p>
        <Link
          to="/"
          className="cta-primary"
        >
          {text.cta}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
