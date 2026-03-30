import { UtensilsCrossed } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import PageMeta from '@/components/PageMeta';
import { menuCategories } from '@/data/menu';

const Menu = () => {
  return (
    <>
      <PageMeta title="SBC Kitchen | Spearfish Brewing Company" description="Explore the SBC Kitchen menu — pretzel bites, paninis, flatbreads, wings, nachos & more at Spearfish Brewing Company." />
      <Header />

      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow text-center" style={{ color: 'hsl(var(--brew-dark-fg))' }}>
          <FadeIn>
            <UtensilsCrossed className="w-12 h-12 mx-auto mb-6 gold-accent" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">SBC Kitchen</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-80">
              A flavorful pub menu built for sharing with friends and family
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Menu */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-16">
            {menuCategories.map((category, ci) => (
              <FadeIn key={category.name} delay={ci * 0.08}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 pb-3 border-b border-border">{category.name}</h2>
                  {category.description && (
                    <p className="text-muted-foreground text-sm mb-6 italic">{category.description}</p>
                  )}
                  <div className="space-y-6">
                    {category.items.map(item => (
                      <div key={item.name} className="flex gap-6 items-start">
                        {item.image && (
                          <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-3">
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <span className="font-bold text-lg gold-accent whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {category.addOns && (
                    <p className="text-muted-foreground text-xs mt-4 italic">{category.addOns}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 p-8 rounded-lg section-surface text-center">
              <p className="text-muted-foreground text-sm">
                Menu items and availability may vary. Ask your server about today's specials and seasonal offerings.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Menu;
