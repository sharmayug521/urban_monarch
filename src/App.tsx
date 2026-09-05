import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

// Load pages only when the user visits them
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

// Scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
}

// Small loading screen
function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-neutral-900">
      <div className="text-amber-500 text-xs uppercase tracking-[0.3em]">
        Loading...
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />

        <div className="flex flex-col min-h-screen bg-neutral-900 selection:bg-amber-400 selection:text-neutral-900">

          <Navbar />

          <CartDrawer />

          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/services" element={<Services />} />

                <Route path="/blog" element={<Blog />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/sitemap" element={<Sitemap />} />

                <Route path="*" element={<Home />} />

              </Routes>
            </Suspense>
          </main>

          <Footer />

        </div>
      </BrowserRouter>
    </CartProvider>
  );
}