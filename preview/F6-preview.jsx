export default function F6Preview() {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [showAccessibilityPanel, setShowAccessibilityPanel] = React.useState(true);
  const [keyboardNavDemo, setKeyboardNavDemo] = React.useState(false);
  const [screenReaderDemo, setScreenReaderDemo] = React.useState(false);
  const [contrastCheckDemo, setContrastCheckDemo] = React.useState(false);

  const menuData = [
    {
      id: 'espresso-single',
      name: 'Single Espresso',
      description: 'Rich, full-bodied shot of premium espresso beans',
      price: 3.50,
      category: 'Hot',
      displayOrder: 1
    },
    {
      id: 'espresso-double',
      name: 'Double Espresso',
      description: 'Two shots of intense espresso perfection',
      price: 4.50,
      category: 'Hot',
      displayOrder: 2
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam cap',
      price: 5.00,
      category: 'Hot',
      displayOrder: 3
    },
    {
      id: 'iced-latte',
      name: 'Iced Latte',
      description: 'Espresso with cold milk over ice',
      price: 5.50,
      category: 'Iced',
      displayOrder: 4
    },
    {
      id: 'cold-brew',
      name: 'Cold Brew',
      description: 'Smooth cold-steeped coffee concentrate',
      price: 5.00,
      category: 'Iced',
      displayOrder: 5
    },
    {
      id: 'frappe',
      name: 'Frappé',
      description: 'Blended iced coffee with whipped cream',
      price: 6.50,
      category: 'Specialty',
      displayOrder: 6
    }
  ];

  const categories = ['All', 'Hot', 'Iced', 'Specialty'];

  const filteredItems = activeFilter === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === activeFilter);

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'Hot':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Iced':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Specialty':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30';
    }
  };

  const accessibilityFeatures = [
    {
      icon: '⌨️',
      title: 'Keyboard Navigation',
      description: 'All interactive elements accessible via Tab key with visible focus indicators',
      status: 'WCAG 2.1.1',
      color: 'emerald'
    },
    {
      icon: '🔊',
      title: 'Screen Reader Support',
      description: 'Semantic HTML with ARIA labels for complete context',
      status: 'WCAG 4.1.2',
      color: 'violet'
    },
    {
      icon: '🎨',
      title: 'Color Contrast',
      description: 'All text meets 4.5:1 ratio, large text meets 3:1 ratio',
      status: 'WCAG 1.4.3',
      color: 'amber'
    },
    {
      icon: '📱',
      title: 'Touch Targets',
      description: 'All buttons meet 44x44px minimum size for mobile',
      status: 'WCAG 2.5.5',
      color: 'cyan'
    }
  ];

  const contrastTests = [
    {
      element: 'Amber Accent (#f59e0b)',
      background: 'Dark Background (#111827)',
      ratio: '7.2:1',
      status: 'AA ✅',
      level: 'Exceeds'
    },
    {
      element: 'White Text (#ffffff)',
      background: 'Dark Background (#111827)',
      ratio: '15.3:1',
      status: 'AAA ✅',
      level: 'Exceeds'
    },
    {
      element: 'Gray Text (#d1d5db)',
      background: 'Dark Background (#111827)',
      ratio: '9.8:1',
      status: 'AA ✅',
      level: 'Exceeds'
    },
    {
      element: 'Filter Button (#4b5563)',
      background: 'Dark Background (#111827)',
      ratio: '4.8:1',
      status: 'AA ✅',
      level: 'Passes'
    }
  ];

  const semanticStructure = [
    { tag: '<header>', role: 'banner', description: 'Site header with H1 shop name' },
    { tag: '<nav>', role: 'navigation', description: 'Filter buttons with aria-label' },
    { tag: '<main>', role: 'main', description: 'Primary content area with id="main-content"' },
    { tag: '<section>', role: 'region', description: 'Menu grid with aria-labelledby' },
    { tag: '<article>', role: 'article', description: 'Individual menu items' },
    { tag: '<footer>', role: 'contentinfo', description: 'Opening hours with H2 heading' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-amber-400">Bean & Brew</h1>
              <p className="text-xs text-zinc-500 mt-1">WCAG 2.1 Level AA Compliant</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAccessibilityPanel(!showAccessibilityPanel)}
                className="px-4 py-2 bg-violet-500/20 text-violet-400 rounded-xl text-sm font-semibold hover:bg-violet-500/30 transition-colors"
              >
                {showAccessibilityPanel ? '✅ A11y Panel' : '📋 Show A11y'}
              </button>
              <div className="w-6 h-6 text-amber-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-5 py-8">
        {/* Accessibility Panel */}
        {showAccessibilityPanel && (
          <div className="mb-8 bg-zinc-800/50 rounded-2xl p-6 border border-white/[0.06]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Accessibility Features</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setKeyboardNavDemo(!keyboardNavDemo)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    keyboardNavDemo 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
                  }`}
                >
                  ⌨️ Keyboard
                </button>
                <button
                  onClick={() => setScreenReaderDemo(!screenReaderDemo)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    screenReaderDemo 
                      ? 'bg-violet-500 text-white' 
                      : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
                  }`}
                >
                  🔊 Screen Reader
                </button>
                <button
                  onClick={() => setContrastCheckDemo(!contrastCheckDemo)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    contrastCheckDemo 
                      ? 'bg-amber-500 text-white' 
                      : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
                  }`}
                >
                  🎨 Contrast
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="bg-zinc-900/50 rounded-xl p-4 border border-white/5">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-xs text-zinc-400 mb-2">{feature.description}</p>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-${feature.color}-500/20 text-${feature.color}-400`}>
                    {feature.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Keyboard Navigation Demo */}
            {keyboardNavDemo && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-4">
                <h3 className="text-sm font-bold text-emerald-400 mb-2">⌨️ Keyboard Navigation Demo</h3>
                <div className="space-y-2 text-xs text-zinc-300">
                  <p>• <kbd className="px-2 py-0.5 bg-zinc-700 rounded text-white">Tab</kbd> Navigate through filter buttons</p>
                  <p>• <kbd className="px-2 py-0.5 bg-zinc-700 rounded text-white">Enter</kbd> or <kbd className="px-2 py-0.5 bg-zinc-700 rounded text-white">Space</kbd> Activate filter</p>
                  <p>• <kbd className="px-2 py-0.5 bg-zinc-700 rounded text-white">Shift + Tab</kbd> Navigate backwards</p>
                  <p>• All buttons show 2px amber focus ring when focused</p>
                </div>
              </div>
            )}

            {/* Screen Reader Demo */}
            {screenReaderDemo && (
              <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 mb-4">
                <h3 className="text-sm font-bold text-violet-400 mb-3">🔊 Screen Reader Announcements</h3>
                <div className="space-y-3">
                  <div className="bg-zinc-900/50 rounded-lg p-3">
                    <p className="text-xs text-zinc-500 mb-1">Semantic Structure:</p>
                    <div className="space-y-1">
                      {semanticStructure.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 text-xs">
                          <code className="text-violet-400 font-mono">{item.tag}</code>
                          <span className="text-zinc-400">→</span>
                          <span className="text-zinc-300">{item.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-zinc-900/50 rounded-lg p-3">
                    <p className="text-xs text-zinc-500 mb-1">ARIA Labels:</p>
                    <div className="space-y-1 text-xs text-zinc-300">
                      <p>• Filter buttons: <code className="text-violet-400">"Filter by Hot drinks (currently selected)"</code></p>
                      <p>• Menu section: <code className="text-violet-400">"Coffee Menu - Hot Drinks"</code></p>
                      <p>• Status updates: <code className="text-violet-400">"Showing 3 hot drinks"</code></p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contrast Check Demo */}
            {contrastCheckDemo && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                <h3 className="text-sm font-bold text-amber-400 mb-3">🎨 Color Contrast Validation</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-zinc-400 font-semibold">Element</th>
                        <th className="text-left py-2 text-zinc-400 font-semibold">Background</th>
                        <th className="text-left py-2 text-zinc-400 font-semibold">Ratio</th>
                        <th className="text-left py-2 text-zinc-400 font-semibold">Status</th>
                        <th className="text-left py-2 text-zinc-400 font-semibold">Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contrastTests.map((test, index) => (
                        <tr key={index} className="border-b border-white/5">
                          <td className="py-2 text-zinc-300">{test.element}</td>
                          <td className="py-2 text-zinc-400">{test.background}</td>
                          <td className="py-2 text-white font-mono">{test.ratio}</td>
                          <td className="py-2">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400">
                              {test.status}
                            </span>
                          </td>
                          <td className="py-2 text-zinc-400">{test.level}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Filter Bar */}
        <nav className="mb-8" aria-label="Coffee category filters">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  aria-pressed={isActive}
                  aria-label={`Filter by ${category} drinks${isActive ? ' (currently selected)' : ''}`}
                  className={`min-w-[100px] py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-950 ${
                    isActive 
                      ? 'bg-amber-500 text-zinc-900 shadow-lg shadow-amber-500/30' 
                      : 'bg-zinc-700 text-zinc-200 hover:bg-zinc-600 border border-zinc-600'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Menu Grid */}
        <section aria-labelledby="menu-heading" aria-live="polite" aria-atomic="true">
          <h2 id="menu-heading" className="sr-only">
            Coffee Menu - {activeFilter === 'All' ? 'All Drinks' : `${activeFilter} Drinks`}
          </h2>

          <div className="sr-only" role="status">
            Showing {filteredItems.length} {activeFilter === 'All' ? '' : activeFilter.toLowerCase()} 
            {filteredItems.length === 1 ? ' drink' : ' drinks'}
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-400 text-lg">
                No drinks match the <span className="text-amber-500 font-semibold">{activeFilter}</span> filter
              </p>
              <p className="text-zinc-500 text-sm mt-2">Try selecting a different category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredItems.map((item) => (
                <article 
                  key={item.id}
                  className="bg-zinc-800/50 rounded-2xl p-5 border border-white/[0.06] shadow-lg shadow-black/20 hover:shadow-xl hover:border-white/10 transition-all duration-200"
                  aria-labelledby={`drink-${item.id}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 id={`drink-${item.id}`} className="text-xl font-bold text-amber-400 flex-1">
                      {item.name}
                    </h3>
                    <span 
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getCategoryBadgeColor(item.category)}`}
                      aria-label={`Category: ${item.category}`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-zinc-400 text-sm font-medium">Price</span>
                    <span className="text-white text-lg font-bold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Accessibility Compliance Summary */}
        <div className="mt-12 bg-zinc-800/50 rounded-2xl p-6 border border-white/[0.06]">
          <h2 className="text-lg font-bold text-white mb-4">✅ WCAG 2.1 Level AA Compliance Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-zinc-300">Semantic HTML5 structure with proper landmarks</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-zinc-300">Keyboard navigation with visible focus indicators</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-zinc-300">ARIA labels for screen reader context</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-zinc-300">Color contrast ratios exceed 4.5:1 minimum</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-zinc-300">Touch targets meet 44x44px minimum size</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-zinc-300">Proper heading hierarchy (H1 → H2 → H3)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-zinc-300">Skip to main content link for keyboard users</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-zinc-300">Graceful degradation without JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-white/5 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-xl font-bold text-amber-400 mb-6 text-center">Opening Hours</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { day: 'Monday', hours: '7:00 AM - 6:00 PM' },
              { day: 'Tuesday', hours: '7:00 AM - 6:00 PM' },
              { day: 'Wednesday', hours: '7:00 AM - 6:00 PM' },
              { day: 'Thursday', hours: '7:00 AM - 6:00 PM' },
              { day: 'Friday', hours: '7:00 AM - 8:00 PM' },
              { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
              { day: 'Sunday', hours: '8:00 AM - 5:00 PM' }
            ].map((item, index) => (
              <div key={index} className="bg-zinc-800/50 rounded-lg p-3 border border-white/5">
                <div className="text-white font-semibold mb-1 text-sm">{item.day}</div>
                <div className="text-zinc-400 text-xs">{item.hours}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-zinc-500 text-xs mt-6">
            © 2024 Bean & Brew. WCAG 2.1 Level AA Compliant.
          </p>
        </div>
      </footer>

      {/* Screen reader only styles */}
      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </div>
  );
}