import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { bestsellerIds, products } from '../data/products';
import { usePageMeta } from '../hooks/usePageMeta';

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const categories = [
    { name: 'Signature Plates', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', slug: 'signature' },
    { name: 'Flame Grill', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80', slug: 'grill' },
    { name: 'Quick Bites', image: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&w=800&q=80', slug: 'quick-bites' },
    { name: 'Fresh Drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80', slug: 'drinks' },
  ];
  const highlights = [
    'Fresh ingredients every day',
    'Fast WhatsApp ordering',
    'Comfort food with Dar flair',
  ];
  const contactCards = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp orders',
      detail: '+255 683 186 987',
      href: 'https://wa.me/255683186987?text=Hello%20Vitamsana%2C%20I%20want%20to%20order%20today.',
    },
    {
      icon: FaPhoneAlt,
      title: 'Call for reservations',
      detail: '+255 683 186 987',
      href: 'tel:+255683186987',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit the restaurant',
      detail: 'Dar es Salaam, Tanzania',
      href: '/about',
      internal: true,
    },
    {
      icon: FaClock,
      title: 'Open daily',
      detail: '8:00 AM to 11:00 PM',
      href: '/shop',
      internal: true,
    },
  ];

  usePageMeta({
    title: 'Fresh Food, Fast Ordering',
    description: 'Discover Vitamsana signature plates, flame grill favorites, fresh drinks, and quick WhatsApp ordering in one polished restaurant experience.',
    path: '/',
  });

  useEffect(() => {
    const bestsellerProducts = bestsellerIds.map(id =>
      products.find(product => product.id === id)
    ).filter(Boolean);
    setBestsellers(bestsellerProducts);
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="px-4 pb-10 pt-8 md:px-6 md:pb-16 md:pt-10">
        <div
          className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[36px] border border-white/50 bg-[#2b1b12] shadow-warm md:grid-cols-[1.15fr_0.85fr]"
          style={{
            backgroundImage: 'linear-gradient(120deg, rgba(17, 12, 9, 0.88), rgba(54, 32, 16, 0.72)), url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="px-6 py-10 text-white md:px-10 md:py-14">
            <span className="pill-label mb-5 bg-white/10 text-white dark:border-white/20 dark:bg-white/10 dark:text-white">
              Vitamsana restaurant experience
            </span>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Fresh plates, warm ambience, and easy ordering for every craving.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#f3dfca] md:text-lg">
              Vitamsana brings together signature Swahili comfort food, grill specials, and refreshing drinks in one polished dining menu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="cta-primary">
                View the menu
              </Link>
              <Link to="/about" className="cta-secondary border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white">
                Our story
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-[#fdebd7]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 bg-gradient-to-b from-white/10 to-transparent p-6 md:p-8">
            <div className="surface-card p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-200">
                Signature service
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink-900 dark:text-white">
                Order in minutes
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#6f5646] dark:text-[#dcc8b8]">
                Browse the menu, save dishes to your cart, then complete your order by WhatsApp, call, or SMS.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="surface-card p-5">
                <p className="text-sm text-[#7c5f4c] dark:text-[#dbc6b3]">Popular choice</p>
                <p className="mt-2 text-2xl font-bold text-brand-700 dark:text-brand-200">Flame Grill</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-sm text-[#7c5f4c] dark:text-[#dbc6b3]">Best for</p>
                <p className="mt-2 text-2xl font-bold text-brand-700 dark:text-brand-200">Lunch & dinner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="pill-label">Explore the kitchen</span>
              <h2 className="mt-3 text-3xl font-bold text-ink-900 dark:text-white md:text-4xl">
                Menu sections built for real cravings
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#725847] dark:text-[#d9c4b4]">
              From breakfast starts to grill platters and coolers, each category now carries the Vitamsana restaurant story clearly.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                image={category.image}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[32px] bg-brand-600 px-6 py-8 text-white shadow-warm md:grid-cols-[1.2fr_0.8fr] md:px-10">
          <div>
            <span className="pill-label border-white/20 bg-white/10 text-white dark:text-white">
              This week at Vitamsana
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Crowd-pleasers for lunch dates, evening bites, and group platters.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#f7e5d4] md:text-base">
              The refreshed menu leans into premium comfort food with quick ordering, making the brand feel more deliberate and more memorable.
            </p>
          </div>
          <div className="surface-card flex flex-col justify-center p-6 text-ink-900 dark:text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-200">
              Need something fast?
            </p>
            <p className="mt-3 text-2xl font-bold">Open the menu and send your order directly.</p>
            <Link to="/shop" className="cta-primary mt-5 w-fit">
              Start ordering
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="pill-label">Reservations and contact</span>
              <h2 className="mt-3 text-3xl font-bold text-ink-900 dark:text-white md:text-4xl">
                Make the next step obvious for every guest.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#725847] dark:text-[#d9c4b4]">
              Whether someone wants to book a table, ask a quick question, or place an order, the main action is now visible without digging through the page.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="surface-card h-full p-6 transition hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-200">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#6d5445] dark:text-[#d8c4b5]">
                    {card.detail}
                  </p>
                </div>
              );

              return card.internal ? (
                <Link key={card.title} to={card.href}>
                  {content}
                </Link>
              ) : (
                <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 pb-14 md:px-6 md:py-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="pill-label">Guest favorites</span>
              <h2 className="mt-3 text-3xl font-bold text-ink-900 dark:text-white md:text-4xl">
                Bestsellers with the strongest Vitamsana vibe
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#725847] dark:text-[#d9c4b4]">
              These are the dishes that help the homepage feel like a restaurant brand instead of a generic store catalog.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {bestsellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
