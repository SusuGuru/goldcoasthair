const statusColors = {
  pending: "bg-amber-100 text-amber-700",
  confirmed: "bg-sky-100 text-sky-700",
  processing: "bg-violet-100 text-violet-700",
  shipped: "bg-blue-100 text-blue-700",
  delivered: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-red-100 text-red-600",
};

export default function DashboardOverview({
  products,
  orders,
  reviews,
  onNavigate,
}) {
  const safeOrders = orders ?? [];
  const safeProducts = products ?? [];
  const safeReviews = reviews ?? [];

  const pendingOrders = safeOrders.filter((o) => o.status === "pending").length;
  const deliveredOrders = safeOrders.filter(
    (o) => o.status === "delivered",
  ).length;
  const inStockProducts = safeProducts.filter((p) => p.inStock).length;

  const avgRating = safeReviews.length
    ? (
        safeReviews.reduce((sum, r) => sum + r.rating, 0) / safeReviews.length
      ).toFixed(1)
    : "0.0";

  const recentOrders = [...safeOrders]
    .filter((o) => o?.date)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  const statCards = [
    {
      label: "Total Products",
      value: safeProducts.length,
      sub: `${inStockProducts} in stock`,
      icon: "ri-shopping-bag-line",
      color: "bg-rose-50 text-rose-600",
      tab: "products",
    },
    {
      label: "Total Orders",
      value: safeOrders.length,
      sub: `${deliveredOrders} delivered`,
      icon: "ri-file-list-3-line",
      color: "bg-amber-50 text-amber-600",
      tab: "orders",
    },
    {
      label: "Pending Orders",
      value: pendingOrders,
      sub: "Need attention",
      icon: "ri-time-line",
      color: "bg-orange-50 text-orange-600",
      tab: "orders",
    },
    {
      label: "Avg. Rating",
      value: avgRating,
      sub: `${safeReviews.length} reviews`,
      icon: "ri-star-fill",
      color: "bg-yellow-50 text-yellow-600",
      tab: "reviews",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <h1
          className="text-3xl font-bold text-stone-900 mb-1 border-b border-stone-200 pb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Dashboard
        </h1>
        <p className="text-stone-500 text-sm">
          Welcome back — here's what's happening today
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <button
            key={card.label}
            onClick={() => onNavigate(card.tab)}
            className="bg-white rounded-2xl border border-stone-100 p-6 text-left hover:border-rose-200 hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-xl ${card.color} mb-4`}
            >
              <i className={`${card.icon} text-xl`}></i>
            </div>
            <div className="text-3xl font-bold text-stone-900 mb-1">
              {card.value}
            </div>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
              {card.label}
            </div>
            <div className="text-xs text-stone-400 mt-0.5">{card.sub}</div>
          </button>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
          <h2 className="font-bold text-stone-900 text-base">Recent Orders</h2>
          <button
            onClick={() => onNavigate("orders")}
            className="text-xs text-rose-600 font-semibold hover:text-rose-800 cursor-pointer whitespace-nowrap"
          >
            View All &rarr;
          </button>
        </div>

        <div className="divide-y divide-stone-50">
          {recentOrders.length === 0 && (
            <div className="text-center py-10 text-stone-400 text-sm">
              No orders yet
            </div>
          )}
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-stone-50 transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-500 flex-shrink-0">
                <i
                  className={`${
                    order.source === "whatsapp"
                      ? "ri-whatsapp-line text-emerald-600"
                      : "ri-global-line"
                  } text-base`}
                ></i>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-stone-900 truncate">
                  {order.customerName}
                </p>
                <p className="text-xs text-stone-400 truncate">
                  {order.orderNumber} · {order.items.length} item
                  {order.items.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-stone-900">
                  {order.total}
                </p>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${statusColors[order.status] || "bg-stone-100 text-stone-600"}`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <button
          onClick={() => onNavigate("products")}
          className="bg-rose-700 hover:bg-rose-800 text-white rounded-2xl p-6 text-left transition-all duration-200 ease-in-out cursor-pointer shadow-sm hover:shadow-md"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 mb-4">
            <i className="ri-add-line text-xl"></i>
          </div>
          <p className="font-bold text-base">Add Product</p>
          <p className="text-rose-200 text-xs mt-1">
            Add a new wig or bundle to your store
          </p>
        </button>

        <button
          onClick={() => onNavigate("orders")}
          className="bg-stone-800 hover:bg-stone-900 text-white rounded-2xl p-6 text-left transition-all duration-200 ease-in-out cursor-pointer shadow-sm hover:shadow-md"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mb-4">
            <i className="ri-file-list-3-line text-xl"></i>
          </div>
          <p className="font-bold text-base">Manage Orders</p>
          <p className="text-stone-400 text-xs mt-1">
            Update order statuses and track deliveries
          </p>
        </button>

        <button
          onClick={() => onNavigate("reviews")}
          className="bg-amber-50 hover:bg-amber-100 text-stone-900 rounded-2xl p-6 text-left transition-all duration-200 ease-in-out cursor-pointer border border-amber-100 shadow-sm hover:shadow-md"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-200 mb-4">
            <i className="ri-star-line text-amber-700 text-xl"></i>
          </div>
          <p className="font-bold text-base">View Reviews</p>
          <p className="text-stone-500 text-xs mt-1">
            See what customers are saying
          </p>
        </button>
      </div>
    </div>
  );
}
