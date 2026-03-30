import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Beer', path: '/beers' },
  { label: 'Food', path: '/menu' },
  { label: 'Shop', path: 'https://spearfish-brewing.square.site/', external: true },
  { label: 'Contact Us', path: '/contact-us' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const headerClass = scrolled || !isHome ? 'header-solid' : 'header-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container-wide flex items-center justify-between h-20 lg:h-24">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://www.spearfishbrewing.com/wp-content/uploads/2018/02/SBC-LOGO-for-Site.png"
            alt="Spearfish Brewing Company"
            className="h-[60px] lg:h-[75px] w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item =>
            item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-[0.2em] transition-opacity text-brew-dark-fg hover:opacity-70"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-opacity text-brew-dark-fg ${
                  location.pathname === item.path ? 'opacity-60' : 'hover:opacity-70'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          className="md:hidden p-2 text-brew-dark-fg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'hsl(var(--brew-dark) / 0.97)' }}
          >
            <nav className="flex flex-col py-4 px-5 gap-1">
              {navItems.map(item =>
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-sm font-bold uppercase tracking-[0.15em] text-brew-dark-fg transition-opacity hover:opacity-70"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 text-sm font-bold uppercase tracking-[0.15em] text-brew-dark-fg transition-opacity ${
                      location.pathname === item.path ? 'opacity-60' : 'hover:opacity-70'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
