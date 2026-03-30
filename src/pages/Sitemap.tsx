import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageMeta from '@/components/PageMeta';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Beer', path: '/beers' },
  { label: 'All Beers', path: '/all-beers' },
  { label: 'SBC Kitchen (Food Menu)', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'Terms and Conditions', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
];

const externalPages = [
  { label: 'Shop (Square Store)', url: 'https://spearfish-brewing.square.site/' },
];

const SitemapPage = () => (
  <>
    <PageMeta title="Sitemap | Spearfish Brewing Company" description="Navigate the Spearfish Brewing Company website." />
    <Header />
    <section className="section-dark pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="container-narrow text-center">
        <h1 className="text-3xl md:text-4xl font-black">Sitemap</h1>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-narrow max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Pages</h2>
        <ul className="space-y-3 mb-10">
          {pages.map(p => (
            <li key={p.path}>
              <Link to={p.path} className="text-foreground underline hover:opacity-70 transition-opacity">{p.label}</Link>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mb-4">External</h2>
        <ul className="space-y-3">
          {externalPages.map(p => (
            <li key={p.url}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:opacity-70 transition-opacity">{p.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <Footer />
  </>
);

export default SitemapPage;
