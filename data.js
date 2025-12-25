/* =========================================
   SINGLE SOURCE OF TRUTH – DATA.JS
   Products + Combo Offers
   ========================================= */


/* =====================
   NORMAL PRODUCTS
   ===================== */

const PRODUCTS = {
  phenyl: {
    id: "phenyl",
    name: "Phenyl",
    imageFolder: "phenyl",
    variants: {
      "1 L": { price: 100, mrp: 130 },
      "5 L": { price: 350, mrp: 500 }
    },
    flavours: ["Rose", "Lemon", "Plain"],
    description:
      "Krishna Phenyl is a powerful disinfectant floor cleaner suitable for daily use.",
    howToUse:
      "Add 1–2 caps in a bucket of water and mop the floor."
  },

  "floor-cleaner": {
    id: "floor-cleaner",
    name: "Floor Cleaner",
    imageFolder: "floor-cleaner",
    variants: {
      "1 L": { price: 130, mrp: 200 },
      "5 L": { price: 500, mrp: 600 }
    },
    flavours: ["Lavender", "Sandalwood"],
    description:
      "Removes tough stains and leaves a long-lasting fragrance.",
    howToUse:
      "Mix 1–2 caps in water and mop evenly."
  },

  dishwash: {
    id: "dishwash",
    name: "Dishwash Liquid",
    imageFolder: "dishwash",
    variants: {
      "1 L": { price: 150, mrp: 200 },
      "5 L": { price: 450, mrp: 600 }
    },
    flavours: [],
    description:
      "Cuts grease effectively and is gentle on hands.",
    howToUse:
      "Apply a few drops on sponge and clean utensils."
  },

  handwash: {
    id: "handwash",
    name: "Handwash",
    imageFolder: "handwash",
    variants: {
      "1 L": { price: 100, mrp: 130 },
      "5 L": { price: 400, mrp: 500 }
    },
    flavours: [],
    description:
      "Kills germs while keeping hands soft.",
    howToUse:
      "Apply on wet hands, lather for 20 seconds and rinse."
  },

  "toilet-cleaner": {
    id: "toilet-cleaner",
    name: "Toilet Cleaner",
    imageFolder: "toilet-cleaner",
    variants: {
      "1 L": { price: 130, mrp: 200 },
      "5 L": { price: 500, mrp: 600 }
    },
    flavours: [],
    description:
      "Removes stains and kills 99.9% germs.",
    howToUse:
      "Pour under rim, wait 10 minutes, scrub and flush."
  }
};


/* =====================
   COMBO / OFFER PRODUCTS
   ===================== */

const COMBO_OFFERS = [
  {
    id: "home-hygiene-combo",

    /* 🔹 CHANGE THIS TO:
       "Festive Offers"
       "Today’s Deals"
       "Special Combo"
    */
    sectionTitle: "Combo Offers",

    title: "Home Hygiene Combo",
    badge: "FREE Dishwash & Handwash",

    /* 🔹 IMAGES (ONLY CHANGE FILES, NOT CODE) */
    images: {
      homepage: "images/offers/offer-homepage.jpg",
      detail: "images/offers/offer-pic.jpg"
    },

    /* 🔹 PRICE CONTROL */
    price: 199,
    mrp: 260,

    /* 🔹 WHAT CUSTOMER GETS */
    items: [
      { name: "Phenyl", qty: "1 L" },
      { name: "Floor Cleaner", qty: "1 L" }
    ],

    freeItems: [
      { name: "Dishwash", qty: "250 ml" },
      { name: "Handwash", qty: "250 ml" }
    ],

    description:
      "Best value combo for complete home hygiene. Ideal for daily cleaning needs.",

    howToUse:
      "Use phenyl and floor cleaner as directed. Free products included with every combo."
  }
];


/* =====================
   EXPORT (GLOBAL)
   ===================== */

window.PRODUCTS = PRODUCTS;
window.COMBO_OFFERS = COMBO_OFFERS;
