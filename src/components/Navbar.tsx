import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Collections', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 py-3 shadow-lg shadow-black/10'
          : 'bg-neutral-900/40 backdrop-blur-xs border-b border-neutral-900/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* LOGO */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-baseline space-x-2 text-white hover:text-amber-400 transition-colors"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase">Urban Monarch</span>
            <div className="h-1.5 w-1.5 bg-amber-500 rounded-full"></div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[10px] uppercase tracking-[0.2em] font-bold transition-colors py-2 ${
                    isActive ? 'text-amber-400' : 'text-neutral-300/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-neutral-300 hover:text-amber-400 transition-colors rounded-full hover:bg-neutral-800/50"
              aria-label="Toggle Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-neutral-900 font-mono font-bold text-[10px] rounded-full flex items-center justify-center border-2 border-neutral-900"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Premium CTA on Desktop */}
            <Link
              to="/services"
              className="hidden lg:flex items-center space-x-1.5 px-5 py-2.5 bg-amber-500 hover:bg-white text-black uppercase font-black tracking-widest text-[10px] transition-all duration-300"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
            </Link>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded hover:bg-neutral-800/50"
              aria-label="Open Navigation List"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-b border-neutral-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-3 rounded text-sm uppercase tracking-widest font-medium transition-all ${
                      isActive
                        ? 'bg-amber-500/10 text-amber-400 border-l-4 border-amber-400 pl-4'
                        : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/services"
                className="w-full text-center flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 font-bold uppercase tracking-widest text-xs rounded"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
