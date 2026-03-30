export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export interface MenuCategory {
  name: string;
  description?: string;
  items: MenuItem[];
  addOns?: string;
}

export const menuCategories: MenuCategory[] = [
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
    addOns: "Add Ham +$2 / Add Turkey +$2 / Add Tomato +$1 / Add Bacon +$2",
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
