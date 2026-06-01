const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "products", label: "Products", icon: "🛍️" },
  { id: "orders", label: "Orders", icon: "📋" },
  { id: "reviews", label: "Reviews", icon: "⭐" },
];

export default function AdminSidebar({
  activeTab,
  onTabChange,
  onLogout,
  stats,
}) {
  const getBadge = (id) => {
    if (id === "orders" && stats.pendingOrders > 0) return stats.pendingOrders;
    return null;
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col flex-shrink-0">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-200">
        <div className="h-8 w-8 bg-gray-900 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold text-sm font-inter">
            GC
          </span>
        </div>
        <p className="text-gray-500 text-xs mt-3 font-medium tracking-wide uppercase font-inter">
          Admin Panel
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
        {navItems.map((item) => {
          const badge = getBadge(item.id);
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap text-left font-inter ${
                active
                  ? "bg-blue-50 text-blue-600 border border-blue-200"
                  : "text-gray-600 hover:bg-gray-50 border border-transparent"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {badge !== null && (
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full min-w-[20px] text-center">
                  {badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-4 py-4 border-t border-gray-200 flex flex-col gap-2">
        <a
          href="/"
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap font-inter"
        >
          <span className="text-base">🌐</span>
          View Site
        </a>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all cursor-pointer whitespace-nowrap text-left font-inter"
        >
          <span className="text-base">🚪</span>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
