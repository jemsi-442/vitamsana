import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { usePageMeta } from '../hooks/usePageMeta';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get('category') || 'all';
  const [categoryFilter, setCategoryFilter] = useState(urlCategory);
  const [sortOption, setSortOption] = useState('default');

  usePageMeta({
    title: 'Menu',
    description: 'Browse the Vitamsana restaurant menu by breakfast, signature plates, grill, drinks, dessert, and quick bites.',
    path: urlCategory === 'all' ? '/shop' : `/shop?category=${urlCategory}`,
  });

  useEffect(() => {
    setCategoryFilter(urlCategory);
  }, [urlCategory]);

  useEffect(() => {
    let filtered = [...products];

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    filtered.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      const priceA = a.price;
      const priceB = b.price;

      switch (sortOption) {
        case 'price-asc': return priceA - priceB;
        case 'price-desc': return priceB - priceA;
        case 'name-asc': return nameA.localeCompare(nameB);
        case 'name-desc': return nameB.localeCompare(nameA);
        default: return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [categoryFilter, sortOption]);

  return (
    <main className="min-h-screen px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 rounded-[30px] border border-white/60 bg-white/75 px-6 py-8 shadow-warm backdrop-blur dark:border-white/10 dark:bg-[#1a1411]/86 md:px-8">
          <span className="pill-label">Menu</span>
          <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div className="w-full">
              <h1 className="text-4xl font-bold text-ink-900 dark:text-white md:text-5xl">
                A cleaner, restaurant-first menu for Vitamsana.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6e5545] dark:text-[#d8c4b5] md:text-base">
                Filter the dishes by dining moment, sort by price or name, and use each product card to jump directly into ordering.
              </p>
            </div>
            <div className="surface-card p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-200">
                Service note
              </p>
              <p className="mt-3 text-sm leading-7 text-[#6f5646] dark:text-[#dcc8b8]">
                Menu items are grouped to match how guests browse in real life: breakfast, quick bites, signature dishes, grill, drinks, and dessert.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 rounded-[28px] border border-white/60 bg-white/75 p-4 shadow-warm backdrop-blur dark:border-white/10 dark:bg-[#1a1411]/86 md:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div className="w-full">
              <label
                htmlFor="category-filter"
                className="mb-2 block pl-1 text-sm font-medium text-[#5f4637] dark:text-[#ebdccf]"
              >
                Filter by category
              </label>
              <div className="relative">
                <select
                  id="category-filter"
                  className="block w-full appearance-none rounded-2xl border border-brand-200 bg-[#fffaf4] px-4 py-3 text-base text-[#533b2d] outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-400 dark:border-brand-400/25 dark:bg-[#241b16] dark:text-[#f5e7d9]"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="signature">Signature Plates</option>
                  <option value="grill">Flame Grill</option>
                  <option value="quick-bites">Quick Bites</option>
                  <option value="drinks">Drinks</option>
                  <option value="dessert">Dessert</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="sort-options"
                className="mb-2 block pl-1 text-sm font-medium text-[#5f4637] dark:text-[#ebdccf]"
              >
                Sort by
              </label>
              <div className="relative">
                <select
                  id="sort-options"
                  className="block w-full appearance-none rounded-2xl border border-brand-200 bg-[#fffaf4] px-4 py-3 text-base text-[#533b2d] outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-400 dark:border-brand-400/25 dark:bg-[#241b16] dark:text-[#f5e7d9]"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A-Z</option>
                  <option value="name-desc">Name: Z-A</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="surface-card py-12 text-center">
            <p className="text-lg text-[#6b5243] dark:text-[#d7c3b4]">
              No menu items match that filter yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;
