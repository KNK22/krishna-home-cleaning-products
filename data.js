/* ================================
   SINGLE SOURCE OF TRUTH – DATA.JS
   ================================ */

const PRODUCTS = {
  "phenyl": {
    id: "phenyl",
    name: "Phenyl",
    imageFolder: "phenyl",
    basePrice: 100,
    variants: {
      "1 L": { mrp: 130, price: 100 },
      "5 L": { mrp: 400, price: 350 }
    },
    flavours: ["Rose", "Lemon", "Plain"],
    description:
      "Krishna Phenyl is a powerful disinfectant floor cleaner designed for daily use. It effectively removes germs, dirt, and unpleasant odors, leaving your home fresh, hygienic, and safe for family use.",
    howToUse:
      "Add 1–2 caps of phenyl to a bucket of water. Mop the floor evenly. No rinsing required. Suitable for regular cleaning of tiles, marble, and cement floors."
  },

  "floor-cleaner": {
    id: "floor-cleaner",
    name: "Floor Cleaner",
    imageFolder: "floor-cleaner",
    basePrice: 100,
    variants: {
      "1 L": { mrp: 130, price: 100 },
      "5 L": { mrp: 600, price: 400 }
    },
    flavours: ["Lavender", "Sandalwood"],
    description:
      "Krishna Floor Cleaner is formulated to remove tough stains, dirt, and bacteria while leaving a long-lasting fragrance. Ideal for homes, offices, hospitals, and commercial spaces.",
    howToUse:
      "Mix 1–2 caps in a bucket of water. Mop the surface thoroughly. For heavily soiled areas, use a slightly higher concentration."
  },

  "dishwash": {
    id: "dishwash",
    name: "Dishwash Liquid",
    imageFolder: "dishwash",
    basePrice: 150,
    variants: {
      "1 L": { mrp: 200, price: 150 },
      "5 L": { mrp: 600, price: 450 }
    },
    flavours: [],
    description:
      "Krishna Dishwash Liquid effectively cuts through grease and removes food residue while being gentle on hands. Leaves utensils sparkling clean with a fresh lemon fragrance.",
    howToUse:
      "Add a few drops to a wet sponge or mix with water. Scrub utensils and rinse thoroughly with clean water."
  },

  "handwash": {
    id: "handwash",
    name: "Handwash",
    imageFolder: "handwash",
    basePrice: 100,
    variants: {
      "1 L": { mrp: 130, price: 100 },
      "5 L": { mrp: 500, price: 400 }
    },
    flavours: [],
    description:
      "Krishna Handwash provides effective germ protection while keeping hands soft and moisturized. Suitable for frequent use by the entire family.",
    howToUse:
      "Apply a small amount on wet hands. Lather well for at least 20 seconds and rinse thoroughly with water."
  },

  "toilet-cleaner": {
    id: "toilet-cleaner",
    name: "Toilet Cleaner",
    imageFolder: "toilet-cleaner",
    basePrice: 100,
    variants: {
      "1 L": { mrp: 130, price: 100 },
      "5 L": { mrp: 500, price: 400 }
    },
    flavours: [],
    description:
      "Krishna Toilet Cleaner removes tough stains, kills germs, and eliminates bad odors. Its thick formula clings to surfaces for deep cleaning and freshness.",
    howToUse:
      "Pour the cleaner around the toilet bowl and under the rim. Leave for 10–15 minutes, scrub with a brush, and flush."
  }
};
