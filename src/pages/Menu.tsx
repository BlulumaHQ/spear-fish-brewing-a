import { UtensilsCrossed } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import PageMeta from '@/components/PageMeta';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface MenuCategory {
  name: string;
  description?: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    name: "Pretzel Bites",
    items: [
      {
        name: "Pretzel Bites",
        description: "Authentic German Pretzel Bites salted & served with white queso & stone-ground mustard. Prepared at Anke's Bakery in Belle Fourche & baked in the SBC kitchen daily. Available until sold out. Available to-go!",
        price: "$12",
        image: "https://www.spearfishbrewing.com/wp-content/uploads/2019/03/20231019_114450-576x1024.jpg",
      },
    ],
  },
  {
    name: "Cheese Curds",
    items: [
      {
        name: "Cheese Curds",
        description: "Breaded white cheddar cheese curds with Chipotle ranch for dipping.",
        price: "$11",
        image: "https://www.spearfishbrewing.com/wp-content/uploads/2019/03/IMG_0718-768x1024.jpg",
      },
    ],
  },
  {
    name: "Chips & Queso",
    items: [
      {
        name: "Chips & Queso",
        description: "Corn tortilla chips served w/ a side of white queso. Queso contains mild hatch chili peppers. Available to-go!",
        price: "$12",
        image: "https://www.spearfishbrewing.com/wp-content/uploads/2021/07/20231020_171641-scaled-e1697844729892-825x1024.jpg",
      },
    ],
  },
  {
    name: "Paninis",
    description: "Each served with salted kettle chips & a pickle spear -or- mixed greens w/ ranch, house Italian, blue cheese, or garlic parmesan dressing. Available to-go!",
    items: [
      { name: "Italian", description: "Pepperoni, salami, ham, provolone, onion, roasted red pepper, vinaigrette on sourdough", price: "$14", image: "https://www.spearfishbrewing.com/wp-content/uploads/2023/09/Snapchat-420050819-1024x768.jpg" },
      { name: "Cuban", description: "Pulled pork, ham, Swiss cheese, pickles, spicy brown mustard on sourdough", price: "$14" },
      { name: "Smoked Turkey Bacon", description: "Turkey, bacon, provolone cheese, tomato, onion, chipotle mayo on sourdough", price: "$14" },
      { name: "Pappy John's", description: "Marinara, shredded 3-cheese blend, pepperoni, salami, roasted red pepper, red onion, garlic parmesan sauce", price: "$14" },
      { name: "Grilled Cheese", description: "Cheddar cheese on sourdough", price: "$10" },
    ],
  },
  {
    name: "Wings",
    items: [
      {
        name: "Wings (8 bone-in)",
        description: "8 bone-in wings with your choice of sauce: BBQ, Garlic Parmesan, Sweet Chili Gochujang, Classic Buffalo, or In-House Dry Rub. Available to-go!",
        price: "$12",
        image: "https://www.spearfishbrewing.com/wp-content/uploads/2023/09/20230927_131736-1-576x1024.jpg",
      },
    ],
  },
  {
    name: "Nachos",
    items: [
      {
        name: "Nachos (Full)",
        description: "Nachos w/ chicken OR pulled pork, queso, house pico, sour cream, & jalapenos.",
        price: "$20",
        image: "https://www.spearfishbrewing.com/wp-content/uploads/2023/09/20230926_160846-792x1024.jpg",
      },
      {
        name: "Nachos (Half)",
        description: "Half-size nachos w/ chicken OR pulled pork, queso, house pico, sour cream, & jalapenos.",
        price: "$14",
      },
    ],
  },
  {
    name: "Flatbreads",
    description: "Gluten-free crust available for additional $3. Crust is buckwheat & rice flour. Available to-go!",
    items: [
      { name: "Cheese", description: "Red sauce & three-cheese blend", price: "$10", image: "https://www.spearfishbrewing.com/wp-content/uploads/2023/09/20230926_155550-1-736x1024.jpg" },
      { name: "Pepperoni", description: "Red sauce, three-cheese blend, & pepperoni", price: "$14" },
      { name: "The Balboa", description: "Red sauce, three-cheese blend, salami, pepperoni, fire-roasted red peppers, & red onion", price: "$14" },
      { name: "Buffalo", description: "Buffalo sauce, three-cheese blend, chicken, red onion, & topped with ranch drizzle (add bacon $2)", price: "$14" },
      { name: "Pickle", description: "Garlic parmesan sauce, three-cheese blend, pickle chips & topped with chipotle ranch drizzle (add bacon or chicken $2)", price: "$10" },
    ],
  },
  {
    name: "The Greens",
    items: [
      {
        name: "Small Salad",
        description: "Mixed greens w/ tomato, red onion & cheese. Dressing options: Ranch, House Italian, Blue Cheese or Garlic Parmesan.",
        price: "$6",
        image: "https://www.spearfishbrewing.com/wp-content/uploads/2024/07/IMG_1191-768x1024.jpg",
      },
    ],
  },
];

const paniniAddOns = "Add Ham +$2 / Add Turkey +$2 / Add Tomato +$1 / Add Bacon +$2";

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
                  {category.name === "Paninis" && (
                    <p className="text-muted-foreground text-xs mt-4 italic">{paniniAddOns}</p>
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
