import { useMemo } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

/**
 * MenuGrid component displaying filtered coffee menu items in responsive grid layout
 * 
 * @component
 * @description Renders responsive grid of coffee drink cards with client-side filtering.
 * Grid adapts from single column (mobile) to 2 columns (tablet) to 3-4 columns (desktop).
 * Uses React.useMemo to optimize filter performance by memoizing filtered results.
 * 
 * Accessibility Features:
 * - Semantic HTML5 <section> element with aria-labelledby for screen reader context
 * - H2 heading for "Coffee Menu" section (proper heading hierarchy)
 * - aria-live="polite" region announces filter changes to screen readers
 * - aria-atomic="true" ensures complete message announced (not just changes)
 * - Descriptive empty state message when no items match filter
 * - Proper semantic structure with section > heading > grid > articles
 * 
 * Performance Optimization:
 * - useMemo prevents re-filtering on every render, only when items or activeFilter change
 * - Array.filter() on 12-item dataset completes in <1ms on modern devices
 * - Sorted by displayOrder to maintain consistent grid positioning
 * - Empty state handling prevents rendering errors when no items match filter
 * 
 * @param {Object} props - Component props
 * @param {Array<Object>} props.items - Array of menu item objects from menuData.js
 * @param {string} props.activeFilter - Currently active filter category
 * 
 * @returns {JSX.Element} Grid container with filtered MenuItem components or empty state
 * 
 * @example
 * <MenuGrid 
 *   items={menuData} 
 *   activeFilter="Hot" 
 * />
 */
export default function MenuGrid({ items, activeFilter }) {
  /**
   * Memoized filtered and sorted menu items
   * Only recalculates when items array or activeFilter changes
   * Ensures sub-100ms filter response time by avoiding unnecessary re-filtering
   */
  const filteredItems = useMemo(() => {
    // Validate items array exists and has content
    if (!items || items.length === 0) {
      return [];
    }

    // Filter by category (or show all if 'All' selected)
    const filtered = activeFilter === 'All' 
      ? items 
      : items.filter(item => item.category === activeFilter);

    // Sort by displayOrder to maintain consistent grid positioning
    return [...filtered].sort((a, b) => a.displayOrder - b.displayOrder);
  }, [items, activeFilter]);

  // Handle empty state when no items match filter
  if (!items || items.length === 0) {
    return (
      <section 
        className="text-center py-12"
        aria-labelledby="menu-heading"
      >
        <h2 id="menu-heading" className="sr-only">Coffee Menu</h2>
        <p className="text-gray-400 text-lg">No menu items available</p>
      </section>
    );
  }

  if (filteredItems.length === 0) {
    return (
      <section 
        className="text-center py-12"
        aria-labelledby="menu-heading"
        aria-live="polite"
        aria-atomic="true"
      >
        <h2 id="menu-heading" className="sr-only">Coffee Menu</h2>
        <p className="text-gray-400 text-lg">
          No drinks match the <span className="text-amber-500 font-semibold">{activeFilter}</span> filter
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Try selecting a different category
        </p>
      </section>
    );
  }

  return (
    <section 
      className="mb-12"
      aria-labelledby="menu-heading"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Visually hidden heading for screen readers */}
      <h2 id="menu-heading" className="sr-only">
        Coffee Menu - {activeFilter === 'All' ? 'All Drinks' : `${activeFilter} Drinks`}
      </h2>

      {/* Accessible status message for screen readers */}
      <div className="sr-only" role="status">
        Showing {filteredItems.length} {activeFilter === 'All' ? '' : activeFilter.toLowerCase()} 
        {filteredItems.length === 1 ? ' drink' : ' drinks'}
      </div>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredItems.map(item => (
          <MenuItem 
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
}

MenuGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.oneOf(['Hot', 'Iced', 'Specialty']).isRequired,
      displayOrder: PropTypes.number.isRequired,
    })
  ).isRequired,
  activeFilter: PropTypes.oneOf(['All', 'Hot', 'Iced', 'Specialty']).isRequired,
};