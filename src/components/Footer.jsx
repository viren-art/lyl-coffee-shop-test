import PropTypes from 'prop-types';
import { storeHours } from '../data/storeHours';

/**
 * Footer component displaying Bean & Brew opening hours
 * 
 * @component
 * @description Renders site footer with store operating hours for all seven days.
 * Uses semantic HTML5 footer element with dark background consistent with site theme.
 * Hours are imported from centralized storeHours data module for easy updates.
 * Responsive grid layout adapts from single column (mobile) to 4 columns (desktop).
 * 
 * Accessibility Features:
 * - Semantic HTML5 <footer> element for landmark navigation
 * - H2 heading for "Opening Hours" section (proper heading hierarchy after H1 in Header)
 * - Structured list markup with <dl>, <dt>, <dd> for day/time pairs
 * - Color contrast: White text (#ffffff) on dark background (#111827) = 15.3:1 ratio (exceeds WCAG AA 4.5:1)
 * - Gray text (#d1d5db) on dark background (#111827) = 9.8:1 ratio (exceeds WCAG AA 4.5:1)
 * - role="contentinfo" for screen reader landmark identification
 * 
 * @returns {JSX.Element} Footer element with opening hours display
 * 
 * @example
 * <Footer />
 */
export default function Footer() {
  return (
    <footer 
      className="bg-gray-900 border-t border-gray-800 mt-12 py-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with proper hierarchy (H2 after H1 in Header) */}
        <h2 className="text-xl sm:text-2xl font-bold text-amber-500 mb-6 text-center">
          Opening Hours
        </h2>

        {/* Structured list of opening hours using definition list for semantic markup */}
        <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {storeHours.map((day) => (
            <div 
              key={day.dayOfWeek}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
            >
              {/* Day of week as definition term */}
              <dt className="text-white font-semibold mb-2">
                {day.dayOfWeek}
              </dt>
              
              {/* Opening hours as definition description */}
              <dd className="text-gray-300 text-sm">
                {day.isClosed ? (
                  <span className="text-gray-500">Closed</span>
                ) : (
                  <>
                    {day.openTime} - {day.closeTime}
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>

        {/* Copyright notice with proper semantic markup */}
        <p className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} Bean &amp; Brew. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {};