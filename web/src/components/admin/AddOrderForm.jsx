import { useState } from "react";

const emptyItem = () => ({
  productName: "",
  category: "Wigs",
  length: "",
  color: "",
  qty: 1,
  price: "",
});

export default function AddOrderForm({ onSave, existingCount, onCancel }) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerLocation, setCustomerLocation] = useState("");
  const [status, setStatus] = useState("pending");
  const [source, setSource] = useState("whatsapp");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState([emptyItem()]);
  const [errors, setErrors] = useState({});

  const calcTotal = () => {
    const sum = items
      .map((item) => {
        const raw = item.price.replace(/[^0-9.]/g, "");
        const num = Number.parseFloat(raw) || 0;
        return num * item.qty;
      })
      .reduce((a, b) => a + b, 0);

    return sum > 0 ? `GHS ${sum.toLocaleString()}` : "";
  };

  const validate = () => {
    const errs = {};

    if (!customerName.trim()) errs.customerName = "Customer name is required";
    if (!customerPhone.trim()) errs.customerPhone = "Phone number is required";
    if (!customerLocation.trim())
      errs.customerLocation = "Location is required";

    items.forEach((item, i) => {
      if (!item.productName.trim())
        errs[`item_${i}_name`] = "Product name required";
      if (!item.price.trim()) errs[`item_${i}_price`] = "Price required";
    });

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const year = new Date().getFullYear();
    const num = String(existingCount + 1).padStart(3, "0");

    const order = {
      id: `o_${Date.now()}`,
      orderNumber: `GCH-${year}-${num}`,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerLocation: customerLocation.trim(),
      items,
      total: calcTotal(),
      status,
      date: new Date().toISOString().split("T")[0],
      notes: notes.trim(),
      source,
    };

    onSave(order);
  };

  const addItem = () => {
    setItems([...items, emptyItem()]);
  };

  const removeItem = (index) => {
    if (items.length === 1) return;
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, field, value) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4 font-inter">
          Customer Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block font-inter">
              Customer Name
            </label>
            <input
              type="text"
              placeholder="Enter customer name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter ${
                errors.customerName
                  ? "border-red-400"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
            {errors.customerName && (
              <p className="text-red-600 text-xs mt-1 font-inter">
                {errors.customerName}
              </p>
            )}
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block font-inter">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+233 XX XXX XXXX"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter ${
                errors.customerPhone
                  ? "border-red-400"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
            {errors.customerPhone && (
              <p className="text-red-600 text-xs mt-1 font-inter">
                {errors.customerPhone}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block font-inter">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter delivery location"
              value={customerLocation}
              onChange={(e) => setCustomerLocation(e.target.value)}
              className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter ${
                errors.customerLocation
                  ? "border-red-400"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
            {errors.customerLocation && (
              <p className="text-red-600 text-xs mt-1 font-inter">
                {errors.customerLocation}
              </p>
            )}
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block font-inter">
              Order Source
            </label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full border border-gray-200 hover:border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter"
            >
              <option value="whatsapp">WhatsApp</option>
              <option value="website">Website</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block font-inter">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-200 hover:border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter"
            >
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900 font-inter">
            Order Items
          </h3>
          <button
            type="button"
            onClick={addItem}
            className="bg-blue-50 text-blue-600 rounded-lg px-3 py-1.5 text-sm font-medium inline-flex items-center gap-1.5 hover:bg-blue-100 transition-colors font-inter"
          >
            <span>+</span> Add Item
          </button>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-gray-700 font-inter">
                  Item {index + 1}
                </p>
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="text-red-600 hover:text-red-700 text-sm font-medium font-inter"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="md:col-span-2">
                  <label className="text-xs font-medium text-gray-500 mb-1.5 block font-inter">
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Brazilian Straight Bundle"
                    value={item.productName}
                    onChange={(e) =>
                      updateItem(index, "productName", e.target.value)
                    }
                    className={`w-full border rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter ${
                      errors[`item_${index}_name`]
                        ? "border-red-400"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  />
                  {errors[`item_${index}_name`] && (
                    <p className="text-red-600 text-xs mt-1 font-inter">
                      {errors[`item_${index}_name`]}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1.5 block font-inter">
                    Category
                  </label>
                  <select
                    value={item.category}
                    onChange={(e) =>
                      updateItem(index, "category", e.target.value)
                    }
                    className="w-full border border-gray-200 hover:border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter"
                  >
                    <option value="Wigs">Wigs</option>
                    <option value="Bundles">Bundles</option>
                    <option value="Closures">Closures</option>
                    <option value="Frontals">Frontals</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1.5 block font-inter">
                    Length/Size
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 20 inches"
                    value={item.length}
                    onChange={(e) =>
                      updateItem(index, "length", e.target.value)
                    }
                    className="w-full border border-gray-200 hover:border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1.5 block font-inter">
                    Color
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Natural Black"
                    value={item.color}
                    onChange={(e) => updateItem(index, "color", e.target.value)}
                    className="w-full border border-gray-200 hover:border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1.5 block font-inter">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) =>
                      updateItem(index, "qty", parseInt(e.target.value) || 1)
                    }
                    className="w-full border border-gray-200 hover:border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1.5 block font-inter">
                    Price (per unit)
                  </label>
                  <input
                    type="text"
                    placeholder="GHS 450"
                    value={item.price}
                    onChange={(e) => updateItem(index, "price", e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter ${
                      errors[`item_${index}_price`]
                        ? "border-red-400"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  />
                  {errors[`item_${index}_price`] && (
                    <p className="text-red-600 text-xs mt-1 font-inter">
                      {errors[`item_${index}_price`]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700 font-inter">
            Order Total
          </p>
          <p className="text-lg font-semibold text-gray-900 font-inter">
            {calcTotal() || "GHS 0"}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4 font-inter">
          Additional Notes
        </h3>
        <textarea
          placeholder="Add any special instructions or notes..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="w-full border border-gray-200 hover:border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all font-inter resize-none"
        />
      </div>

      <div className="flex items-center gap-3 justify-end">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors font-inter"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 font-inter"
        >
          Save Order
        </button>
      </div>
    </form>
  );
}
