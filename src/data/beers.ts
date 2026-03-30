export interface Beer {
  name: string;
  style: string;
  abv: number;
  description: string;
  image?: string;
  award?: string;
  note?: string;
  featured?: boolean;
}

export const beers: Beer[] = [
  {
    name: "Chinook Water",
    style: "Non-Alcoholic",
    abv: 0,
    description: "Our house-made sparkling hop water w/ Chinook & other rotating hops. 0% ABV & available to any age.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2025/08/IMG_2559-768x1024.jpg",
    featured: true,
  },
  {
    name: "Alapin Apple Ale",
    style: "Ale",
    abv: 7.3,
    description: "Alapin Apple Ale w/ Rotating Flavors. Dry & not-too-sweet, this ale was curated for cider lovers. This ale is gluten-free.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2025/08/IMG_2307-768x1024.jpg",
    featured: true,
  },
  {
    name: "The Inferno",
    style: "Chili Ale",
    abv: 5.7,
    description: "Inspired by Terry Peak's Historic Inferno Bar, this Chili Ale will offer a mouthful of blackberry sweetness followed by a delightful heat from Habanero, Serrano & Poblano Peppers.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2025/08/Your-paragraph-text-1-1024x1024.png",
    featured: true,
  },
  {
    name: "Thiol By Combat",
    style: "Hazy IPA",
    abv: 6,
    description: "Hazy IPA with thiolized yeast (thiols are flavor compounds) bringing tropical fruit flavors & aromas to this hop-heavy beer.",
    image: "/images/thiol-by-combat.jpg",
    featured: true,
  },
  {
    name: "Big Bird Bones Barrel-Aged Bottle",
    style: "Imperial Stout (Barrel-Aged)",
    abv: 16.5,
    description: "Batch #1 of our Barrel-Aged Series. Our Bird Bones Imperial Stout was aged in malted whiskey barrels for 6 months then blended. Smooth, lightly carbonated, & bold.",
    image: "/images/big-bird-bones.jpg",
    note: "500ml bottle $16 · To-go only",
    featured: true,
  },
  {
    name: "Half a Horse",
    style: "IPA",
    abv: 6.4,
    description: "Our seasonal IPA pairs perfectly with downtown Spearfish vibes — easy, familiar, & the right amount of fun. A perfect balance of citrus and just a little bitterness.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2018/08/halfhorsecrop-300x200.jpg",
    featured: true,
  },
  {
    name: "Lemon Bar",
    style: "Tart Ale",
    abv: 5.1,
    description: "Tart! Zesty! Sweet! Made with real lemons. The Lemon Bar is an ode to tart pastry, have fun with this modern take on beer.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2019/01/proudestmoments-300x200.jpg",
    featured: true,
  },
  {
    name: "Festbier",
    style: "German Strong Lager",
    abv: 7.1,
    description: "This classic German strong lager is brewed with traditional German grains and hops.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2020/10/IMG_0709-300x200.jpg",
    award: "2021 NABA Silver · 2021 US Beer Open Silver · 2020 US Beer Open Gold",
    featured: true,
  },
  {
    name: "The Schwa",
    style: "Blonde Ale",
    abv: 5,
    description: "A classic blonde ale with a tropical twist! Additions of pink guava puree add sweetness, haziness, and body.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2018/04/IMG_7708-300x200.jpg",
    featured: true,
  },
  {
    name: "Bobcat Logic",
    style: "Kettle Sour",
    abv: 6.4,
    description: "Fermented with lactobacillus, dry with strong lemon tartness, flavors of lemon, alcohol, and champagne.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2018/02/bobcat-medal-300x200.jpg",
    award: "2020 US Beer Open Championships Gold",
    featured: true,
  },
  {
    name: "Venner Beer",
    style: "Premium Light Lager",
    abv: 4.2,
    description: "Light golden color, sweet malty aroma, and subtle herbal notes. Crisp, clean, and complex.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2018/02/IMG_7781-300x200.jpg",
    featured: true,
  },
  {
    name: "Copper Midge",
    style: "American Amber Lager",
    abv: 5.4,
    description: "Glowing copper color, toasted malt and caramel sweetness on the palate, gentle floral hop finish.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2018/02/copper-silver-medal-300x200.jpg",
    award: "2023 GABF Gold · 2019 NABA Silver",
    featured: true,
  },
  {
    name: "Termes Beer",
    style: "American Wheat",
    abv: 5.7,
    description: "Hazy pale gold with white head, sweet malt and bread flavors, medium body, soft mouthfeel.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2018/02/IMG_8285-300x200.jpg",
    featured: true,
  },
  {
    name: "ADVENTUREPANTS!",
    style: "Double IPA",
    abv: 10.2,
    description: "Huge American hop additions! Golden with hop haze, funky pineapple and tropical fruit hop aroma, boozy.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2018/02/adventurepants-300x200.jpg",
    award: "2020 US Beer Open Championships Gold",
    featured: true,
  },
];

export const featuredAwards = [
  { beer: "Spearfish Brewing", award: "Brewery of the Year Top Ten — 2020 US Beer Open Championships" },
  { beer: "The Hills Have Ryes", award: "2024 US Beer Open Championship Gold (Rye Beer)" },
  { beer: "The Hills Have Ryes", award: "2024 World Beer Cup Silver (Rye Beer)" },
  { beer: "Copper Midge", award: "2023 Great American Beer Festival Gold (Kellerbier or Zwickelbier)" },
  { beer: "Thiol by Combat", award: "2024 International Beer Awards Silver (Hazy or Juicy Strong Pale Ale)" },
];

export const fullAwards = [
  { beer: "Spearfish Brewing", award: "Brewery of the Year Top Ten — 2020 US Beer Open Championships" },
  { beer: "The Hills Have Ryes", award: "2024 US Beer Open Championship Gold (Rye Beer)" },
  { beer: "The Hills Have Ryes", award: "2024 World Beer Cup Silver (Rye Beer)" },
  { beer: "The Hills Have Ryes", award: "2023 World Beer Cup Gold (Rye Beer)" },
  { beer: "The Hills Have Ryes", award: "2023 International Beer Awards Silver (Rye Beer)" },
  { beer: "The Hills Have Ryes", award: "2021 North American Brewery Association Gold (Rye Beer)" },
  { beer: "The Hills Have Ryes", award: "2021 US Beer Open Championships Bronze (Rye Beer)" },
  { beer: "The Hills Have Ryes", award: "2019 US Beer Open Championships Silver (Rye Beer)" },
  { beer: "The Hills Have Ryes", award: "2018 North American Brewers Association Bronze (Rye Beer)" },
  { beer: "Adventurepants!", award: "2023 US Beer Open Championships Silver (Near Gluten Free IPA/DIPA)" },
  { beer: "Adventurepants!", award: "2020 US Beer Open Championships Gold (Near Gluten Free IPA/DIPA)" },
  { beer: "Copper Midge", award: "2024 International Beer Awards Bronze (Marzen/Oktoberfest)" },
  { beer: "Copper Midge", award: "2023 Great American Beer Festival Gold (Kellerbier or Zwickelbier)" },
  { beer: "Copper Midge", award: "2022 US Beer Open Championship Gold (American Amber)" },
  { beer: "Copper Midge", award: "2020 US Beer Open Championships Silver (Near Gluten Free Lager)" },
  { beer: "Copper Midge", award: "2019 North American Brewers Association Silver (American-Style Amber Lager)" },
  { beer: "Fest Bier", award: "2021 North American Brewers Association Silver (Maibock)" },
  { beer: "Fest Bier", award: "2021 US Beer Open Championships Silver (Hell/Maibock)" },
  { beer: "Fest Bier", award: "2020 US Beer Open Championships Gold (Hell/Maibock)" },
  { beer: "Termes Beer", award: "2019 Great American Beer Festival Bronze (American-Style Wheat Beer)" },
  { beer: "Bobcat Logic", award: "2019 North American Brewers Association Gold (American Sour Ale)" },
  { beer: "Thiol by Combat", award: "2024 International Beer Awards Silver (Hazy or Juicy Strong Pale Ale)" },
  { beer: "Thiol by Combat", award: "2024 US Beer Open Championship Bronze (Near Gluten Free)" },
  { beer: "Aggressive Goat", award: "2024 US Beer Open Championship Gold (Strong Bock)" },
  { beer: "Aggressive Goat", award: "2019 North American Brewers Association Silver (Traditional Bock)" },
  { beer: "Aggressive Goat", award: "2019 US Beer Open Championships Bronze (Traditional Bock)" },
  { beer: "Bird Bones", award: "2021 Great American Beer Festival Bronze (Imperial Stout)" },
];
