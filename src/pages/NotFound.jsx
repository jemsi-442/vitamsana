import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFound = () => {
  usePageMeta({
    title: 'Page Not Found',
    description: 'The page you requested could not be found. Return to the Vitamsana home page to continue browsing the restaurant experience.',
    path: '/404',
  });

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="surface-card w-full max-w-2xl px-6 py-12 text-center md:px-10">
        <p className="pill-label">404</p>
        <h1 className="mt-4 text-5xl font-bold text-ink-900 dark:text-white md:text-6xl">
          That page is off the menu.
        </h1>
        <p className="mx-auto mb-8 mt-4 max-w-xl text-lg leading-8 text-[#6d5445] dark:text-[#d8c4b5]">
          The link you opened does not exist right now, but the main Vitamsana experience is ready and easy to get back to.
        </p>
        <Link
          to="/"
          className="cta-primary"
        >
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
