import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Trophy, ChevronRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import PageMeta from '@/components/PageMeta';
import { beers, featuredAwards } from '@/data/beers';
import { useMemo } from 'react';

const validBeers = beers.filter(b => b.featured && b.image);

function getRandomBeers(pool: typeof beers, count: number) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

const Index = () => {
  const tapBeers = useMemo(() => getRandomBeers(validBeers, 4), []);

  return (
    <>
      <PageMeta
        title="Black Hills Craft Beer | Spearfish Brewing Company"
        description="A modern brewery and taproom located downtown Spearfish, South Dakota. Indoor and outdoor seating where patrons can enjoy locally crafted beers, from more than a dozen classic American styles and a flavorful pub menu built for sharing with friends and family."
      />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/spearfish-hero.png" alt="Spearfish Brewing Company taproom" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-5 max-w-4xl pt-24 pb-16" style={{ color: 'hsl(var(--brew-dark-fg))' }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-black text-[38px] sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight mb-6"
          >
            BLACK HILLS{'\n'}CRAFT BEER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-80"
          >
            A modern brewery and taproom located downtown Spearfish, South Dakota
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/beers">VIEW OUR BEER</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/menu">VIEW OUR MENU</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-12 md:py-16 section-dark">
        <div className="container-narrow">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
              <div className="flex items-center gap-3">
                <Clock size={24} className="gold-accent" />
                <h2 className="text-xl md:text-2xl font-bold">Hours</h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-center sm:text-left">
                <div>
                  <div className="text-sm font-semibold section-muted uppercase tracking-wider mb-1">Sun – Thu</div>
                  <div className="text-lg font-bold">11am – 10pm</div>
                </div>
                <div>
                  <div className="text-sm font-semibold section-muted uppercase tracking-wider mb-1">Fri – Sat</div>
                  <div className="text-lg font-bold">11am – 11pm</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Crafted in the<br />
                  <span className="gold-accent">Heart of the Hills</span>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The vision of Spearfish Brewing is to brew American beer styles that appeal to all beer drinkers. We want to create beers for those who appreciate the clean, crisp flavor of domestic light lagers and hop-head craft fanatics alike.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our brewery features South Dakota's first horizontal lagering tanks and a three-stage reverse osmosis water filtration system that allow us to create clean award-winning lagers.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://www.spearfishbrewing.com/wp-content/uploads/2019/10/GABF19-8-1.jpg"
                  alt="Spearfish Brewing at the Great American Beer Festival"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What's On Tap */}
      <section className="section-padding section-dark">
        <div className="container-wide">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">What's On Tap?</h2>
            <p className="text-center section-muted mb-12 max-w-xl mx-auto">
              Rotating selection of sixteen modern and classic American craft beers
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {tapBeers.map((beer, i) => (
              <FadeIn key={beer.name} delay={i * 0.1}>
                <Link to="/beers" className="block group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    <img
                      src={beer.image}
                      alt={beer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-center">{beer.name}</h3>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center mt-10">
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/beers">
                  VIEW ALL BEERS <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Awards — 5 only */}
      <section className="section-padding section-surface">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center mb-12">
              <Trophy className="w-10 h-10 mx-auto mb-4 gold-accent" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Award-Winning Brews</h2>
              <p className="text-muted-foreground">Recognized at the nation's most prestigious beer competitions</p>
            </div>
          </FadeIn>
          <div className="space-y-4 max-w-2xl mx-auto">
            {featuredAwards.map((a, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background">
                  <Trophy size={16} className="gold-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">{a.beer}</div>
                    <div className="text-muted-foreground text-sm">{a.award}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center mt-8">
              <Button variant="default" asChild>
                <Link to="/about">VIEW FULL AWARDS ARCHIVE</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Food */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img src="https://www.spearfishbrewing.com/wp-content/uploads/2019/03/20231019_114450-576x1024.jpg" alt="SBC Kitchen pretzel bites" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">SBC Kitchen Now Open!</h2>
                <p className="text-lg text-muted-foreground mb-2">Offering paninis, flatbreads, wings, nachos & more</p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  A flavorful pub menu built for sharing with friends and family. Indoor and outdoor seating available.
                </p>
                <Button variant="default" size="lg" asChild>
                  <Link to="/menu">VIEW OUR MENU</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Visit Us */}
      <section className="section-padding section-dark">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit the Taproom</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 section-muted">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>741 N Main St Suite 130, Spearfish, SD 57783</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:605-717-6999" className="hover:opacity-80 transition-opacity">605-717-6999</a>
              </div>
            </div>
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://www.google.com/maps/search/?api=1&query=741+N+Main+St+Suite+130+Spearfish+SD+57783"
                target="_blank"
                rel="noopener noreferrer"
              >
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

export default Index;
