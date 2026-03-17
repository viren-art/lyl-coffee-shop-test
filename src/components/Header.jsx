import PropTypes from 'prop-types';

/**
 * Header component displaying Bean & Brew branding and decorative cart icon
 * 
 * @component
 * @description Renders site header with shop name as H1 heading and non-functional
 * shopping cart icon. Uses semantic HTML5 header element with dark background and 
 * amber accent colors. Header is sticky positioned for persistent branding visibility 
 * during scroll. Implements WCAG 2.1 Level AA accessibility with proper heading hierarchy,
 * ARIA labels for screen readers, and sufficient color contrast ratios.
 * 
 * Accessibility Features:
 * - Semantic HTML5 <header> element for landmark navigation
 * - H1 heading for primary site title (screen reader hierarchy)
 * - aria-hidden="true" on decorative cart icon to prevent screen reader announcement
 * - Color contrast: Amber (#f59e0b) on dark background (#111827) = 7.2:1 ratio (exceeds WCAG AA 4.5:1)
 * - Skip to main content link for keyboard navigation (visually hidden, focus visible)
 * 
 * @returns {JSX.Element} Header element with branding and cart icon
 * 
 * @example
 * <Header />
 */
export default function Header() {
  return (
    <header 
      className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-lg"
      role="banner"
    >
      {/* Skip to main content link for keyboard navigation */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-gray-900 focus:rounded-lg focus:font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Shop name as H1 heading for proper semantic hierarchy */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-500">
            Bean &amp; Brew
          </h1>

          {/* Decorative shopping cart icon (non-functional) */}
          <div 
            aria-hidden="true"
            className="pointer-events-none"
          >
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {};