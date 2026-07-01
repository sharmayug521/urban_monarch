import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, ShoppingBag, SlidersHorizontal, Check, Star, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import SEO from '../components/SEO';
import { useCart } from '../context/CartContext';

export default function Services() {
  const { addToCart } = useCart();
  const location = useLocation();

  // Selected Category filter state
  const [activeTab, setActiveTab] = useState<'all' | 'wear' | 'shoes' | 'accessories'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Quick buy state picker
  const [chosenSize, setChosenSize] = useState('');
  const [chosenColor, setChosenColor] = useState('');
  const [buyFeedback, setBuyFeedback] = useState<string | null>(null);

  // Synchronize category selection with query params (e.g., from clicking footer categories)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    if (cat === 'wear' || cat === 'shoes' || cat === 'accessories') {
      setActiveTab(cat);
    } else {
      setActiveTab('all');
    }
  }, [location.search]);

  // Set default size/color when a product is opened in quick configuration dialog
  useEffect(() => {
    if (selectedProduct) {
      setChosenSize(selectedProduct.sizes && selectedProduct.sizes.length > 0 ? selectedProduct.sizes[0] : 'Free Size');
      setChosenColor(selectedProduct.color);
    }
  }, [selectedProduct]);

  // Filter logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesTab = activeTab === 'all' || product.type === activeTab;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.material?.toLowerCase() || '').includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleAddToCart = (product: Product) => {
    // If product has multiple sizes, open the dialog first to let user select their exact fit!
    if (product.sizes && product.sizes.length > 0) {
      setSelectedProduct(product);
    } else {
      // Just add directly
      addToCart(product, 'Free Size', product.color, 1);
      triggerSuccessFeedback(product.name);
    }
  };

  const handleConfirmQuickAdd = () => {
    if (!selectedProduct) return;
    addToCart(selectedProduct, chosenSize, chosenColor, 1);
    const prodName = selectedProduct.name;
    setSelectedProduct(null);
    triggerSuccessFeedback(prodName);
  };

  const triggerSuccessFeedback = (name: string) => {
    setBuyFeedback(`Added ${name} directly to your shopping bag!`);
    setTimeout(() => setBuyFeedback(null), 3000);
  };

  return (
    <div className="bg-neutral-900 text-neutral-100 min-h-screen pt-28 pb-16">
      {/* Dynamic SEO configuration for collections page */}
      <SEO
        title="Explore Men's Wear, Footwear & Designer Accessories"
        description="Browse the complete catalog of Urban Monarch. Elevate your silhouette with premium cotton shirts, blazers, white sneakers, leather loafers, watches, and bags."
        keywords="premium shirts for men, luxury blazers, designer white sneakers, men's leather loafers, swiss chronographs, men's designer accessories, tailored trousers"
      />

      {/* JSON-LD Product Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/", 
          "@type": "Product", 
          "name": "shirt",
          "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600",
          "description": "A classic button-down shirt made with premium high-grade cotton, featuring a refined basket-weave structure. Perfect for transition from boardroom business hours to evening lounges",
          "brand": {
            "@type": "Brand",
            "name": "urban monarch"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://urbanclothing05.netlify.app/services",
            "priceCurrency": "INR",
            "price": "1999",
            "priceValidUntil": "2026-07-22",
            "availability": "https://schema.org/OnlineOnly",
            "itemCondition": "https://schema.org/NewCondition"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "5"
          }
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase block font-bold">
            THE ROYAL SUITE
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none">
            Our Elite Collections
          </h1>
          <p className="text-neutral-400 font-light text-sm max-w-lg mx-auto leading-relaxed">
            Every garment in our catalog is engineered to perfect menswear standards. Browse custom tailoring styles, formal footwear, and leather details.
          </p>
          <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Filter subheading & Dynamic Interactive Filter Bars & Search */}
        <div className="space-y-4">
          <h2 className="font-sans font-extrabold text-sm uppercase tracking-widest text-neutral-400 text-center md:text-left">
            Filter by Department (Apparel, Footwear, Watches)
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-neutral-950 p-4 border border-white/10 rounded-none">
          {/* Tabs switch */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Catalogue' },
              { id: 'wear', label: "Men's Wear" },
              { id: 'shoes', label: 'Footwear & Shoes' },
              { id: 'accessories', label: 'Accessories' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] font-mono rounded-none font-bold transition-all border ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-neutral-900 border-amber-500'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400 border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search text box input */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-neutral-500">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-amber-400 text-xs text-white pl-10 pr-4 py-2.5 rounded-none focus:outline-hidden"
              placeholder="Search e.g. Oxford, leather..."
            />
          </div>
        </div>
      </div>

        {/* Dynamic visual warning feed */}
        <AnimatePresence>
          {buyFeedback && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-3 bg-amber-500/10 border border-amber-500/25 rounded text-xs font-medium text-amber-300 text-center"
            >
              🎉 {buyFeedback}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid Collections Display */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 space-y-4">
            <ShieldAlert className="w-12 h-12 text-neutral-600 mx-auto" />
            <h3 className="text-sm font-semibold text-white">No products match your search</h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              Try adjusting your query or resetting category filter tab to discover alternative premium items.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="px-4 py-2 bg-neutral-850 text-white font-mono text-xs uppercase tracking-widest rounded transition-colors"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-neutral-950 border border-white/10 p-5 rounded-none flex flex-col justify-between group h-full relative hover:border-amber-500/40 transition-all bg-gradient-to-b from-neutral-950 to-neutral-900/60"
              >
                {/* Image layout container */}
                <div className="relative overflow-hidden bg-neutral-900 border border-white/10 rounded-none aspect-3/4 mb-4">
                  {product.isBestSeller && (
                    <span className="absolute top-3 left-3 z-10 bg-amber-400 text-black font-mono font-black text-[9px] px-2.5 py-0.5 rounded-none tracking-wider uppercase">
                      Best Seller
                    </span>
                  )}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Rating box overlay */}
                  <div className="absolute bottom-2.5 right-2.5 z-10 bg-neutral-900 border border-white/10 rounded-none px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span className="font-mono text-[9px] font-bold text-white">{product.rating}</span>
                  </div>
                </div>

                {/* Text specifics */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-[9px] font-mono tracking-widest uppercase text-neutral-500">
                    <span>{product.category}</span>
                    <span>{product.color}</span>
                  </div>
                  <h3 className="font-sans font-black text-lg text-white group-hover:text-amber-400 transition-colors line-clamp-1 uppercase tracking-tighter">
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light">
                    {product.description}
                  </p>

                  {/* Attributes details bullets */}
                  <div className="flex flex-wrap gap-1.5 pt-1.5 text-[10px] text-neutral-500">
                    {product.material && (
                      <span className="px-2 py-0.5 bg-neutral-900 border border-white/10 rounded-none">
                        {product.material}
                      </span>
                    )}
                    {product.strap && (
                      <span className="px-2 py-0.5 bg-neutral-900 border border-white/10 rounded-none">
                        Strap: {product.strap}
                      </span>
                    )}
                    {product.waterResistant && (
                      <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/10 text-[9px] text-amber-400 font-mono font-semibold rounded-none uppercase">
                        Water Resistant
                      </span>
                    )}
                    {product.uvProtection && (
                      <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/10 text-[9px] text-amber-400 font-mono font-semibold rounded-none uppercase">
                        UV Polarized
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and Cart Call Option */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <div className="flex flex-col">
                    <span className="font-mono text-base font-black text-amber-400">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="font-mono text-[10px] text-neutral-500 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="p-2.5 px-4 bg-amber-500 hover:bg-white text-black text-xs font-black uppercase tracking-widest rounded-none flex items-center space-x-1.5 transition-all text-[10px]"
                    title="Add to Shopping Bag"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Size Configurator Dialog Frame */}
        <AnimatePresence>
          {selectedProduct && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-neutral-950 z-50 backdrop-blur-xs"
              />

              {/* Dialog Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-neutral-900 border border-neutral-800 p-6 rounded shadow-2xl z-50 space-y-6 text-left"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase">
                      Select Your Preferences
                    </span>
                    <h3 className="font-sans font-bold text-lg text-white">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-1 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex gap-4 p-3 bg-neutral-950/40 border border-neutral-850 rounded">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    className="w-14 h-18 object-cover rounded"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-xs pt-0.5 space-y-1">
                    <p className="text-neutral-400">
                      Material Specification:{' '}
                      <strong className="text-neutral-200">
                        {selectedProduct.material || 'N/A specification'}
                      </strong>
                    </p>
                    <p className="text-neutral-400">
                      Color Accents:{' '}
                      <strong className="text-neutral-200">{selectedProduct.color}</strong>
                    </p>
                    <p className="text-amber-400 font-mono font-bold text-sm">
                      ₹{selectedProduct.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                {/* Size options */}
                {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                      Select Garment Fit Size:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setChosenSize(sz)}
                          className={`w-10 h-10 text-xs font-mono font-bold border rounded flex items-center justify-center transition-all ${
                            chosenSize === sz
                              ? 'bg-amber-400 border-amber-400 text-neutral-950'
                              : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700 text-neutral-300'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Trigger button options */}
                <div className="flex gap-4 pt-4 border-t border-neutral-800">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 py-3 border border-neutral-800 text-neutral-401 hover:text-white font-bold uppercase tracking-widest text-[10px] rounded transition-colors"
                  >
                    Cancel Fit
                  </button>
                  <button
                    onClick={handleConfirmQuickAdd}
                    className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold uppercase tracking-widest text-[10px] rounded flex items-center justify-center space-x-1.5 transition-all text-center animate-pulse"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Confirm Preference</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
