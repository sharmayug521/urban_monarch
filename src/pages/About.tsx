import { Shield, Sparkles, HeartHandshake, Eye, AlignLeft } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function About() {
  const values = [
    {
      id: 'valr-quality',
      title: 'Our Quality',
      desc: 'Every product is carefully designed using durable materials. From organic fibers to sturdy zippers, we never cut corners on engineering.',
      icon: Shield,
    },
    {
      id: 'valr-style',
      title: 'Our Style',
      desc: 'Fashion-forward collections inspired by global trends. We blend street-culture relaxations with timeless bespoke tailoring philosophies.',
      icon: Sparkles,
    },
    {
      id: 'valr-comfort',
      title: 'Our Comfort',
      desc: 'Designed for all-day wear without compromising on poise. We carry out fit trials to ensure your pants, footwear, and jackets move with you.',
      icon: AlignLeft,
    },
    {
      id: 'valr-customer',
      title: 'Customer First',
      desc: 'Exceptional shopping experiences and support. Our team resolves delivery questions and offers flexible size returns.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="bg-neutral-900 text-neutral-150 min-h-screen pt-28 pb-16">
      {/* Page SEO */}
      <SEO
        title="Our Story & Premium Brand Values"
        description="Learn about the origin of Urban Monarch, our bespoke tailoring mission, and how we deliver luxury menswear designed for modern urban environments."
        keywords="urban monarch heritage, luxury menswear brand, bespoke tailoring story, premium cotton apparel, bespoke blazer fitting"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page title header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase block font-bold">
            THE ATELIER HERITAGE
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none">
            About Urban Monarch
          </h1>
          <p className="text-neutral-400 font-light max-w-lg mx-auto text-sm leading-relaxed">
            Crafting premium everyday attire for gentlemen with a passion for quality structure and lasting elegance.
          </p>
          <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Brand story layout with image overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter text-white">
              The Modern Gentleman's Standard
            </h2>
            <div className="h-[2px] bg-amber-500 w-20" />
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Urban Monarch was founded with a simple vision: to create stylish, high-quality menswear that empowers modern men to express confidence through fashion.
            </p>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Inspired by urban lifestyles and timeless elegance, our collections combine contemporary trends with premium craftsmanship. Whether you're dressing for work, travel, casual outings, or special occasions, Urban Monarch delivers fashion that fits your lifestyle.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              From our physical headquarters at Level 5 in Connaught Place, New Delhi, our creative directors supervise the selection of certified materials to ensure each thread represents durable distinction. We believe clothing is an armor of self-expression.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative group rounded-none overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
                alt="Tailoring details workshop"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Mission and Vision Bento grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {/* Mission */}
          <div className="p-8 sm:p-10 bg-neutral-900 border border-white/10 rounded-none relative overflow-hidden group">
            <div className="absolute top-6 right-6 text-amber-500/10 group-hover:text-amber-500/15 transition-colors">
              <Eye className="w-16 h-16" />
            </div>
            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-amber-500 uppercase block font-bold">
                Directives
              </span>
              <h3 className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-tighter">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                To provide premium men's fashion that blends style, comfort, and affordability while helping men build confidence through their appearance.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 bg-neutral-900 border border-white/10 rounded-none relative overflow-hidden group">
            <div className="absolute top-6 right-6 text-amber-500/10 group-hover:text-amber-500/15 transition-colors">
              <Eye className="w-16 h-16" />
            </div>
            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-amber-500 uppercase block font-bold">
                Aspiration
              </span>
              <h3 className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-tighter">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                To become a globally recognized menswear brand known for quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="pt-10">
          <div className="text-center space-y-3 mb-12">
            <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase block font-bold">
              Ethic Codes
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-4xl text-white uppercase tracking-tighter">
              Our Fundamental Pillars
            </h2>
            <div className="w-12 h-[2px] bg-amber-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {values.map((v) => {
              const IconComp = v.icon;
              return (
                <div
                  key={v.id}
                  className="bg-neutral-950 border border-white/10 p-6 rounded-none text-center space-y-4 hover:border-amber-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-none bg-neutral-900 border border-white/10 text-amber-400 flex items-center justify-center mx-auto group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-black text-sm text-white uppercase tracking-wider">
                    {v.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
