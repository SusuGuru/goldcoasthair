import { useState } from "react";

const categories = ["Wigs", "Extensions", "Bundles", "Accessories"];

const badgeOptions = [
  { label: "None", value: "", color: "" },
  { label: "Best Seller", value: "Best Seller", color: "bg-rose-600" },
  { label: "New In", value: "New In", color: "bg-emerald-600" },
  { label: "Hot", value: "Hot", color: "bg-orange-500" },
  { label: "Save 30%", value: "Save 30%", color: "bg-rose-600" },
  { label: "Save 31%", value: "Save 31%", color: "bg-rose-600" },
  { label: "Essential", value: "Essential", color: "bg-stone-600" },
];

const inputClass =
  "w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-rose-400 transition-colors";

export default function ProductForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(
    initial ?? {
      id: Date.now().toString(),
      category: "Wigs",
      name: "",
      desc: "",
      price: "",
      originalPrice: "",
      badge: "",
      badgeColor: "",
      image: "",
      lengths: [],
      colors: [],
      inStock: true,
    },
  );
  const [lengthInput, setLengthInput] = useState("");
  const [colorInput, setColorInput] = useState("");

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const addLength = () => {
    const v = lengthInput.trim();
    if (v && !form.lengths.includes(v)) {
      set("lengths", [...form.lengths, v]);
    }
    setLengthInput("");
  };

  const removeLength = (l) =>
    set(
      "lengths",
      form.lengths.filter((x) => x !== l),
    );

  const addColor = () => {
    const v = colorInput.trim();
    if (v && !form.colors.includes(v)) {
      set("colors", [...form.colors, v]);
    }
    setColorInput("");
  };

  const removeColor = (c) =>
    set(
      "colors",
      form.colors.filter((x) => x !== c),
    );

  const handleBadge = (val) => {
    const found = badgeOptions.find((b) => b.value === val);
    set("badge", val);
    set("badgeColor", found?.color ?? "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
            Product Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="e.g. Silky Straight Lace Front Wig"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
            Category *
          </label>
          <select
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
            className={`${inputClass} bg-white cursor-pointer`}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
          Description *
        </label>
        <textarea
          required
          rows={3}
          value={form.desc}
          onChange={(e) => set("desc", e.target.value)}
          placeholder="Describe the product..."
          className={`${inputClass} resize-none`}
        ></textarea>
      </div>

      {/* Price + Original Price */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
            Price *
          </label>
          <input
            type="text"
            required
            value={form.price}
            onChange={(e) => set("price", e.target.value)}
            placeholder="e.g. GHS 1,200"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
            Original Price
          </label>
          <input
            type="text"
            value={form.originalPrice}
            onChange={(e) => set("originalPrice", e.target.value)}
            placeholder="e.g. GHS 1,600"
            className={inputClass}
          />
        </div>
      </div>

      {/* Image URL */}
      <div>
        <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
          Image URL *
        </label>
        <input
          type="url"
          required
          value={form.image}
          onChange={(e) => set("image", e.target.value)}
          placeholder="https://..."
          className={inputClass}
        />
        {form.image && (
          <div className="mt-2 w-24 h-24 rounded-lg overflow-hidden border border-stone-100">
            <img
              src={form.image}
              alt="preview"
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}
      </div>

      {/* Badge */}
      <div>
        <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
          Badge
        </label>
        <select
          value={form.badge}
          onChange={(e) => handleBadge(e.target.value)}
          className={`${inputClass} bg-white cursor-pointer`}
        >
          {badgeOptions.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </div>

      {/* Lengths */}
      <div>
        <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
          Available Lengths
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={lengthInput}
            onChange={(e) => setLengthInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addLength();
              }
            }}
            placeholder='e.g. 18"'
            className={`${inputClass} flex-1`}
          />
          <button
            type="button"
            onClick={addLength}
            className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm rounded-lg cursor-pointer whitespace-nowrap transition-colors"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {form.lengths.map((l) => (
            <span
              key={l}
              className="flex items-center gap-1 bg-rose-50 text-rose-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {l}
              <button
                type="button"
                onClick={() => removeLength(l)}
                className="cursor-pointer hover:text-rose-900 w-4 h-4 flex items-center justify-center"
              >
                <i className="ri-close-line text-xs"></i>
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
          Available Colours
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addColor();
              }
            }}
            placeholder="e.g. Natural Black"
            className={`${inputClass} flex-1`}
          />
          <button
            type="button"
            onClick={addColor}
            className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm rounded-lg cursor-pointer whitespace-nowrap transition-colors"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {form.colors.map((c) => (
            <span
              key={c}
              className="flex items-center gap-1 bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {c}
              <button
                type="button"
                onClick={() => removeColor(c)}
                className="cursor-pointer hover:text-stone-900 w-4 h-4 flex items-center justify-center"
              >
                <i className="ri-close-line text-xs"></i>
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* In Stock Toggle */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => set("inStock", !form.inStock)}
          className={`w-12 h-6 rounded-full transition-colors cursor-pointer relative flex-shrink-0 ${
            form.inStock ? "bg-rose-600" : "bg-stone-200"
          }`}
        >
          <span
            className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
              form.inStock ? "translate-x-6" : "translate-x-0.5"
            }`}
          ></span>
        </button>
        <span className="text-sm font-medium text-stone-700">
          {form.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="flex-1 bg-rose-700 hover:bg-rose-800 text-white font-semibold py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap text-sm"
        >
          {initial ? "Save Changes" : "Add Product"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-stone-200 text-stone-700 hover:bg-stone-50 font-semibold py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap text-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
