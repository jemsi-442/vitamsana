import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const CategoryCard = ({ name, image, slug }) => {
  const { language } = useLanguage();
  const browseText = language === 'sw' ? 'Angalia' : 'Browse';

  return (
    <Link
      to={`/shop?category=${slug}`}
      className="group overflow-hidden rounded-[26px] border border-white/60 bg-white/75 shadow-warm backdrop-blur transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#1a1411]/86"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#20130b] via-[#20130b]/35 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="pill-label border-white/15 bg-white/10 text-white dark:text-white">
            {browseText}
          </span>
          <h3 className="mt-3 text-2xl font-bold text-white">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
