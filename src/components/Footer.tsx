import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
          {/* Col 1: Brand */}
          <div className="md:col-span-1">
            <div className="font-bold text-lg tracking-wide mb-4">Spearfish Brewing</div>
            <p className="section-muted text-sm leading-relaxed">
              A modern brewery and taproom located downtown Spearfish, South Dakota. Craft beer for every palate.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="section-muted hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="section-muted hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Spacer */}
          <div className="hidden md:block" />

          {/* Col 3: Navigation */}
          <div>
            <div className="font-bold text-xs uppercase tracking-[0.2em] mb-5">Navigation</div>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Beers', path: '/beers' },
                { label: 'Food Menu', path: '/menu' },
                { label: 'Contact', path: '/contact-us' },
              ].map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="section-muted text-sm hover:opacity-80 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Information */}
          <div>
            <div className="font-bold text-xs uppercase tracking-[0.2em] mb-5">Information</div>
            <ul className="space-y-3">
              <li><span className="section-muted text-sm">Terms and Conditions</span></li>
              <li><span className="section-muted text-sm">Privacy Policy</span></li>
              <li><span className="section-muted text-sm">Sitemap</span></li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <div className="font-bold text-xs uppercase tracking-[0.2em] mb-5">Contact Us</div>
            <ul className="space-y-3 text-sm">
              <li className="section-muted">741 N Main St Suite 130</li>
              <li className="section-muted">Spearfish, SD 57783</li>
              <li>
                <a href="tel:605-717-6999" className="section-muted hover:opacity-80 transition-opacity">
                  605-717-6999
                </a>
              </li>
              <li>
                <a href="mailto:hailey@spearfishbrewing.com" className="section-muted hover:opacity-80 transition-opacity">
                  hailey@spearfishbrewing.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t" style={{ borderColor: 'hsl(var(--brew-dark-fg) / 0.1)' }}>
        <div className="container-wide py-6">
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
