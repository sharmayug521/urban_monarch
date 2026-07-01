import { useState } from 'react';
import { Clock, Calendar, ArrowRight, ArrowLeft, Search, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOGS } from '../data';
import { Blog } from '../types';
import SEO from '../components/SEO';

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Filter Categories
  const categories = ['All', 'Trends', 'Guides', 'Footwear', 'Accessories', 'Lifestyle'];

  const filteredBlogs = BLOGS.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="bg-neutral-900 text-neutral-100 min-h-screen pt-28 pb-16">
      {/* Blog SEO setting block */}
      <SEO
        title="Style Journal - Men's Fashion Trends & Styling Guides"
        description="Master the art of menswear coordination. Read the Urban Monarch journal on building a capsule wardrobe, shoe formality guides, and smart casual rules."
        keywords="menswear style journal, capsule wardrobe guides, shoe formality rules, smart casual guide, men's style blog, fashion trends"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatePresence mode="wait">
          {!selectedBlog ? (
            /* --- MASTER VIEW: BLOG DIRECTORY --- */
            <motion.div
              key="directory"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* Header Title Grid */}
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <span className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase block font-bold">
                  URBAN TRENDSETTING EDITORIAL
                </span>
                <h1 className="font-sans font-black text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none">
                  The Style Journal
                </h1>
                <p className="text-neutral-400 font-light text-sm max-w-lg mx-auto leading-relaxed">
                  Refined guides designed to help you organize a capsule wardrobe, master accessories details, and coordinate formal layers.
                </p>
                <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-4" />
              </div>

              {/* Filters / Search Strip */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-neutral-950 p-4 border border-white/10 rounded-none">
                {/* Horizontal scrollable categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 text-[10px] uppercase tracking-[0.18em] font-mono rounded-none font-bold transition-all border ${
                        activeCategory === cat
                          ? 'bg-amber-500 text-neutral-900 border-amber-500'
                          : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400 border-transparent'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Keyword search bar */}
                <div className="relative w-full md:max-w-xs">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-neutral-500">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-amber-400 text-xs text-white pl-10 pr-4 py-2.5 rounded-none focus:outline-hidden"
                    placeholder="Search style topics..."
                  />
                </div>
              </div>

              {/* Blogs Core Grid */}
              <div className="space-y-4">
                <h2 className="font-sans font-extrabold text-sm uppercase tracking-widest text-neutral-400">
                  Recent Style Columns
                </h2>
                {filteredBlogs.length === 0 ? (
                  <div className="text-center py-20 text-neutral-500">
                    <p className="text-sm">No journal notes found matching your criteria.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredBlogs.map((post) => (
                      <article
                        key={post.id}
                        className="bg-neutral-950 border border-white/10 overflow-hidden rounded-none group flex flex-col justify-between h-full hover:border-amber-500/40 transition-all duration-300"
                      >
                        <div>
                          {/* Image Frame */}
                          <div className="relative overflow-hidden aspect-16/10 bg-neutral-900 border-b border-white/10">
                            <img
                              src={post.imageUrl}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <span className="absolute top-3.5 right-3.5 z-10 bg-neutral-950 border border-white/10 text-[9px] font-mono font-black text-amber-500 px-3 py-1 uppercase rounded-none">
                              {post.category}
                            </span>
                          </div>

                          {/* Title details */}
                          <div className="p-6 space-y-3">
                            <div className="flex items-center space-x-4 text-[10px] font-mono text-neutral-510">
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-amber-500" /> {post.date}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-amber-500" /> {post.readingTime}
                              </span>
                            </div>

                            <h3 className="font-sans font-black text-lg sm:text-xl text-white group-hover:text-amber-400 transition-colors leading-snug uppercase tracking-tighter">
                              {post.title}
                            </h3>

                            <p className="text-xs text-neutral-400 leading-relaxed font-light line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>

                        {/* Read tag bottom link */}
                        <div className="p-6 pt-0">
                          <button
                            onClick={() => {
                              setSelectedBlog(post);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 uppercase tracking-widest pt-2.5"
                          >
                            <span>Read Full Story</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            /* --- READER VIEW: EXPANDED ARTICLE READER --- */
            <motion.div
              key="post-expanded"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-3xl mx-auto space-y-8"
            >
              {/* Back CTA Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white pb-4 hover:underline"
              >
                <ArrowLeft className="w-4 h-4 text-amber-500" />
                <span>Return to style journal</span>
              </button>

              {/* Post Headers detail */}
              <div className="space-y-4">
                <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono font-black text-amber-500 uppercase tracking-widest rounded-none">
                  {selectedBlog.category}
                </span>

                <h1 className="font-sans font-black text-3xl sm:text-5xl text-white leading-tight uppercase tracking-tighter">
                  {selectedBlog.title}
                </h1>

                <div className="flex items-center space-x-6 text-xs text-neutral-400 font-mono border-b border-white/10 pb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-500" /> {selectedBlog.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" /> {selectedBlog.readingTime}
                  </span>
                </div>
              </div>

              {/* Cover Banner Image */}
              <div className="rounded-none overflow-hidden border border-white/10 aspect-21/9 bg-neutral-900 shadow-xl">
                <img
                  src={selectedBlog.imageUrl}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Main article Content and render block */}
              <div className="prose prose-invert prose-amber max-w-none text-neutral-300 text-sm sm:text-base leading-relaxed font-light space-y-6">
                {selectedBlog.content.split('\n\n').map((para, i) => {
                  if (para.startsWith('###')) {
                    // Render custom heading subtagger
                    return (
                      <h3
                        key={i}
                        className="font-sans font-black text-white text-lg sm:text-xl uppercase tracking-tighter pt-4"
                      >
                        {para.replace('###', '').trim()}
                      </h3>
                    );
                  }
                  if (para.startsWith('-') || para.startsWith('*')) {
                    // Render simple lists
                    const listItems = para.split('\n');
                    return (
                      <ul key={i} className="list-disc pl-6 space-y-2 text-neutral-400 text-xs sm:text-sm">
                        {listItems.map((li, idx) => (
                           <li key={idx}>{li.replace(/^[-*]\s*/, '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (/^\d+\./.test(para)) {
                    // Render ordered list items
                    const oItems = para.split('\n');
                    return (
                      <ol key={i} className="list-decimal pl-6 space-y-2 text-neutral-400 text-xs sm:text-sm">
                        {oItems.map((li, idx) => (
                          <li key={idx}>{li.replace(/^\d+\.\s*/, '')}</li>
                        ))}
                      </ol>
                    );
                  }

                  // Default render paragraph text
                  return <p key={i}>{para}</p>;
                })}
              </div>

              {/* Reader bottom footer banner box */}
              <div className="bg-neutral-950 p-6 rounded-none border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 bg-neutral-900 border border-white/10 rounded-none text-amber-500">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-sans font-black uppercase tracking-wider text-sm select-none">
                      Aesthetic Masterpiece Curations
                    </h4>
                    <p className="text-xs text-neutral-400 max-w-sm mt-0.5 font-light">
                      Did this guide help you form ideas? Explore our new arrivals to complete your clothing armor today.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-5 py-3 bg-amber-500 hover:bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-none transition-all flex items-center space-x-1.5 shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return Directory</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
