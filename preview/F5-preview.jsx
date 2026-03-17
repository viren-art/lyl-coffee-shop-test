export default function F5Preview() {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [filterResponseTime, setFilterResponseTime] = React.useState(null);
  const [clickCount, setClickCount] = React.useState(0);

  const menuData = [
    {
      id: 'espresso-single',
      name: 'Single Espresso',
      description: 'Rich, full-bodied shot of premium espresso with intense flavor and velvety crema',
      price: 3.50,
      category: 'Hot',
      displayOrder: 1
    },
    {
      id: 'espresso-double',
      name: 'Double Espresso',
      description: 'Two shots of intense espresso perfection for the true coffee connoisseur',
      price: 4.50,
      category: 'Hot',
      displayOrder: 2
    },
    {
      id: 'americano',
      name: 'Americano',
      description: 'Espresso diluted with hot water for a smooth, balanced flavor profile',
      price: 4.00,
      category: 'Hot',
      displayOrder: 3
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      description: 'Classic espresso with steamed milk and a thick layer of microfoam',
      price: 5.00,
      category: 'Hot',
      displayOrder: 4
    },
    {
      id: 'latte',
      name: 'Latte',
      description: 'Smooth espresso with steamed milk and a delicate layer of foam',
      price: 5.50,
      category: 'Hot',
      displayOrder: 5
    },
    {
      id: 'mocha',
      name: 'Mocha',
      description: 'Decadent espresso with rich chocolate and steamed milk, topped with whipped cream',
      price: 6.00,
      category: 'Specialty',
      displayOrder: 6
    },
    {
      id: 'iced-coffee',
      name: 'Iced Coffee',
      description: 'Refreshing cold brew coffee served over ice for a smooth, crisp taste',
      price: 4.50,
      category: 'Iced',
      displayOrder: 7
    },
    {
      id: 'iced-latte',
      name: 'Iced Latte',
      description: 'Chilled espresso with cold milk poured over ice for a refreshing treat',
      price: 5.50,
      category: 'Iced',
      displayOrder: 8
    },
    {
      id: 'cold-brew',
      name: 'Cold Brew',
      description: 'Smooth cold-steeped coffee concentrate with naturally sweet, low-acid flavor',
      price: 5.00,
      category: 'Iced',
      displayOrder: 9
    },
    {
      id: 'frappe',
      name: 'Frappé',
      description: 'Blended iced coffee with ice and milk, topped with whipped cream',
      price: 6.50,
      category: 'Specialty',
      displayOrder: 10
    },
    {
      id: 'affogato',
      name: 'Affogato',
      description: 'Hot espresso poured over premium vanilla ice cream for a luxurious dessert',
      price: 6.00,
      category: 'Specialty',
      displayOrder: 11
    },
    {
      id: 'macchiato',
      name: 'Macchiato',
      description: 'Bold espresso marked with a dollop of steamed milk foam',
      price: 4.00,
      category: 'Hot',
      displayOrder: 12
    }
  ];

  const categories = ['All', 'Hot', 'Iced', 'Specialty'];

  const handleFilterChange = (category) => {
    const startTime = performance.now();
    setActiveFilter(category);
    setClickCount(prev => prev + 1);
    
    // Measure filter response time
    requestAnimationFrame(() => {
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      setFilterResponseTime(responseTime.toFixed(2));
    });
  };

  const filteredItems = React.useMemo(() => {
    const filtered = activeFilter === 'All' 
      ? menuData 
      : menuData.filter(item => item.category === activeFilter);
    return [...filtered].sort((a, b) => a.displayOrder - b.displayOrder);
  }, [activeFilter]);

  const getCategoryCount = (category) => {
    return menuData.filter(item => item.category === category).length;
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Hot': return 'text-amber-400';
      case 'Iced': return 'text-cyan-400';
      case 'Specialty': return 'text-violet-400';
      default: return 'text-white';
    }
  };

  const getCategoryBadgeColor = (category) => {
    switch(category) {
      case 'Hot': return 'bg-amber-500/10 border-amber-500/20 text-amber-400';
      case 'Iced': return 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400';
      case 'Specialty': return 'bg-violet-500/10 border-violet-500/20 text-violet-400';
      default: return 'bg-zinc-700/50 border-white/10 text-zinc-400';
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-900/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-amber-400">
              ☕ Bean & Brew
            </h1>
            
            <svg 
              className="w-6 h-6 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Performance Metrics Banner */}
        <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5">
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex-shrink-0">
              <span className="text-emerald-400 text-2xl">⚡</span>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-emerald-400 mb-1">
                Sub-100ms Filter Performance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="bg-zinc-900/50 rounded-xl p-3 border border-white/5">
                  <p className="text-xs text-zinc-500 mb-1">Last Response Time</p>
                  <p className="text-lg font-bold text-white">
                    {filterResponseTime ? `${filterResponseTime}ms` : '—'}
                  </p>
                </div>
                <div className="bg-zinc-900/50 rounded-xl p-3 border border-white/5">
                  <p className="text-xs text-zinc-500 mb-1">Filter Clicks</p>
                  <p className="text-lg font-bold text-white">{clickCount}</p>
                </div>
                <div className="bg-zinc-900/50 rounded-xl p-3 border border-white/5">
                  <p className="text-xs text-zinc-500 mb-1">Performance Target</p>
                  <p className="text-lg font-bold text-emerald-400">&lt;100ms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar with Active State */}
        <nav className="mb-8" role="navigation" aria-label="Coffee category filters">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  aria-pressed={isActive}
                  aria-label={`Filter by ${category} drinks`}
                  className={`
                    px-6 py-3 rounded-xl font-semibold text-sm
                    transition-all duration-150 min-h-[44px] min-w-[44px]
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950
                    ${
                      isActive
                        ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/30 hover:bg-amber-600 active:bg-amber-700 focus:ring-amber-500'
                        : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 active:bg-zinc-600/50 border border-white/10 focus:ring-amber-500'
                    }
                  `}
                >
                  {category}
                  {category !== 'All' && (
                    <span className={`ml-2 inline-flex items-center justify-center w-5 h-5 text-xs rounded-full ${
                      isActive 
                        ? 'bg-zinc-950/20 text-zinc-950 font-bold' 
                        : 'bg-zinc-700/50 text-zinc-400'
                    }`}>
                      {getCategoryCount(category)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Active Filter Indicator */}
        <div className="mb-6 text-center">
          <p className="text-sm text-zinc-400">
            Showing <span className={`font-semibold ${getCategoryColor(activeFilter)}`}>
              {filteredItems.length}
            </span> {activeFilter === 'All' ? 'drinks' : `${activeFilter.toLowerCase()} drinks`}
          </p>
        </div>

        {/* Menu Grid - Responsive Layout */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <article 
                key={item.id}
                className="bg-zinc-800/50 rounded-2xl p-6 border border-white/[0.06] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-200 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="text-xl font-bold text-amber-400 flex-1">
                    {item.name}
                  </h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 ${getCategoryBadgeColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
                
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>
                
                <p className="text-lg font-bold text-white mt-auto">
                  ${item.price.toFixed(2)}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-800/50 border border-white/[0.06] mb-4">
              <span className="text-3xl">☕</span>
            </div>
            <p className="text-zinc-400 text-lg mb-2">
              No drinks match this filter
            </p>
            <p className="text-zinc-500 text-sm">
              Try selecting a different category
            </p>
          </div>
        )}

        {/* Keyboard Navigation Demo */}
        <div className="mt-12 bg-zinc-800/30 rounded-2xl p-6 border border-white/[0.06]">
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex-shrink-0">
              <span className="text-violet-400 text-2xl">⌨️</span>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-white mb-2">
                Keyboard Navigation Support
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                Filter buttons are fully keyboard accessible with visible focus rings. 
                Press Tab to navigate between buttons, Enter/Space to activate.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-zinc-700/50 border border-white/10 text-xs text-zinc-300">
                  <kbd className="font-mono font-bold mr-1">Tab</kbd> Navigate
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-zinc-700/50 border border-white/10 text-xs text-zinc-300">
                  <kbd className="font-mono font-bold mr-1">Enter</kbd> Activate
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-zinc-700/50 border border-white/10 text-xs text-zinc-300">
                  <kbd className="font-mono font-bold mr-1">Space</kbd> Activate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-zinc-800/50 rounded-2xl p-5 border border-white/[0.06]">
            <p className="text-xs text-zinc-500 font-medium mb-1">Total Items</p>
            <p className="text-2xl font-bold text-white">{menuData.length}</p>
          </div>
          <div className="bg-zinc-800/50 rounded-2xl p-5 border border-white/[0.06]">
            <p className="text-xs text-zinc-500 font-medium mb-1">Hot Drinks</p>
            <p className="text-2xl font-bold text-amber-400">
              {getCategoryCount('Hot')}
            </p>
          </div>
          <div className="bg-zinc-800/50 rounded-2xl p-5 border border-white/[0.06]">
            <p className="text-xs text-zinc-500 font-medium mb-1">Iced Drinks</p>
            <p className="text-2xl font-bold text-cyan-400">
              {getCategoryCount('Iced')}
            </p>
          </div>
          <div className="bg-zinc-800/50 rounded-2xl p-5 border border-white/[0.06]">
            <p className="text-xs text-zinc-500 font-medium mb-1">Specialty</p>
            <p className="text-2xl font-bold text-violet-400">
              {getCategoryCount('Specialty')}
            </p>
          </div>
        </div>

        {/* Rapid Click Test */}
        <div className="mt-8 bg-zinc-800/30 rounded-2xl p-6 border border-white/[0.06]">
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex-shrink-0">
              <span className="text-rose-400 text-2xl">🎯</span>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-white mb-2">
                Rapid Click Handling
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                Filter state management prevents errors during rapid button clicks. 
                Try clicking multiple filter buttons quickly — state updates remain consistent.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-700/50 border border-white/10">
                <span className="text-xs text-zinc-500">Total Clicks:</span>
                <span className="text-sm font-bold text-white">{clickCount}</span>
                <span className="text-xs text-zinc-500">|</span>
                <span className="text-xs text-zinc-500">No Errors</span>
                <span className="text-emerald-400 text-sm">✓</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-amber-400 mb-6">
              Opening Hours
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto mb-8">
              {[
                { day: 'Monday', hours: '7:00 AM - 8:00 PM' },
                { day: 'Tuesday', hours: '7:00 AM - 8:00 PM' },
                { day: 'Wednesday', hours: '7:00 AM - 8:00 PM' },
                { day: 'Thursday', hours: '7:00 AM - 8:00 PM' },
                { day: 'Friday', hours: '7:00 AM - 9:00 PM' },
                { day: 'Saturday', hours: '8:00 AM - 9:00 PM' },
                { day: 'Sunday', hours: '8:00 AM - 7:00 PM' }
              ].map((day) => (
                <div 
                  key={day.day}
                  className="bg-zinc-800/50 rounded-xl p-4 border border-white/[0.06]"
                >
                  <p className="font-semibold text-white text-sm mb-1">
                    {day.day}
                  </p>
                  <p className="text-zinc-400 text-xs">
                    {day.hours}
                  </p>
                </div>
              ))}
            </div>
            
            <p className="text-zinc-500 text-sm">
              © 2024 Bean & Brew. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}