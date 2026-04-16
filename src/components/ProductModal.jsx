import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { formatTsh } from '../utils/formatCurrency';

const ProductModal = () => {
  const { 
    isProductModalOpen, 
    setIsProductModalOpen, 
    currentProduct,
    addToCart
  } = useCart();
  
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isProductModalOpen ? 'hidden' : '';
  }, [isProductModalOpen]);

  if (!isProductModalOpen || !currentProduct) return null;

  const handleAddToCart = () => {
    addToCart(currentProduct.id);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
      onClick={() => setIsProductModalOpen(false)}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[30px] border border-white/50 bg-[#fffaf5] shadow-2xl animate-fadeIn dark:border-white/10 dark:bg-[#18110d]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsProductModalOpen(false)}
          className="absolute right-4 top-4 z-50 rounded-full bg-white/85 p-2 text-brand-700 transition hover:bg-white dark:bg-white/10 dark:text-brand-200 dark:hover:bg-white/20"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 gap-6 overflow-y-auto p-6 md:grid-cols-2 md:p-8">
          <div className="flex justify-center overflow-hidden rounded-[26px]">
            <img
              src={currentProduct.imageSrc}
              alt={currentProduct.name}
              className="w-full max-w-md rounded-[26px] object-cover shadow-warm md:max-h-[440px]"
            />
          </div>

          <div className="relative">
            <span className="pill-label">
              {currentProduct.category.replace('-', ' ')}
            </span>
            <h2 className="mb-2 mt-4 text-3xl font-extrabold tracking-wide text-ink-900 dark:text-white">
              {currentProduct.name}
            </h2>

            <p className="mb-4 text-2xl font-bold text-brand-600 dark:text-brand-200">
              {formatTsh(currentProduct.price)}
              {currentProduct.unit && (
                <span className="ml-1 text-sm font-normal text-[#6f5646] dark:text-[#dcc8b8]">
                  {currentProduct.unit}
                </span>
              )}
            </p>

            <p className="mb-6 leading-7 text-[#6f5646] dark:text-[#dcc8b8]">
              {currentProduct.description}
            </p>

            <div className="surface-card mb-6 p-5">
              <p className="text-sm leading-7 text-[#6f5646] dark:text-[#dcc8b8]">
                Designed for a stronger restaurant feel: bold photography, cleaner pricing, and direct cart actions that support quick ordering.
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={addedToCart}
              className={`w-full rounded-full px-6 py-3 font-semibold text-white transition duration-300 shadow-md ${
                addedToCart
                  ? 'bg-brand-700'
                  : 'bg-brand-600 hover:bg-brand-500'
              }`}
            >
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
