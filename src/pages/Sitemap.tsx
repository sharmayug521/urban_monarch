import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, ShoppingBag, BookOpen, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function Sitemap() {
  const sections = [
    {
      title: 'Store Directory',
      description: 'Primary navigational sections of our online boutique.',
      icon: Compass,
      links: [
        { name: 'Home Page', path: '/' },
        { name: 'Our Story (About)', path: '/about' },
        { name: 'Elite Collections (Shop)', path: '/services' },
        { name: 'Style Journal (Blog)', path: '/blog' },
        { name: 'Concierge Desk (Contact)', path: '/contact' },
      ],
    },
    {
      title: 'Elite Collections',
      description: 'Shop curated categories directly with custom attributes.',
      icon: ShoppingBag,
      links: [
        { name: 'Designer Outerwear', path: '/services?filter=outerwear' },
        { name: 'Elite Tops', path: '/services?filter=tops' },
        { name: 'Tailored Bottoms', path: '/services?filter=bottoms' },
        { name: 'All Collections', path: '/services' },
      ],
    },
    {
      title: 'Style Journal Guides',
      description: 'Read the latest trends and bespoke wardrobe reviews.',
      icon: BookOpen,
      links: [
        { name: 'The Art of Layering: Autumn Capsule Wardrobe', path: '/blog' },
        { name: 'Bespoke Tailoring vs Ready-to-Wear: The Real Fit', path: '/blog' },
        { name: 'Essential Leather Accessories for the Modern Gentleman', path: '/blog' },
        { name: 'Footwear Etiquette: Matching Shoes with Your Suits', path: '/blog' },
      ],
    },
    {
      title: 'Client Support & Legal',
      description: 'Frequently accessed terms, privacy, and support channels.',
      icon: HelpCircle,
      links: [
        { name: 'Concierge Support Lines', path: '/contact' },
        { name: 'Frequently Asked Questions (FAQ)', path: '/contact' },
        { name: 'XML Sitemap (Search Engines)', path: '/sitemap.xml', external: true },
      ],
    },
  ];

  return (
    <div className="bg-neutral-900 text-neutral-150 min-h-screen pt-28 pb-16">
      <SEO
        title="Visual Sitemap & Directory"
        description="Navigate all departments, collections, blog posts, and support documentation of Urban Monarch quickly via our structured sitemap."
        keywords="urban monarch sitemap, brand directory, navigation index, website structure, menswear collections catalog"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase block font-bold">
            ARCHITECTURAL MAP
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none">
            Site Directory
          </h1>
          <p className="text-neutral-400 font-light text-sm max-w-lg mx-auto leading-relaxed">
            Use our structured visual map to browse all available sections, elite retail categories, styling guides, and concierge departments.
          </p>
          <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Visual Map Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {sections.map((section, idx) => {
            const IconComp = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-neutral-950 border border-white/10 p-8 rounded-none flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Category Title bar */}
                  <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                    <div className="p-2.5 bg-neutral-900 border border-white/10 text-amber-500 rounded-none">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-black text-lg text-white uppercase tracking-tighter">
                        {section.title}
                      </h3>
                      <p className="text-xs text-neutral-450 font-light mt-0.5">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {/* Links loop */}
                  <ul className="space-y-3.5 pl-2">
                    {section.links.map((link) => (
                      <li key={link.name} className="flex items-center space-x-2.5 group/link">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/40 group-hover/link:text-amber-500 transition-colors" />
                        {link.external ? (
                          <a
                            href={link.path}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-neutral-300 hover:text-amber-400 font-light tracking-wide transition-colors"
                          >
                            {link.name} <span className="font-mono text-[9px] text-neutral-500 ml-1">↗</span>
                          </a>
                        ) : (
                          <Link
                            to={link.path}
                            className="text-sm text-neutral-300 hover:text-amber-400 font-light tracking-wide transition-colors"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* XML Sitemap and SEO verification banner */}
        <div className="bg-neutral-950 border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-white font-sans font-black uppercase tracking-wider text-sm">
              XML SITEMAP INSTALLED
            </h4>
            <p className="text-xs text-neutral-400 max-w-xl font-light leading-relaxed">
              For search engines and crawlers, a fully configured XML schema compliant with standard Sitemap 0.9 protocol is served at the domain root for seamless indexation.
            </p>
          </div>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-amber-500 hover:bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-none transition-all flex items-center space-x-1.5 shrink-0 cursor-pointer"
          >
            <span>Open XML Sitemap</span>
            <span className="font-mono text-[9px]">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
