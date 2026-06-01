export default function Analytics({ orders, reviews }) {
  const totalRevenue = orders.reduce((sum, o) => {
    const num = parseFloat(o.total.replace(/[^\d.]/g, "")) || 0;
    return sum + num;
  }, 0);

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : "0.0";

  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const completedOrders = orders.filter((o) => o.status === "completed").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight font-inter">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500 mt-1 font-inter">
          Overview of your business metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Revenue */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide font-inter">
              Total Revenue
            </p>
            <span className="text-xl">💰</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900 font-inter">
            GHS {totalRevenue.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-2 font-inter">
            From {orders.length} orders
          </p>
        </div>

        {/* Total Orders */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide font-inter">
              Total Orders
            </p>
            <span className="text-xl">📦</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900 font-inter">
            {orders.length}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 rounded-full px-2.5 py-1 text-xs font-medium font-inter">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              {pendingOrders} pending
            </span>
          </div>
        </div>

        {/* Completed Orders */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide font-inter">
              Completed
            </p>
            <span className="text-xl">✅</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900 font-inter">
            {completedOrders}
          </p>
          <p className="text-xs text-gray-500 mt-2 font-inter">
            {orders.length > 0
              ? Math.round((completedOrders / orders.length) * 100)
              : 0}
            % completion rate
          </p>
        </div>

        {/* Average Rating */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide font-inter">
              Avg Rating
            </p>
            <span className="text-xl">⭐</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900 font-inter">
            {avgRating}
          </p>
          <p className="text-xs text-gray-500 mt-2 font-inter">
            From {reviews.length} reviews
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 font-inter">
          Recent Orders
        </h2>
        <div className="space-y-3">
          {orders.slice(0, 5).map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 font-inter">
                  {order.orderNumber}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 font-inter">
                  {order.customerName}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border font-inter ${
                    order.status === "completed"
                      ? "bg-white border-gray-200 text-gray-700"
                      : order.status === "pending"
                        ? "bg-blue-50 border-blue-200 text-blue-600"
                        : "bg-white border-gray-200 text-gray-700"
                  }`}
                >
                  {order.status === "completed" && (
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  )}
                  {order.status === "pending" && (
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  )}
                  {order.status}
                </span>
                <p className="text-sm font-semibold text-gray-900 min-w-[100px] text-right font-inter">
                  {order.total}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
