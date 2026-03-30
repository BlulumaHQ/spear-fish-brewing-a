export interface Beer {
  name: string;
  style: string;
  abv: number;
  ibu: number;
  description: string;
  award?: string;
  featured?: boolean;
}

export const beers: Beer[] = [
  {
    name: "Copper Midge",
    style: "Amber Lager",
    abv: 5.2,
    ibu: 22,
    description: "Our award-winning amber lager delivers a clean, malty character with a smooth, satisfying finish. Brewed with our horizontal lagering tanks for exceptional clarity.",
    award: "2023 Great American Beer Festival Gold",
    featured: true,
  },
  {
    name: "The Hills Have Ryes",
    style: "Rye Beer",
    abv: 5.5,
    ibu: 30,
    description: "A bold rye beer with spicy rye character balanced by a crisp hop bitterness. Our most decorated beer with multiple national and international awards.",
    award: "2024 US Beer Open Gold · 2024 World Beer Cup Silver · 2023 World Beer Cup Gold",
    featured: true,
  },
  {
    name: "Venner Beer",
    style: "Premium Light Lager",
    abv: 4.0,
    ibu: 12,
    description: "Nathan's favorite beer. A clean, crisp, and refreshing premium light lager crafted with our three-stage reverse osmosis water filtration system.",
    featured: true,
  },
  {
    name: "Aggressive Goat",
    style: "Bock Lager",
    abv: 6.5,
    ibu: 25,
    description: "A rich, malty bock lager with notes of caramel and toasted bread. Lagered to perfection for a smooth, warming finish.",
    featured: true,
  },
  {
    name: "Termes Beer",
    style: "American Wheat",
    abv: 4.8,
    ibu: 15,
    description: "Refreshing and clean American wheat ale, perfect for a warm Black Hills afternoon. Light-bodied with subtle wheat character.",
  },
  {
    name: "Thoen Stone",
    style: "Stout",
    abv: 5.8,
    ibu: 35,
    description: "A dark, roasted stout with rich coffee and chocolate notes. Full-bodied yet smooth, with a creamy finish.",
  },
  {
    name: "Bobcat Logic",
    style: "Kettle Sour",
    abv: 4.5,
    ibu: 8,
    description: "Our unique gold medal winning kettle sour. Tart, refreshing, and unlike anything else in the Black Hills.",
    award: "2020 US Beer Open Championships Gold",
  },
  {
    name: "Adventurepants!",
    style: "American Ale",
    abv: 5.3,
    ibu: 28,
    description: "A bold, adventurous American ale with a balanced hop profile and clean malt backbone. Perfect for trailblazers.",
    award: "2020 US Beer Open Championships Gold",
  },
];

export const awards = [
  { beer: "Spearfish Brewing", award: "Brewery of the Year Top Ten — 2020 US Beer Open Championships" },
  { beer: "The Hills Have Ryes", award: "2024 US Beer Open Championship Gold" },
  { beer: "The Hills Have Ryes", award: "2024 World Beer Cup Silver" },
  { beer: "The Hills Have Ryes", award: "2023 World Beer Cup Gold" },
  { beer: "Copper Midge", award: "2023 Great American Beer Festival Gold" },
  { beer: "Adventurepants!", award: "2020 US Beer Open Championships Gold" },
  { beer: "Bobcat Logic", award: "2020 US Beer Open Championships Gold" },
];
