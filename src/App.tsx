import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';

// Scroll to Top action on route shift helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* Force resets scroll when paths change */}
        <ScrollToTop />

        {/* Global Skeleton Frame */}
        <div className="flex flex-col min-h-screen bg-neutral-900 selection:bg-amber-400 selection:text-neutral-900">
          {/* Header */}
          <Navbar />

          {/* Interactive Slide-out Cart Sidebar drawer */}
          <CartDrawer />

          {/* Active Router Page views */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sitemap" element={<Sitemap />} />
              {/* Fallback route redirection */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Footer Area */}
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
