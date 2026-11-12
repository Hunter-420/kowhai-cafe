export type DietaryTag = 'V' | 'VG' | 'GF' | 'DF';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'breakfast' | 'toast' | 'bakery' | 'drinks';
  tags: DietaryTag[];
  seasonal?: boolean;
}

export interface MenuCategory {
  id: 'breakfast' | 'toast' | 'bakery' | 'drinks';
  title: string;
  subtitle: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'breakfast', title: 'Breakfast & Bowls', subtitle: 'Warm sustenance served until 2:30 pm daily' },
  { id: 'toast', title: 'Toast & Sandwiches', subtitle: 'Artisan sourdough baked fresh every morning' },
  { id: 'bakery', title: 'Sweet & Bakery', subtitle: 'Daily cabinet favourites and seasonal tarts' },
  { id: 'drinks', title: 'Coffee & Cold Brew', subtitle: 'Custom Grey Lynn roast and house-pressed elixirs' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Breakfast & Bowls
  {
    id: 'kowhai-smash',
    name: 'Kowhai Smash',
    description: 'Poached free-range eggs, smashed avocado, house whipped feta, toasted seeds, microgreens, grilled lemon on seeded sourdough',
    price: '$23.50',
    category: 'breakfast',
    tags: ['V'],
    seasonal: true,
  },
  {
    id: 'bircher-bowl',
    name: 'Overnight Apple & Feijoa Bircher',
    description: 'Rolled oats soaked in organic almond milk, grated Granny Smith, seasonal feijoa compote, roasted macadamias, coconut yoghurt',
    price: '$18.50',
    category: 'breakfast',
    tags: ['VG', 'DF'],
  },
  {
    id: 'wild-mushroom-medley',
    name: 'Pan-Roasted Wild Mushrooms',
    description: 'Portobello and oyster mushrooms with thyme, garlic butter, truffle emulsion, parmesan crisp on toasted brioche',
    price: '$24.00',
    category: 'breakfast',
    tags: ['V'],
  },
  {
    id: 'smoked-salmon-potato-cake',
    name: 'Crispy Agria Potato Cake & King Salmon',
    description: 'House-cured Mt Cook Alpine salmon, soft poached egg, dill créme fraîche, pickled shallots, caper crunch',
    price: '$26.50',
    category: 'breakfast',
    tags: ['GF'],
  },

  // Toast & Sandwiches
  {
    id: 'reuben-toastie',
    name: 'Kowhai House Pastrami Reuben',
    description: 'Slow-cured beef brisket, ferment sauerkraut, Swiss Gruyere, Russian dressing on dark caraway rye',
    price: '$21.00',
    category: 'toast',
    tags: [],
  },
  {
    id: 'stracciatella-heirloom-toast',
    name: 'Whipped Stracciatella & Heirloom Tomatoes',
    description: 'Clevedon buffalo stracciatella, blistered cherry tomatoes, basil oil, aged balsamic on thick sourdough',
    price: '$19.50',
    category: 'toast',
    tags: ['V'],
  },
  {
    id: 'greens-melt',
    name: 'Greens & Aged Cheddar Melt',
    description: 'Wilted rainbow chard, leek confit, mature Egmont cheddar, Dijon mustard spread on toasted ciabatta',
    price: '$18.00',
    category: 'toast',
    tags: ['V'],
  },

  // Sweet & Bakery
  {
    id: 'feijoa-almond-loaf',
    name: 'Warm Feijoa & Almond Loaf',
    description: 'Scented with vanilla bean, served with salted cultured butter and honey cream',
    price: '$8.50',
    category: 'bakery',
    tags: ['V'],
  },
  {
    id: 'cardamom-morning-bun',
    name: 'Cardamom & Orange Sugar Morning Bun',
    description: 'Laminated flaky pastry, crushed green cardamom seeds, fresh orange zest glaze',
    price: '$7.50',
    category: 'bakery',
    tags: ['V'],
  },
  {
    id: 'dark-chocolate-hazelnut-brownie',
    name: 'Hawke\'s Bay 70% Dark Chocolate Brownie',
    description: 'Rich fudge brownie with roasted hazelnuts, espresso sea salt, dark cocoa nibs',
    price: '$8.00',
    category: 'bakery',
    tags: ['GF', 'V'],
  },

  // Coffee & Drinks
  {
    id: 'flat-white',
    name: 'Signature Flat White',
    description: 'Double shot of Kowhai house blend, silky microfoam, smooth chocolate and hazelnut undertones',
    price: '$5.50',
    category: 'drinks',
    tags: ['V'],
  },
  {
    id: 'cold-brew-single-origin',
    name: 'Single Origin 16-Hour Cold Brew',
    description: 'Ethiopian Yirgacheffe steeped cold, bright bergamot and floral notes, served over clear hand-cut ice',
    price: '$6.50',
    category: 'drinks',
    tags: ['VG', 'GF', 'DF'],
  },
  {
    id: 'kawakawa-iced-tea',
    name: 'Wild Kawakawa & Lemongrass Iced Tea',
    description: 'Native New Zealand kawakawa leaf infusion, fresh lemongrass, raw local bush honey, soda splash',
    price: '$7.00',
    category: 'drinks',
    tags: ['VG', 'GF', 'DF'],
    seasonal: true,
  },
  {
    id: 'organic-batch-brew',
    name: 'Organic Filter Batch Brew',
    description: 'Rotating weekly microlot, unlimited refill within 60 minutes',
    price: '$5.00',
    category: 'drinks',
    tags: ['VG', 'GF', 'DF'],
  },
];
