import { useCart } from '../context/CartContext';
import { formatTsh } from '../utils/formatCurrency';

const ProductCard = ({ product }) => {
  const { openProductModal } = useCart();

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to order ${product.name} priced at ${formatTsh(product.price)}${product.unit || ''}.`
  );
  const whatsappURL = `https://wa.me/255683186987?text=${whatsappMessage}`;

  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-[26px] border border-white/60 bg-white/78 shadow-warm transition-all duration-300 hover:-translate-y-1.5 dark:border-white/10 dark:bg-[#1a1411]/86"
      onClick={() => openProductModal(product)}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#23160f]/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
          {product.category.replace('-', ' ')}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-ink-900 dark:text-white mb-2">
          {product.name}
        </h3>

        <p className="font-bold text-brand-600 dark:text-brand-200">
          {formatTsh(product.price)}
          {product.unit && (
            <span className="ml-1 text-sm font-normal text-[#7e6351] dark:text-[#d4bfae]">
              {product.unit}
            </span>
          )}
        </p>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6c5344] dark:text-[#d8c4b5]">
          {product.description}
        </p>

        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500"
          onClick={(e) => e.stopPropagation()}
        >
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
