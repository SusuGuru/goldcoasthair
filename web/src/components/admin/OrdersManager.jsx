import { useState } from "react";
import AddOrderForm from "./AddOrderForm";

function printOrderSlip(order) {
  const itemRows = order.items
    .map(
      (item) =>
        `<tr>
          <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:13px;color:#1c1917">${item.productName}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:13px;color:#78716c;text-align:center">${item.length && item.length !== "-" ? item.length : "—"}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:13px;color:#78716c;text-align:center">${item.color && item.color !== "-" ? item.color : "—"}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:13px;color:#78716c;text-align:center">${item.qty}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:13px;font-weight:700;color:#1c1917;text-align:right">${item.price}</td>
        </tr>`,
    )
    .join("");

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Order Slip — ${order.orderNumber}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Georgia', serif; background: #fff; color: #1c1917; padding: 40px; max-width: 680px; margin: 0 auto; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #1c1917;padding-bottom:20px;margin-bottom:24px">
    <div>
      <div style="font-size:22px;font-weight:700;letter-spacing:-0.5px">Gold Coast Hair</div>
      <div style="font-size:12px;color:#78716c;margin-top:4px">Luxury Wigs &amp; Extensions</div>
    </div>
    <div style="text-align:right">
      <div style="font-size:18px;font-weight:700;color:#be123c">${order.orderNumber}</div>
      <div style="font-size:12px;color:#78716c;margin-top:2px">Date: ${order.date}</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px">
    <div style="background:#fafaf9;border-radius:10px;padding:16px">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#a8a29e;margin-bottom:10px">Customer</div>
      <div style="font-size:14px;font-weight:700;color:#1c1917">${order.customerName}</div>
      <div style="font-size:13px;color:#78716c;margin-top:4px">${order.customerPhone}</div>
      <div style="font-size:13px;color:#78716c;margin-top:2px">${order.customerLocation}</div>
    </div>
    <div style="background:#fafaf9;border-radius:10px;padding:16px">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#a8a29e;margin-bottom:10px">Order Info</div>
      <div style="font-size:13px;color:#78716c">Source: <strong style="color:#1c1917;text-transform:capitalize">${order.source}</strong></div>
      <div style="font-size:13px;color:#78716c;margin-top:4px">Status: <strong style="color:#be123c;text-transform:capitalize">${order.status}</strong></div>
      ${order.notes ? `<div style="font-size:12px;color:#a8a29e;margin-top:8px;font-style:italic">${order.notes}</div>` : ""}
    </div>
  </div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
    <thead>
      <tr style="background:#1c1917">
        <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#fff">Product</th>
        <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#fff">Length</th>
        <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#fff">Colour</th>
        <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#fff">Qty</th>
        <th style="padding:10px 12px;text-align:right;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#fff">Price</th>
      </tr>
    </thead>
    <tbody>${itemRows}</tbody>
  </table>
  <div style="display:flex;justify-content:flex-end;margin-bottom:32px">
    <div style="background:#fafaf9;border-radius:10px;padding:16px 24px;text-align:right">
      <div style="font-size:12px;color:#a8a29e;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">Order Total</div>
      <div style="font-size:24px;font-weight:700;color:#be123c">${order.total}</div>
    </div>
  </div>
  <div style="border-top:1px solid #e7e5e4;padding-top:16px;text-align:center">
    <div style="font-size:12px;color:#a8a29e">Thank you for shopping with Gold Coast Hair — we hope you love your new hair!</div>
    <div style="font-size:11px;color:#d4d0cc;margin-top:6px">WhatsApp: +233 547 149 360 &nbsp;|&nbsp; goldcoasthair.com</div>
  </div>
</body>
</html>`;

  const win = window.open("", "_blank", "width=750,height=900");
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 400);
}

const statusColors = {
  pending: "bg-amber-100 text-amber-700",
  confirmed: "bg-sky-100 text-sky-700",
  processing: "bg-violet-100 text-violet-700",
  shipped: "bg-blue-100 text-blue-700",
  delivered: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-red-100 text-red-600",
};

const allStatuses = [
  "pending",
  "confirmed",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
];

export default function OrdersManager({ orders, onUpdateStatus, onAddOrder }) {
  const [view, setView] = useState("list");
  const [filterStatus, setFilterStatus] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const [search, setSearch] = useState("");

  if (view === "add") {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setView("list")}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer transition-colors"
          >
            <i className="ri-arrow-left-line text-base"></i>
          </button>
          <div>
            <h1
              className="text-2xl font-bold text-stone-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              New Order
            </h1>
            <p className="text-stone-400 text-sm mt-0.5">
              Log a WhatsApp or manual order
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-stone-100 p-6 md:p-8 max-w-2xl">
          <AddOrderForm
            existingCount={orders.length}
            onSave={(order) => {
              onAddOrder(order);
              setView("list");
            }}
            onCancel={() => setView("list")}
          />
        </div>
      </div>
    );
  }

  const filtered = orders.filter((o) => {
    const matchStatus = filterStatus === "all" || o.status === filterStatus;
    const matchSearch =
      !search ||
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.orderNumber.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1
            className="text-2xl font-bold text-stone-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Orders
          </h1>
          <p className="text-stone-400 text-sm mt-1">
            {orders.length} total orders
          </p>
        </div>
        <button
          onClick={() => setView("add")}
          className="inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-add-line"></i>
          Add Order
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
            <i className="ri-search-line text-sm"></i>
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or order number..."
            className="w-full border border-stone-200 rounded-lg pl-9 pr-4 py-2.5 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-rose-400 transition-colors"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 bg-white focus:outline-none focus:border-rose-400 cursor-pointer"
        >
          <option value="all">All Statuses</option>
          {allStatuses.map((s) => (
            <option key={s} value={s} className="capitalize">
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-3">
        {sorted.length === 0 && (
          <div className="text-center py-16 text-stone-400">
            <i className="ri-file-list-3-line text-5xl mb-3 block"></i>
            <p>No orders found</p>
          </div>
        )}
        {sorted.map((order) => {
          const isExpanded = expandedId === order.id;
          const statusColor =
            statusColors[order.status] || "bg-stone-100 text-stone-600";
          return (
            <div
              key={order.id}
              className="bg-white rounded-2xl border border-stone-100 overflow-hidden"
            >
              {/* Order Header Row */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : order.id)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer hover:bg-stone-50 transition-colors"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 flex-shrink-0">
                  <i
                    className={`${
                      order.source === "whatsapp"
                        ? "ri-whatsapp-line text-emerald-600"
                        : "ri-global-line text-stone-500"
                    } text-base`}
                  ></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-bold text-stone-900">
                      {order.customerName}
                    </span>
                    <span className="text-xs text-stone-400">
                      {order.orderNumber}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    <span className="text-xs text-stone-400">
                      {order.customerLocation}
                    </span>
                    <span className="text-stone-200">·</span>
                    <span className="text-xs text-stone-400">{order.date}</span>
                    <span className="text-stone-200">·</span>
                    <span className="text-xs text-stone-400">
                      {order.items.length} item
                      {order.items.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-bold text-stone-900 text-sm">
                    {order.total}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${statusColor}`}
                  >
                    {order.status}
                  </span>
                  <div className="w-5 h-5 flex items-center justify-center text-stone-400">
                    <i
                      className={`${isExpanded ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"} text-base`}
                    ></i>
                  </div>
                </div>
              </button>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="border-t border-stone-100 px-5 py-5 flex flex-col gap-5">
                  {/* Items */}
                  <div>
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-3">
                      Order Items
                    </p>
                    <div className="flex flex-col gap-2">
                      {order.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between bg-stone-50 rounded-xl px-4 py-3"
                        >
                          <div>
                            <p className="text-sm font-semibold text-stone-800">
                              {item.productName}
                            </p>
                            <p className="text-xs text-stone-400 mt-0.5">
                              {item.length && item.length !== "-"
                                ? item.length
                                : ""}
                              {item.color && item.color !== "-"
                                ? ` · ${item.color}`
                                : ""}
                              {` · Qty: ${item.qty}`}
                            </p>
                          </div>
                          <span className="text-sm font-bold text-stone-900">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">
                        Customer
                      </p>
                      <p className="text-sm text-stone-700 font-medium">
                        {order.customerName}
                      </p>
                      <a
                        href={`tel:${order.customerPhone}`}
                        className="text-sm text-rose-600 hover:text-rose-800 font-medium"
                      >
                        {order.customerPhone}
                      </a>
                      <p className="text-xs text-stone-400 mt-1">
                        {order.customerLocation}
                      </p>
                    </div>
                    {order.notes && (
                      <div>
                        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">
                          Notes
                        </p>
                        <p className="text-sm text-stone-600 italic">
                          {order.notes}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Status Update */}
                  <div>
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">
                      Update Status
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {allStatuses.map((s) => {
                        const isActive = order.status === s;
                        return (
                          <button
                            key={s}
                            onClick={() => onUpdateStatus(order.id, s)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer whitespace-nowrap ${
                              isActive
                                ? `${statusColors[s]} ring-2 ring-offset-1 ring-current`
                                : "bg-stone-100 text-stone-500 hover:bg-stone-200"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${order.customerPhone.replace(/\s+/g, "").replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-whatsapp-line text-base"></i>
                      Message Customer
                    </a>
                    <button
                      onClick={() => printOrderSlip(order)}
                      className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-semibold px-4 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-printer-line text-base"></i>
                      Print Slip
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
