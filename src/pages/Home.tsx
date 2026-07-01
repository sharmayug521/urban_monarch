import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, Award, Sparkles, ShoppingBag, ArrowRight, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { PRODUCTS, TESTIMONIALS } from '../data';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useCart();

  // Selected Best Sellers from data
  const bestSellerList = PRODUCTS.filter((item) => item.isBestSeller);

  // We can add simple aesthetic features like "add to wishlist" or simple notification feedback.
  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    // Oxford Shirt default size is M, Sneakers default size is 9, belt/wallet are size 'N/A'
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[1] || product.sizes[0] : 'Free Size';
    const defaultColor = product.color;
    addToCart(product, defaultSize, defaultColor, 1);
  };

  return (
    <div className="bg-neutral-900 text-neutral-100 min-h-screen">
      {/* SEO configuration for Home page */}
      <SEO
        title="Premium Men's Designer Clothing & Luxury Suits"
        description="Discover premium men's designer jackets, tailored trousers, elite footwear, Swiss chronographs, and luxury accessories at Urban Monarch. Elevate your everyday style with curated men's wardrobe essentials."
        keywords="urban monarch, men's premium clothing, designer jackets for men, tailored trousers, elite footwear, swiss watches, luxury men's apparel, smart casual menswear"
      />

      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center bg-radial from-neutral-850 to-neutral-950 overflow-hidden pt-20">
        {/* Background decorative styling */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-5xl mx-auto"
          >
            <span className="font-mono text-xs tracking-[0.4em] uppercase text-amber-500 font-bold block">
              Premium Men's Fashion
            </span>
            <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl lg:text-[110px] uppercase tracking-tighter text-white leading-[0.85] mb-2 pt-2">
              Rule Your <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>Style</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Elevate your everyday wardrobe with premium pieces designed for confidence, comfort, and sophistication.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                to="/services"
                className="w-full sm:w-auto bg-amber-500 text-black px-10 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all duration-300 text-center"
              >
                Shop Collection
              </Link>
              <Link
                to="/blog"
                className="w-full sm:w-auto border border-white/20 hover:border-white text-white px-10 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-300 text-center"
              >
                Explore Trends
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Core Quick Anchors bottom strip */}
        <div className="absolute bottom-6 left-0 right-0 z-10 hidden md:block text-center font-mono text-[10px] uppercase text-neutral-600 tracking-[0.3em]">
          Premium Cotton • Genuine Calf Leather • Swiss Chronographs
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase">
              Curated Wardrobe
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
              Featured Categories
            </h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative h-96 overflow-hidden rounded-none bg-neutral-900 border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600"
                alt="Men's Wear category background"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-8 top-8 opacity-15 text-7xl font-black font-sans z-20 select-none text-white pointer-events-none">01</div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 space-y-3">
                <span className="font-mono text-[10px] text-amber-500 uppercase tracking-widest font-bold">
                  Apparel
                </span>
                <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tighter">
                  Men's Wear
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  Premium shirts, t-shirts, jackets, trousers, and denim crafted for modern gentlemen.
                </p>
                <div className="w-8 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-16"></div>
                <div className="pt-2">
                  <Link
                    to="/services?cat=wear"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors uppercase tracking-wider"
                  >
                    <span>Select Range</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Category 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative h-96 overflow-hidden rounded-none bg-neutral-900 border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600"
                alt="Footwear category background"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-8 top-8 opacity-15 text-7xl font-black font-sans z-20 select-none text-white pointer-events-none">02</div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 space-y-3">
                <span className="font-mono text-[10px] text-amber-500 uppercase tracking-widest font-bold">
                  Footwear
                </span>
                <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tighter">
                  Footwear
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  Stylish sneakers, loafers, boots, and formal shoes designed for every occasion.
                </p>
                <div className="w-8 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-16"></div>
                <div className="pt-2">
                  <Link
                    to="/services?cat=shoes"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors uppercase tracking-wider"
                  >
                    <span>Select Range</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Category 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative h-96 overflow-hidden rounded-none bg-neutral-900 border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600"
                alt="Accessories category background"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-8 top-8 opacity-15 text-7xl font-black font-sans z-20 select-none text-white pointer-events-none">03</div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 space-y-3">
                <span className="font-mono text-[10px] text-amber-500 uppercase tracking-widest font-bold">
                  Details
                </span>
                <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tighter">
                  Accessories
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  Watches, belts, wallets, sunglasses, and bags that complete your look.
                </p>
                <div className="w-8 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-16"></div>
                <div className="pt-2">
                  <Link
                    to="/services?cat=accessories"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors uppercase tracking-wider"
                  >
                    <span>Select Range</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="text-center md:text-left space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase block">
                Popular Demands
              </span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
                Elite Masterpieces
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-400 hover:text-white transition-colors py-2 border-b-2 border-amber-400 hover:border-white"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {bestSellerList.map((product) => (
              <div
                key={product.id}
                className="bg-neutral-950 border border-white/10 rounded-none p-4 flex flex-col justify-between group relative hover:border-amber-500/40 transition-all duration-300"
              >
                {/* Image & Badge */}
                <div className="relative overflow-hidden rounded-none bg-neutral-900 border border-white/10 aspect-3/4 mb-4">
                  <span className="absolute top-2.5 left-2.5 z-10 bg-amber-400 text-black text-[9px] font-mono font-black px-2 py-0.5 rounded-none uppercase">
                    BEST
                  </span>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover Quick Add overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full py-2.5 bg-amber-500 hover:bg-white text-black text-xs font-black uppercase tracking-widest rounded-none flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Quick Add</span>
                    </button>
                  </div>
                </div>

                {/* Info details */}
                <div className="space-y-1.5">
                  <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="font-sans font-black text-sm uppercase tracking-tighter text-white line-clamp-1 group-hover:text-amber-405 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs">
                    <span className="font-mono font-black text-amber-500">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="font-mono text-neutral-500 line-through text-[10px]">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Urban Monarch */}
      <section className="py-20 bg-neutral-950 border-t border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase">
              Brand Values
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
              The Heritage Experience
            </h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="p-8 bg-neutral-900/40 border border-white/10 rounded-none space-y-4 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-none flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-lg text-white uppercase tracking-tighter">
                Premium Quality Materials
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Handcrafted from highest quality textiles, long-staple cotton, natural wool, and pure cow leathers to support all-day wearing elegance.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-8 bg-neutral-900/40 border border-white/10 rounded-none space-y-4 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-none flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-lg text-white uppercase tracking-tighter">
                Modern & Timeless Designs
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Combining global runway aesthetics with traditional tailored shapes, our selections support multi-season styling relevance.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-8 bg-neutral-900/40 border border-white/10 rounded-none space-y-4 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-none flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-lg text-white uppercase tracking-tighter">
                Affordable Luxury Fashion
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Direct-from-atelier production cuts middleman markups, giving you premium masterwork garments at fair price thresholds.
              </p>
            </div>

            {/* Value 4 */}
            <div className="p-8 bg-neutral-900/40 border border-white/10 rounded-none space-y-4 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-none flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-lg text-white uppercase tracking-tighter">
                Secure Online Shopping
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Every transaction and detail is fully encrypted with security measures so you can shop with comfort and safety.
              </p>
            </div>

            {/* Value 5 */}
            <div className="p-8 bg-neutral-900/40 border border-white/10 rounded-none space-y-4 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-none flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-lg text-white uppercase tracking-tighter">
                Fast Delivery
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Our logistics network initiates dispatch within 24 hours of checkout to deliver style to your doorstep instantly.
              </p>
            </div>

            {/* Value 6 */}
            <div className="p-8 bg-neutral-900/40 border border-white/10 rounded-none space-y-4 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-none flex items-center justify-center">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-lg text-white uppercase tracking-tighter">
                Easy Returns
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Try on the outfits at home has never been easier with our simple, hassle-free 15 days return policy guarantees.
              </p>
            </div>
          </div>  </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase">
              Endorsements
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
              Client Testimonials
            </h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-neutral-950 border border-neutral-800 rounded p-8 flex flex-col justify-between space-y-6 relative"
              >
                {/* Quotation mark decoration */}
                <span className="absolute top-4 right-6 font-serif text-neutral-800 text-6xl leading-none select-none">
                  “
                </span>

                <div className="space-y-4">
                  <div className="flex text-amber-400">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-300 italic leading-relaxed">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center space-x-3.5 border-t border-neutral-900 pt-4">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-neutral-800"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">
                      {test.name}
                    </h4>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-510">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styled Call Out Strip */}
      <section className="relative py-24 bg-radial from-neutral-800 to-neutral-950 overflow-hidden text-center border-t border-neutral-800">
        <div className="absolute inset-0 bg-neutral-950/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase text-white tracking-widest">
            Join the Kingdom of Style
          </h2>
          <p className="text-sm text-neutral-300 max-w-lg mx-auto font-light leading-relaxed">
            Create an account or register for your premium loyalty pass. Get 10% off your initial purchase and priority access to limited seasonal capsule catalogs.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white hover:bg-neutral-100 text-neutral-950 font-bold uppercase tracking-widest text-xs rounded transition-transform active:scale-95 inline-block"
            >
              Sign Up For Priority Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
