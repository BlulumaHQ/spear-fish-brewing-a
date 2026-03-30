import { UtensilsCrossed } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import PageMeta from '@/components/PageMeta';
import foodImage from '@/assets/food-spread.jpg';

interface MenuItem {
  name: string;
  description: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    name: "Paninis",
    items: [
      { name: "Italian Panini", description: "Salami, ham, provolone, roasted peppers, pesto aioli on pressed ciabatta" },
      { name: "Turkey Club Panini", description: "Roasted turkey, bacon, swiss, lettuce, tomato, garlic mayo" },
      { name: "Caprese Panini", description: "Fresh mozzarella, tomato, basil, balsamic glaze on grilled sourdough" },
      { name: "BBQ Brisket Panini", description: "Smoked brisket, cheddar, pickled onions, house BBQ sauce" },
    ],
  },
  {
    name: "Flatbreads",
    items: [
      { name: "Margherita Flatbread", description: "Fresh mozzarella, San Marzano tomato sauce, basil, olive oil" },
      { name: "BBQ Chicken Flatbread", description: "Grilled chicken, red onion, cilantro, mozzarella, BBQ drizzle" },
      { name: "Buffalo Chicken Flatbread", description: "Crispy chicken, buffalo sauce, blue cheese crumbles, celery" },
      { name: "Meat Lover's Flatbread", description: "Pepperoni, sausage, bacon, mozzarella, marinara" },
    ],
  },
  {
    name: "Wings",
    items: [
      { name: "Classic Buffalo Wings", description: "Crispy wings tossed in house buffalo sauce, served with ranch or blue cheese" },
      { name: "Honey Garlic Wings", description: "Sweet honey garlic glaze with a hint of heat" },
      { name: "Dry Rub Wings", description: "Our signature spice blend, smoky and savory" },
      { name: "BBQ Wings", description: "Slow-smoked BBQ sauce, tangy and sweet" },
    ],
  },
  {
    name: "Nachos & Shareables",
    items: [
      { name: "Loaded Nachos", description: "House chips, queso, pico de gallo, jalapeños, sour cream, choice of protein" },
      { name: "Brewery Pretzel Bites", description: "Warm soft pretzel bites with beer cheese and whole grain mustard" },
      { name: "Cheese Curds", description: "Battered Wisconsin cheese curds, served with marinara" },
      { name: "Chips & Salsa", description: "House-made tortilla chips with fresh salsa and guacamole" },
    ],
  },
];

const Menu = () => {
  return (
    <>
      <PageMeta title="Food Menu | Spearfish Brewing Company" description="Explore our taproom food menu offering paninis, flatbreads, wings, nachos and more at Spearfish Brewing Company." />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foodImage} alt="Taproom food" className="w-full h-full object-cover" width={1024} height={768} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 container-narrow text-center" style={{ color: 'hsl(var(--brew-dark-fg))' }}>
          <FadeIn>
            <UtensilsCrossed className="w-12 h-12 mx-auto mb-6 gold-accent" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">Food Menu</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-80">
              Offering paninis, flatbreads, wings, nachos & more — a flavorful pub menu built for sharing with friends and family
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Menu */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-16">
            {menuCategories.map((category, ci) => (
              <FadeIn key={category.name} delay={ci * 0.1}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-3 border-b border-border">{category.name}</h2>
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                    {category.items.map(item => (
                      <div key={item.name}>
                        <h3 className="font-bold mb-1">{item.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
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
