export default function F3Preview() {
  const [activeFilter, setActiveFilter] = React.useState('All');

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

  const storeHours = [
    { day: 'Monday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Tuesday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Thursday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '7:00 AM - 9:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 9:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 7:00 PM' }
  ];

  const categories = ['All', 'Hot', 'Iced', 'Specialty'];

  const filteredItems = activeFilter === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === activeFilter);

  const sortedItems = [...filteredItems].sort((a, b) => a.displayOrder - b.displayOrder);

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
        {/* Filter Bar */}
        <nav className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`
                  px-6 py-3 rounded-xl font-semibold text-sm
                  transition-all duration-200 min-h-[44px]
                  ${
                    activeFilter === category
                      ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/30'
                      : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 border border-white/10'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

        {/* Menu Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedItems.map((item) => (
            <article 
              key={item.id}
              className="bg-zinc-800/50 rounded-2xl p-6 border border-white/[0.06] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-200 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-3 gap-2">
                <h3 className="text-xl font-bold text-amber-400 flex-1">
                  {item.name}
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-700/50 text-zinc-300 border border-white/10 flex-shrink-0">
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

        {sortedItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-400 text-lg">
              No drinks match this filter. Try selecting a different category.
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-zinc-800/50 rounded-2xl p-5 border border-white/[0.06]">
            <p className="text-xs text-zinc-500 font-medium mb-1">Total Items</p>
            <p className="text-2xl font-bold text-white">{menuData.length}</p>
          </div>
          <div className="bg-zinc-800/50 rounded-2xl p-5 border border-white/[0.06]">
            <p className="text-xs text-zinc-500 font-medium mb-1">Hot Drinks</p>
            <p className="text-2xl font-bold text-amber-400">
              {menuData.filter(i => i.category === 'Hot').length}
            </p>
          </div>
          <div className="bg-zinc-800/50 rounded-2xl p-5 border border-white/[0.06]">
            <p className="text-xs text-zinc-500 font-medium mb-1">Iced Drinks</p>
            <p className="text-2xl font-bold text-cyan-400">
              {menuData.filter(i => i.category === 'Iced').length}
            </p>
          </div>
          <div className="bg-zinc-800/50 rounded-2xl p-5 border border-white/[0.06]">
            <p className="text-xs text-zinc-500 font-medium mb-1">Specialty</p>
            <p className="text-2xl font-bold text-violet-400">
              {menuData.filter(i => i.category === 'Specialty').length}
            </p>
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
              {storeHours.map((day) => (
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