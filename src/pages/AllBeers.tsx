import { Trophy, Beer } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import PageMeta from '@/components/PageMeta';
import { beers } from '@/data/beers';

const AllBeers = () => {
  return (
    <>
      <PageMeta title="All Beers | Spearfish Brewing Company" description="Browse the complete lineup of craft beers brewed at Spearfish Brewing Company in the Black Hills of South Dakota." />
      <Header />

      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow text-center">
          <FadeIn>
            <Beer className="w-12 h-12 mx-auto mb-6 gold-accent" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">All Beers</h1>
            <p className="section-muted text-lg max-w-2xl mx-auto">
              Our complete lineup of modern and classic American craft beers
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beers.map((beer, i) => (
              <FadeIn key={beer.name} delay={i * 0.05}>
                <div className="bg-card rounded-lg p-6 h-full flex flex-col border border-border hover:shadow-lg transition-shadow">
                  <div className="text-xs font-bold uppercase tracking-[0.15em] gold-accent mb-2">{beer.style}</div>
                  <h3 className="text-xl font-bold mb-2">{beer.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">{beer.description}</p>
                  <div className="flex gap-4 text-xs font-semibold text-muted-foreground">
                    <span>{beer.abv}% ABV</span>
                    <span>{beer.ibu} IBU</span>
                  </div>
                  {beer.award && (
                    <div className="mt-3 flex items-start gap-1.5 text-xs gold-accent">
                      <Trophy size={12} className="mt-0.5 flex-shrink-0" />
                      <span>{beer.award}</span>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AllBeers;
