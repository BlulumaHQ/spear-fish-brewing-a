import { Trophy, Beer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import PageMeta from '@/components/PageMeta';
import { beers } from '@/data/beers';

const Beers = () => {
  return (
    <>
      <PageMeta title="Beer | Spearfish Brewing Company" description="Explore our rotating selection of sixteen modern and classic American craft beers at Spearfish Brewing Company." />
      <Header />

      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow text-center">
          <FadeIn>
            <Beer className="w-12 h-12 mx-auto mb-6 gold-accent" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">Our Beers</h1>
            <p className="section-muted text-lg max-w-2xl mx-auto">
              Rotating selection of sixteen modern and classic American craft beers.
              From clean, crisp lagers to bold craft ales — there is something for every beer drinker.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Brewmaster */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Meet the Brewmaster</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our brewmaster, Nathan Venner, is a Pierre native who draws on his 13 years as a commercial brewmaster to create a wide variety of craft beer styles. Nathan started his professional brewing career in Laramie, Wyoming at the Altitude Chophouse. During his seven years as the brewmaster at Altitude, Nathan was able to experiment with dozens of creative and experimental beer styles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                He then took on the brewmaster position at the Lander Brewing Company where he honed his skills brewing a small number of award-winning flagship beers consistently from one batch to the next. Nathan's years of experience mean that he is comfortable crafting seasonal beers in every style while brewing consistent flagship brands year after year.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Beer Grid */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What's On Tap?</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {beers.map((beer, i) => (
              <FadeIn key={beer.name} delay={i * 0.05}>
                <div className="bg-background rounded-lg overflow-hidden h-full flex flex-col border border-border hover:shadow-lg transition-shadow">
                  {beer.image && (
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={beer.image}
                        alt={beer.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.15em] gold-accent mb-2">{beer.style}</div>
                    <h3 className="text-xl font-bold mb-2">{beer.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">{beer.description}</p>
                    <div className="flex gap-4 text-xs font-semibold text-muted-foreground">
                      <span>{beer.abv}% ABV</span>
                    </div>
                    {beer.note && (
                      <div className="mt-2 text-xs text-muted-foreground italic">{beer.note}</div>
                    )}
                    {beer.award && (
                      <div className="mt-3 flex items-start gap-1.5 text-xs gold-accent">
                        <Trophy size={12} className="mt-0.5 flex-shrink-0" />
                        <span>{beer.award}</span>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Brewing */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://www.spearfishbrewing.com/wp-content/uploads/2019/10/GABF19-8-1.jpg"
                  alt="Spearfish Brewing at GABF"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={683}
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Brewing Process</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our brewery features South Dakota's first horizontal lagering tanks and a three-stage reverse osmosis water filtration system that allow us to create clean award-winning lagers like the Copper Midge Amber Lager, the Aggressive Goat Bock Lager, and Nathan's favorite beer, the Venner Beer Premium Light Lager.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In addition to the lagers that we are known for, we also have a selection of ale styles. From the refreshing and clean Termes Beer American Wheat, to the dark roasted Thoen Stone Stout, or even our unique gold medal winning Bobcat Logic Kettle Sour, there is something for every beer drinker to enjoy.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-dark">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Try?</h2>
            <p className="section-muted mb-8 max-w-md mx-auto">Visit our taproom in downtown Spearfish and sample our full lineup.</p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.google.com/maps/search/?api=1&query=741+N+Main+St+Suite+130+Spearfish+SD+57783" target="_blank" rel="noopener noreferrer">
                GET DIRECTIONS
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Beers;
