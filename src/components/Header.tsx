import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Beer', path: '/beers' },
  { label: 'Food', path: '/menu' },
  { label: 'About', path: '/about' },
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${headerClass}`} style={{ top: '36px' }}>
      <div className="container-wide flex items-center justify-between h-20 lg:h-24">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://www.spearfishbrewing.com/wp-content/uploads/2018/02/SBC-LOGO-for-Site.png"
            alt="Spearfish Brewing Company"
            className="h-[60px] lg:h-[75px] w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => {
            const active = !item.external && isActive(item.path);
            const baseClass = "relative text-xs font-bold uppercase tracking-[0.2em] transition-opacity text-brew-dark-fg group py-2";

            if (item.external) {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseClass} hover:opacity-70`}
                >
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <img src="/images/icon-up.svg" alt="" className="w-4 h-4" />
                  </span>
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`${baseClass} ${
                  active
                    ? 'opacity-100 border-b-2'
                    : 'hover:opacity-70'
                }`}
                style={active ? { borderColor: 'hsl(38 65% 52%)', color: 'hsl(38 65% 52%)' } : undefined}
              >
                {!active && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <img src="/images/icon-up.svg" alt="" className="w-4 h-4" />
                  </span>
                )}
                {item.label}
              </Link>
            );
          })}
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
              {navItems.map(item => {
                const active = !item.external && isActive(item.path);
                if (item.external) {
                  return (
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
                  );
                }
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 text-sm font-bold uppercase tracking-[0.15em] transition-opacity ${
                      active ? 'gold-accent' : 'text-brew-dark-fg hover:opacity-70'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
