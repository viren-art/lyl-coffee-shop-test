/**
 * Static coffee menu data for Bean & Brew
 * Contains 12 hardcoded coffee drink items with category assignments
 * 
 * @module menuData
 * @description Centralized data source for all coffee menu items.
 * To update menu: modify objects in this array and redeploy application.
 * 
 * @typedef {Object} MenuItem
 * @property {string} id - Unique identifier for the menu item
 * @property {string} name - Display name of the coffee drink
 * @property {string} description - Customer-facing description (max 150 characters)
 * @property {number} price - Price in USD (decimal format, e.g., 3.50)
 * @property {'Hot'|'Iced'|'Specialty'} category - Category for filtering
 * @property {number} displayOrder - Integer 1-12 for grid sorting
 * @property {boolean} isAvailable - Availability status (future extensibility)
 */

/**
 * Array of all coffee menu items
 * @type {MenuItem[]}
 */
export const menuData = [
  {
    id: 'espresso-single',
    name: 'Single Espresso',
    description: 'Rich, full-bodied shot of premium espresso with intense flavor and velvety crema',
    price: 3.50,
    category: 'Hot',
    displayOrder: 1,
    isAvailable: true
  },
  {
    id: 'espresso-double',
    name: 'Double Espresso',
    description: 'Two shots of intense espresso perfection for the true coffee connoisseur',
    price: 4.50,
    category: 'Hot',
    displayOrder: 2,
    isAvailable: true
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso diluted with hot water for a smooth, balanced flavor profile',
    price: 4.00,
    category: 'Hot',
    displayOrder: 3,
    isAvailable: true
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Classic espresso with steamed milk and a thick layer of microfoam',
    price: 5.00,
    category: 'Hot',
    displayOrder: 4,
    isAvailable: true
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Smooth espresso with steamed milk and a delicate layer of foam',
    price: 5.50,
    category: 'Hot',
    displayOrder: 5,
    isAvailable: true
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Decadent espresso with rich chocolate and steamed milk, topped with whipped cream',
    price: 6.00,
    category: 'Specialty',
    displayOrder: 6,
    isAvailable: true
  },
  {
    id: 'iced-coffee',
    name: 'Iced Coffee',
    description: 'Refreshing cold brew coffee served over ice for a smooth, crisp taste',
    price: 4.50,
    category: 'Iced',
    displayOrder: 7,
    isAvailable: true
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description: 'Chilled espresso with cold milk poured over ice for a refreshing treat',
    price: 5.50,
    category: 'Iced',
    displayOrder: 8,
    isAvailable: true
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Smooth cold-steeped coffee concentrate with naturally sweet, low-acid flavor',
    price: 5.00,
    category: 'Iced',
    displayOrder: 9,
    isAvailable: true
  },
  {
    id: 'frappe',
    name: 'Frappé',
    description: 'Blended iced coffee with ice and milk, topped with whipped cream',
    price: 6.50,
    category: 'Specialty',
    displayOrder: 10,
    isAvailable: true
  },
  {
    id: 'affogato',
    name: 'Affogato',
    description: 'Hot espresso poured over premium vanilla ice cream for a luxurious dessert',
    price: 6.00,
    category: 'Specialty',
    displayOrder: 11,
    isAvailable: true
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description: 'Bold espresso marked with a dollop of steamed milk foam',
    price: 4.00,
    category: 'Hot',
    displayOrder: 12,
    isAvailable: true
  }
];

/**
 * Valid category values for menu filtering
 * @type {string[]}
 */
export const VALID_CATEGORIES = ['Hot', 'Iced', 'Specialty'];

/**
 * Validates a menu item object structure
 * @param {MenuItem} item - Menu item to validate
 * @throws {Error} If validation fails
 * @returns {boolean} True if valid
 */
export function validateMenuItem(item) {
  if (!item.id || typeof item.id !== 'string') {
    throw new Error('Menu item must have a valid string id');
  }
  if (!item.name || typeof item.name !== 'string') {
    throw new Error('Menu item must have a valid string name');
  }
  if (!item.description || typeof item.description !== 'string') {
    throw new Error('Menu item must have a valid string description');
  }
  if (item.description.length > 150) {
    throw new Error('Menu item description must be 150 characters or less');
  }
  if (typeof item.price !== 'number' || item.price < 1.00 || item.price > 15.00) {
    throw new Error('Menu item price must be a number between $1.00 and $15.00');
  }
  if (!VALID_CATEGORIES.includes(item.category)) {
    throw new Error(`Menu item category must be one of: ${VALID_CATEGORIES.join(', ')}`);
  }
  if (typeof item.displayOrder !== 'number' || item.displayOrder < 1 || item.displayOrder > 12) {
    throw new Error('Menu item displayOrder must be an integer between 1 and 12');
  }
  return true;
}