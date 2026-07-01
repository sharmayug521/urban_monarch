import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Presentation */}
          <div className="space-y-4">
            <Link to="/" className="flex items-baseline space-x-1.5 text-white">
              <span className="font-sans font-black text-xl tracking-tighter uppercase leading-tight">URBAN MONARCH</span>
              <div className="h-1.5 w-1.5 bg-amber-500 rounded-full"></div>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mt-4">
              Elevate your everyday wardrobe with premium men's fashion designed for confidence, comfort, and sophistication.
            </p>
            {/* Social media handles */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://instagram.com/urbanmonarchofficial"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/UrbanMonarch"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/UrbanMonarch"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
                title="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/urban-monarch-fashion"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Loops */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-xs tracking-widest text-white uppercase">
              Browse Store
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  Our Story (About)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Product Collections
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-amber-400 transition-colors">
                  Style Journal (Blog)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Help & Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Shopping Categories */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-xs tracking-widest text-white uppercase">
              Quick Shop
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services?cat=wear" className="hover:text-amber-400 transition-colors">
                  Men's Designer Wear
                </Link>
              </li>
              <li>
                <Link to="/services?cat=shoes" className="hover:text-amber-400 transition-colors">
                  Premium Footwear
                </Link>
              </li>
              <li>
                <Link to="/services?cat=accessories" className="hover:text-amber-400 transition-colors">
                  Statement Accessories
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Best Seller Highlights
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Support and Address */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-xs tracking-widest text-white uppercase">
              Get In Touch
            </h3>
            <ul className="space-y-3.5 text-sm text-neutral-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Connaught Place, New Delhi, India – 110001
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-amber-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="mailto:support@urbanmonarch.com" className="hover:text-amber-400 transition-colors">
                  support@urbanmonarch.com
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-medium text-neutral-300">Mon-Sat: 09:00 AM - 07:00 PM</p>
                  <p className="text-neutral-550">Sunday Off</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Corporate bottom Copyright block */}
      <div className="bg-neutral-990 border-t border-neutral-900 py-6 text-xs font-mono text-center text-neutral-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Urban Monarch Fashion Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Terms of Service</span>
            <Link to="/sitemap" className="hover:text-neutral-400 transition-colors cursor-pointer">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
