import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { bestsellerIds, products } from '../data/products';
import { usePageMeta } from '../hooks/usePageMeta';

const Home = () => {
  const { language } = useLanguage();
  const [bestsellers, setBestsellers] = useState([]);
  const text = {
    en: {
      metaTitle: 'Fresh Food, Fast Ordering',
      metaDescription: 'Discover Vitamsana signature plates, flame grill favorites, fresh drinks, and quick WhatsApp ordering in one polished restaurant experience.',
      categories: [
        { name: 'Signature Plates', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', slug: 'signature' },
        { name: 'Flame Grill', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80', slug: 'grill' },
        { name: 'Quick Bites', image: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&w=800&q=80', slug: 'quick-bites' },
        { name: 'Fresh Drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80', slug: 'drinks' },
      ],
      highlights: ['Fresh ingredients every day', 'Fast WhatsApp ordering', 'Comfort food with Dar flair'],
      contactCards: [
        { icon: FaWhatsapp, title: 'WhatsApp orders', detail: '+255 683 186 987', href: 'https://wa.me/255683186987?text=Hello%20Vitamsana%2C%20I%20want%20to%20order%20today.' },
        { icon: FaPhoneAlt, title: 'Call for reservations', detail: '+255 683 186 987', href: 'tel:+255683186987' },
        { icon: FaMapMarkerAlt, title: 'Visit the restaurant', detail: 'Dar es Salaam, Tanzania', href: '/about', internal: true },
        { icon: FaClock, title: 'Open daily', detail: '8:00 AM to 11:00 PM', href: '/shop', internal: true },
      ],
      heroLabel: 'Vitamsana restaurant experience',
      heroTitle: 'Fresh plates, warm ambience, and easy ordering for every craving.',
      heroDescription: 'Vitamsana brings together signature Swahili comfort food, grill specials, and refreshing drinks in one polished dining menu.',
      viewMenu: 'View the menu',
      ourStory: 'Our story',
      signatureService: 'Signature service',
      orderMinutes: 'Order in minutes',
      orderMinutesText: 'Browse the menu, save dishes to your cart, then complete your order by WhatsApp, call, or SMS.',
      popularChoice: 'Popular choice',
      bestFor: 'Best for',
      lunchDinner: 'Lunch & dinner',
      exploreKitchen: 'Explore the kitchen',
      menuCravings: 'Menu sections built for real cravings',
      menuCravingsText: 'From breakfast starts to grill platters and coolers, each category now carries the Vitamsana restaurant story clearly.',
      thisWeek: 'This week at Vitamsana',
      crowdPleasers: 'Crowd-pleasers for lunch dates, evening bites, and group platters.',
      crowdPleasersText: 'The refreshed menu leans into premium comfort food with quick ordering, making the brand feel more deliberate and more memorable.',
      needFast: 'Need something fast?',
      startOrderingText: 'Open the menu and send your order directly.',
      startOrdering: 'Start ordering',
      reservations: 'Reservations and contact',
      nextStep: 'Make the next step obvious for every guest.',
      nextStepText: 'Whether someone wants to book a table, ask a quick question, or place an order, the main action is now visible without digging through the page.',
      guestFavorites: 'Guest favorites',
      bestsellersTitle: 'Bestsellers with the strongest Vitamsana vibe',
      bestsellersText: 'These are the dishes that help the homepage feel like a restaurant brand instead of a generic store catalog.',
    },
    sw: {
      metaTitle: 'Chakula Kitamu, Oda Haraka',
      metaDescription: 'Karibu Vitamsana uangalie sahani maalum, grill, vinywaji fresh, na oda za haraka kupitia WhatsApp.',
      categories: [
        { name: 'Sahani Maalum', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', slug: 'signature' },
        { name: 'Grill Moto', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80', slug: 'grill' },
        { name: 'Vyakula vya Haraka', image: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&w=800&q=80', slug: 'quick-bites' },
        { name: 'Vinywaji Fresh', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80', slug: 'drinks' },
      ],
      highlights: ['Viungo fresh kila siku', 'Oda za haraka kwa WhatsApp', 'Ladha ya Dar yenye comfort food'],
      contactCards: [
        { icon: FaWhatsapp, title: 'Oda kwa WhatsApp', detail: '+255 683 186 987', href: 'https://wa.me/255683186987?text=Habari%20Vitamsana%2C%20nataka%20kuagiza%20leo.' },
        { icon: FaPhoneAlt, title: 'Piga simu kuweka nafasi', detail: '+255 683 186 987', href: 'tel:+255683186987' },
        { icon: FaMapMarkerAlt, title: 'Tembelea mgahawa', detail: 'Dar es Salaam, Tanzania', href: '/about', internal: true },
        { icon: FaClock, title: 'Tunafungua kila siku', detail: '8:00 asubuhi hadi 11:00 jioni', href: '/shop', internal: true },
      ],
      heroLabel: 'Uzoefu wa mgahawa wa Vitamsana',
      heroTitle: 'Sahani fresh, mazingira mazuri, na oda rahisi kwa kila hamu ya chakula.',
      heroDescription: 'Vitamsana inaleta pamoja comfort food ya Kiswahili, grill specials, na vinywaji fresh kwenye menyu yenye muonekano wa kisasa.',
      viewMenu: 'Angalia menyu',
      ourStory: 'Hadithi yetu',
      signatureService: 'Huduma yetu',
      orderMinutes: 'Agiza ndani ya dakika chache',
      orderMinutesText: 'Angalia menyu, hifadhi vyakula kwenye kikapu, kisha kamilisha oda yako kwa WhatsApp, simu, au SMS.',
      popularChoice: 'Maarufu zaidi',
      bestFor: 'Inafaa kwa',
      lunchDinner: 'Mchana na jioni',
      exploreKitchen: 'Chunguza jikoni',
      menuCravings: 'Sehemu za menyu zilizopangwa kwa hamu halisi ya chakula',
      menuCravingsText: 'Kuanzia kifungua kinywa hadi grill platters na coolers, kila category sasa linaelezea hadithi ya Vitamsana vizuri zaidi.',
      thisWeek: 'Wiki hii Vitamsana',
      crowdPleasers: 'Vipendwa vya wateja kwa lunch date, bites za jioni, na platters za makundi.',
      crowdPleasersText: 'Menyu hii mpya inaleta comfort food ya kiwango na oda za haraka, hivyo brand inaonekana ya kukumbukwa zaidi.',
      needFast: 'Unahitaji kitu cha haraka?',
      startOrderingText: 'Fungua menyu na tuma oda yako moja kwa moja.',
      startOrdering: 'Anza kuagiza',
      reservations: 'Mawasiliano na nafasi',
      nextStep: 'Fanya hatua inayofuata iwe wazi kwa kila mteja.',
      nextStepText: 'Mteja akitaka kuweka nafasi, kuuliza swali, au kuagiza, hatua kuu sasa inaonekana wazi bila kutafuta sana.',
      guestFavorites: 'Vipendwa vya wageni',
      bestsellersTitle: 'Bestsellers zinazoonyesha vibe ya Vitamsana',
      bestsellersText: 'Hivi ni vyakula vinavyofanya homepage ihisi kama restaurant brand halisi badala ya catalog ya kawaida.',
    },
  }[language];
  const categories = text.categories;
  const highlights = text.highlights;
  const contactCards = text.contactCards;

  usePageMeta({
    title: text.metaTitle,
    description: text.metaDescription,
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
              {text.heroLabel}
            </span>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl">
              {text.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#f3dfca] md:text-lg">
              {text.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="cta-primary">
                {text.viewMenu}
              </Link>
              <Link to="/about" className="cta-secondary border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white">
                {text.ourStory}
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
                {text.signatureService}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink-900 dark:text-white">
                {text.orderMinutes}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#6f5646] dark:text-[#dcc8b8]">
                {text.orderMinutesText}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="surface-card p-5">
                <p className="text-sm text-[#7c5f4c] dark:text-[#dbc6b3]">{text.popularChoice}</p>
                <p className="mt-2 text-2xl font-bold text-brand-700 dark:text-brand-200">Flame Grill</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-sm text-[#7c5f4c] dark:text-[#dbc6b3]">{text.bestFor}</p>
                <p className="mt-2 text-2xl font-bold text-brand-700 dark:text-brand-200">{text.lunchDinner}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="pill-label">{text.exploreKitchen}</span>
              <h2 className="mt-3 text-3xl font-bold text-ink-900 dark:text-white md:text-4xl">
                {text.menuCravings}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#725847] dark:text-[#d9c4b4]">
              {text.menuCravingsText}
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
              {text.thisWeek}
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              {text.crowdPleasers}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#f7e5d4] md:text-base">
              {text.crowdPleasersText}
            </p>
          </div>
          <div className="surface-card flex flex-col justify-center p-6 text-ink-900 dark:text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-200">
              {text.needFast}
            </p>
            <p className="mt-3 text-2xl font-bold">{text.startOrderingText}</p>
            <Link to="/shop" className="cta-primary mt-5 w-fit">
              {text.startOrdering}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="pill-label">{text.reservations}</span>
              <h2 className="mt-3 text-3xl font-bold text-ink-900 dark:text-white md:text-4xl">
                {text.nextStep}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#725847] dark:text-[#d9c4b4]">
              {text.nextStepText}
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
              <span className="pill-label">{text.guestFavorites}</span>
              <h2 className="mt-3 text-3xl font-bold text-ink-900 dark:text-white md:text-4xl">
                {text.bestsellersTitle}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#725847] dark:text-[#d9c4b4]">
              {text.bestsellersText}
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
