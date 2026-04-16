import { useEffect, useState } from 'react';
import { FaTimes, FaTrash, FaPaperPlane } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { formatTsh } from '../utils/formatCurrency';

const contactNumber = '+255683186987';

const CartModal = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity,
    cartCount
  } = useCart();

  const [cartProducts, setCartProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  // Mini chat state
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const whatsappURL = `https://wa.me/${contactNumber.replace(/\+/g,'')}?text=Hello! I want to order my cart items.`;
  const smsURL = `sms:${contactNumber}?body=Hello! I want to order my cart items.`;
  const callURL = `tel:${contactNumber}`;

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : '';
  }, [isCartOpen]);

  useEffect(() => {
    const cartItems = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    }).filter(Boolean);

    setCartProducts(cartItems);

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
  }, [cart]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages(prev => [...prev, { sender: 'user', text: newMessage }]);
    setNewMessage('');

    // Simulate mhudumu reply
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'staff', text: 'Thank you! We received your message.' }]);
    }, 1000);
  };

  if (!isCartOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="mx-4 flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-[30px] border border-white/50 bg-[#fffaf5] shadow-2xl dark:border-white/10 dark:bg-[#18110d]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-brand-600 p-5 text-white">
          <h2 className="text-xl font-bold">
            {cartCount > 0 ? 'Your Cart' : 'Cart is Empty'}
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-full p-1 transition hover:bg-black/10"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4">
          {cartCount === 0 ? (
            <div className="text-center py-8">
              <p className="mb-4 text-[#6e5545] dark:text-[#d8c4b5]">
                Your cart is empty.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="cta-primary"
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartProducts.map(item => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-[22px] border border-brand-100 bg-white/70 p-3 dark:border-brand-400/10 dark:bg-white/5"
                >
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="h-16 w-16 max-h-[80px] rounded-2xl object-cover"
                  />
                  <div className="flex-grow">
                    <h3 className="font-medium text-ink-900 dark:text-white">{item.name}</h3>
                    <p className="text-brand-600 dark:text-brand-200">
                      {formatTsh(item.price)} {item.unit}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-100 text-gray-900 dark:bg-brand-400/20 dark:text-white"
                    >-</button>
                    <span className="w-10 text-center dark:text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-100 text-gray-900 dark:bg-brand-400/20 dark:text-white"
                    >+</button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 transition hover:text-red-600 dark:text-white"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartCount > 0 && (
          <div className="space-y-2 border-t border-brand-200/80 p-4 dark:border-brand-400/15">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-medium text-[#6e5545] dark:text-[#d8c4b5]">Subtotal:</span>
              <span className="font-bold text-gray-900 dark:text-white">
                {formatTsh(subtotal)}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="w-full rounded-2xl bg-[#21a45d] py-3 text-center font-medium text-white transition hover:bg-[#1c8f51]">Order via WhatsApp</a>
              <a href={smsURL} className="w-full rounded-2xl bg-[#3460d9] py-3 text-center font-medium text-white transition hover:bg-[#2e56c2]">Order via SMS</a>
              <a href={callURL} className="w-full rounded-2xl bg-[#3e322b] py-3 text-center font-medium text-white transition hover:bg-[#2e2520]">Call Us</a>
            </div>

            <div className="mt-4 border-t border-brand-200/80 pt-3 dark:border-brand-400/15">
              <h3 className="mb-2 font-medium text-ink-900 dark:text-white">Chat with us</h3>
              <div className="h-40 space-y-1 overflow-y-auto rounded-2xl bg-[#fff3e4] p-2 dark:bg-white/5">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`max-w-xs rounded-xl p-2 text-sm ${msg.sender === 'user' ? 'bg-[#d6f0df] text-gray-900 dark:bg-[#1f6a43] dark:text-white' : 'bg-brand-100 text-gray-900 dark:bg-brand-400/20 dark:text-white'}`}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-grow rounded-2xl border border-brand-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400 dark:border-brand-400/15 dark:bg-white/5 dark:text-white"
                  onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage} className="flex items-center justify-center rounded-2xl bg-brand-600 px-4 text-white transition hover:bg-brand-500">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
