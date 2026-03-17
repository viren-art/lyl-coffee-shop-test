import PropTypes from 'prop-types';

/**
 * MenuItem component displaying individual coffee drink card
 * 
 * @component
 * @description Renders a single coffee drink card with name, description, price, and category.
 * Uses dark background with amber accents and ensures WCAG 2.1 AA color contrast compliance.
 * Card maintains consistent height across responsive breakpoints with proper spacing.
 * 
 * Accessibility Features:
 * - Semantic HTML5 <article> element for self-contained content
 * - H3 heading for drink name (proper heading hierarchy after H1/H2)
 * - Descriptive text with sufficient color contrast ratios
 * - Category badge with aria-label for screen reader context
 * - Price formatted with currency symbol and 2 decimal places
 * - Color contrast: Amber (#f59e0b) on dark background (#1f2937) = 6.8:1 ratio (exceeds WCAG AA 4.5:1)
 * - Color contrast: White (#ffffff) on dark background (#1f2937) = 14.5:1 ratio (exceeds WCAG AA 4.5:1)
 * - Color contrast: Gray (#d1d5db) on dark background (#1f2937) = 9.2:1 ratio (exceeds WCAG AA 4.5:1)
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - Unique menu item identifier
 * @param {string} props.name - Coffee drink name (e.g., "Single Espresso")
 * @param {string} props.description - Customer-facing description (max 150 chars)
 * @param {number} props.price - Price in USD (e.g., 3.50)
 * @param {string} props.category - Category enum: "Hot" | "Iced" | "Specialty"
 * 
 * @returns {JSX.Element} Article element with coffee drink information
 * 
 * @example
 * <MenuItem 
 *   id="espresso-single"
 *   name="Single Espresso" 
 *   description="Rich, full-bodied shot" 
 *   price={3.50}
 *   category="Hot"
 * />
 */
export default function MenuItem({ id, name, description, price, category }) {
  /**
   * Get category badge color based on category type
   * Returns Tailwind CSS classes for background and text colors
   * 
   * @param {string} category - Category type
   * @returns {string} Tailwind CSS classes
   */
  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'Hot':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Iced':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Specialty':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <article 
      className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg hover:shadow-xl hover:border-gray-600 transition-all duration-200"
      aria-labelledby={`drink-${id}`}
    >
      {/* Drink name as H3 heading */}
      <div className="flex items-start justify-between mb-3">
        <h3 
          id={`drink-${id}`}
          className="text-xl font-bold text-amber-500 flex-1"
        >
          {name}
        </h3>
        
        {/* Category badge with screen reader label */}
        <span 
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getCategoryBadgeColor(category)}`}
          aria-label={`Category: ${category}`}
        >
          {category}
        </span>
      </div>

      {/* Drink description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Price display */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-700">
        <span className="text-gray-400 text-sm font-medium">Price</span>
        <span className="text-white text-lg font-bold">
          ${price.toFixed(2)}
        </span>
      </div>
    </article>
  );
}

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.oneOf(['Hot', 'Iced', 'Specialty']).isRequired,
};