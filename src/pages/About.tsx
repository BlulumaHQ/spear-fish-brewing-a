import { Trophy } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import PageMeta from '@/components/PageMeta';
import { fullAwards } from '@/data/beers';

const groupedAwards = fullAwards.reduce<Record<string, string[]>>((acc, a) => {
  if (!acc[a.beer]) acc[a.beer] = [];
  acc[a.beer].push(a.award);
  return acc;
}, {});

const About = () => {
  return (
    <>
      <PageMeta title="About | Spearfish Brewing Company" description="The story of Spearfish Brewing Company — our vision, our brewmaster Nathan Venner, and our award-winning craft beers from the Black Hills of South Dakota." />
      <Header />

      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">Our Story</h1>
            <p className="section-muted text-lg max-w-2xl mx-auto">
              Brewing American beer styles that appeal to all beer drinkers since day one.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Our <span className="gold-accent">Vision</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The vision of Spearfish Brewing is to brew American beer styles that appeal to all beer drinkers. We want to create beers for those who appreciate the clean, crisp flavor of domestic light lagers and hop-head craft fanatics alike.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our brewery features South Dakota's first horizontal lagering tanks and a three-stage reverse osmosis water filtration system that allow us to create clean award-winning lagers like the Copper Midge Amber Lager, the Aggressive Goat Bock Lager, and Nathan's favorite beer, the Venner Beer Premium Light Lager.
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

      {/* Brewmaster */}
      <section className="section-padding section-surface">
        <div className="container-narrow">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden md:order-first">
                <img
                  src="https://www.spearfishbrewing.com/wp-content/uploads/2018/02/nathan.jpg"
                  alt="Brewmaster Nathan Venner"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Meet the <span className="gold-accent">Brewmaster</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our brewmaster, Nathan Venner, is a Pierre native who draws on his 13 years as a commercial brewmaster to create a wide variety of craft beer styles. Nathan started his professional brewing career in Laramie, Wyoming at the Altitude Chophouse. During his seven years as the brewmaster at Altitude, Nathan was able to experiment with dozens of creative and experimental beer styles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  He then took on the brewmaster position at the Lander Brewing Company where he honed his skills brewing a small number of award-winning flagship beers consistently from one batch to the next. Nathan's years of experience mean that he is comfortable crafting seasonal beers in every style while brewing consistent flagship brands year after year.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ales */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Lagers & <span className="gold-accent">Ales</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-center">
                In addition to the lagers that we are known for, we also have a selection of ale styles. From the refreshing and clean Termes Beer American Wheat, to the dark roasted Thoen Stone Stout, or even our unique gold medal winning Bobcat Logic Kettle Sour, there is something for every beer drinker to enjoy.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding section-dark">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center mb-12">
              <Trophy className="w-10 h-10 mx-auto mb-4 gold-accent" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Award Archive</h2>
              <p className="section-muted">The full list of awards earned by Spearfish Brewing Company</p>
            </div>
          </FadeIn>

          <div className="space-y-8 max-w-3xl mx-auto">
            {Object.entries(groupedAwards).map(([beer, awards], i) => (
              <FadeIn key={beer} delay={i * 0.05}>
                <div className="p-6 rounded-lg brew-card">
                  <h3 className="font-bold text-lg mb-3 gold-accent">{beer}</h3>
                  <ul className="space-y-2">
                    {awards.map((award, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm section-muted">
                        <Trophy size={12} className="gold-accent mt-1 flex-shrink-0" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
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

export default About;
