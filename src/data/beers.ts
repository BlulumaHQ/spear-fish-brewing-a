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
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2023/01/20230112_140208-169x300.jpg",
    featured: true,
  },
  {
    name: "Big Bird Bones Barrel-Aged Bottle",
    style: "Imperial Stout (Barrel-Aged)",
    abv: 16.5,
    description: "Batch #1 of our Barrel-Aged Series. Our Bird Bones Imperial Stout was aged in malted whiskey barrels for 6 months then blended. Smooth, lightly carbonated, & bold.",
    note: "500ml bottle $16 · To-go only",
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
    award: "2019 NABA Silver · 2023 GABF Gold",
    featured: true,
  },
  {
    name: "Termes Beer",
    style: "American Wheat",
    abv: 5.7,
    description: "Hazy pale gold with white head, sweet malt and bread flavors, medium body, soft mouthfeel.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2018/02/IMG_8285-300x200.jpg",
  },
  {
    name: "ADVENTUREPANTS!",
    style: "Double IPA",
    abv: 10.2,
    description: "Huge American hop additions! Golden with hop haze, funky pineapple and tropical fruit hop aroma, boozy.",
    image: "https://www.spearfishbrewing.com/wp-content/uploads/2018/02/adventurepants-300x200.jpg",
    award: "2020 US Beer Open Championships Gold",
  },
];

export const awards = [
  { beer: "Spearfish Brewing", award: "Brewery of the Year Top Ten — 2020 US Beer Open Championships" },
  { beer: "The Hills Have Ryes", award: "2024 US Beer Open Championship Gold" },
  { beer: "The Hills Have Ryes", award: "2024 World Beer Cup Silver" },
  { beer: "The Hills Have Ryes", award: "2023 World Beer Cup Gold" },
  { beer: "Copper Midge", award: "2023 Great American Beer Festival Gold" },
  { beer: "Copper Midge", award: "2019 NABA Silver Medal — American Amber Lager" },
  { beer: "Festbier", award: "2021 NABA Silver Medal" },
  { beer: "Festbier", award: "2021 US Beer Open Silver Medal" },
  { beer: "Festbier", award: "2020 US Beer Open Gold Medal" },
  { beer: "ADVENTUREPANTS!", award: "2020 US Beer Open Championships Gold" },
  { beer: "Bobcat Logic", award: "2020 US Beer Open Championships Gold" },
];
