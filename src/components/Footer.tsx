import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-lg tracking-wide mb-4">Spearfish Brewing</div>
            <p className="section-muted text-sm leading-relaxed mb-4">
              A modern brewery and taproom located downtown Spearfish, South Dakota.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/spearfishbrewing" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="section-muted hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/spearfishbrewing" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="section-muted hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Hours */}
          <div>
            <div className="font-bold text-xs uppercase tracking-[0.2em] mb-4">Hours</div>
            <ul className="space-y-2 text-sm section-muted">
              <li>Sun – Thu: 11am – 10pm</li>
              <li>Fri – Sat: 11am – 11pm</li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <div className="font-bold text-xs uppercase tracking-[0.2em] mb-4">Navigation</div>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Beers', path: '/beers' },
                { label: 'SBC Kitchen Now Open!', path: '/menu' },
                { label: 'About', path: '/about' },
                { label: 'Shop', path: 'https://spearfish-brewing.square.site/', external: true },
                { label: 'Contact', path: '/contact-us' },
              ].map(item => (
                <li key={item.path}>
                  {item.external ? (
                    <a href={item.path} target="_blank" rel="noopener noreferrer" className="section-muted text-sm hover:opacity-80 transition-opacity">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.path} className="section-muted text-sm hover:opacity-80 transition-opacity">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Information */}
          <div>
            <div className="font-bold text-xs uppercase tracking-[0.2em] mb-4">Information</div>
            <ul className="space-y-2">
              <li><Link to="/terms" className="section-muted text-sm hover:opacity-80 transition-opacity">Terms and Conditions</Link></li>
              <li><Link to="/privacy" className="section-muted text-sm hover:opacity-80 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="/sitemap" className="section-muted text-sm hover:opacity-80 transition-opacity">Sitemap</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-xs uppercase tracking-[0.2em] mb-4">Contact Us</div>
            <ul className="space-y-2 text-sm">
              <li className="section-muted">741 N Main St Suite 130</li>
              <li className="section-muted">Spearfish, SD 57783</li>
              <li>
                <a href="tel:605-717-6999" className="section-muted hover:opacity-80 transition-opacity">605-717-6999</a>
              </li>
              <li>
                <a href="mailto:hailey@spearfishbrewing.com" className="section-muted hover:opacity-80 transition-opacity">hailey@spearfishbrewing.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t" style={{ borderColor: 'hsl(var(--brew-dark-fg) / 0.1)' }}>
        <div className="container-wide py-5">
          <p className="section-dim text-xs text-center md:text-left">
            © 2026 Spearfish Brewing Company. All rights reserved. | Web Design by{' '}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity underline">
              Bluluma
            </a>{' '}
            | Powered by{' '}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity underline">
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
