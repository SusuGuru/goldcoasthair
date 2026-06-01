import { useState } from "react";
import ProductForm from "./ProductForm";

export default function ProductsManager({
  products,
  onAdd,
  onUpdate,
  onDelete,
}) {
  const [view, setView] = useState("list"); // 'list' | 'add' | 'edit'
  const [editing, setEditing] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [search, setSearch] = useState("");

  const categories = [
    "all",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filtered = products.filter((p) => {
    const matchCat = filterCategory === "all" || p.category === filterCategory;
    const matchSearch =
      !search || p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleSave = (product) => {
    if (editing) {
      onUpdate(product.id, product);
    } else {
      onAdd(product);
    }
    setView("list");
    setEditing(null);
  };

  const handleEdit = (product) => {
    setEditing(product);
    setView("edit");
  };

  const handleDelete = (id) => {
    onDelete(id);
    setDeleteConfirm(null);
  };

  if (view === "add" || view === "edit") {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setView("list");
              setEditing(null);
            }}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer transition-colors"
          >
            <i className="ri-arrow-left-line text-base"></i>
          </button>
          <div>
            <h1
              className="text-2xl font-bold text-stone-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {view === "edit" ? "Edit Product" : "New Product"}
            </h1>
            <p className="text-stone-400 text-sm mt-0.5">
              {view === "edit"
                ? "Update product details"
                : "Add a new product to your store"}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-stone-100 p-6 md:p-8 max-w-2xl">
          <ProductForm
            initial={editing}
            onSave={handleSave}
            onCancel={() => {
              setView("list");
              setEditing(null);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1
            className="text-2xl font-bold text-stone-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Products
          </h1>
          <p className="text-stone-400 text-sm mt-1">
            {products.length} products
          </p>
        </div>
        <button
          onClick={() => setView("add")}
          className="inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-add-line"></i>
          Add Product
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
            placeholder="Search products..."
            className="w-full border border-stone-200 rounded-lg pl-9 pr-4 py-2.5 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-rose-400 transition-colors"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 bg-white focus:outline-none focus:border-rose-400 cursor-pointer"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "All Categories" : c}
            </option>
          ))}
        </select>
      </div>

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
            <h3 className="font-bold text-stone-900 text-lg mb-2">
              Delete Product?
            </h3>
            <p className="text-stone-500 text-sm mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full cursor-pointer text-sm transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 border border-stone-200 text-stone-700 font-semibold py-3 rounded-full cursor-pointer text-sm transition-colors hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-stone-400">
          <i className="ri-shopping-bag-line text-5xl mb-3 block"></i>
          <p>No products found</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-stone-100 overflow-hidden flex flex-col"
          >
            {/* Product Image */}
            <div className="relative h-48 bg-stone-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
              {product.badge && (
                <span
                  className={`absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full ${product.badgeColor || "bg-rose-600"}`}
                >
                  {product.badge}
                </span>
              )}
              <span
                className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                  product.inStock
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col gap-2 flex-1">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                {product.category}
              </p>
              <h3 className="font-bold text-stone-900 text-sm leading-snug">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-900">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-stone-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              {product.lengths && product.lengths.length > 0 && (
                <p className="text-xs text-stone-400">
                  Lengths: {product.lengths.join(", ")}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="px-4 pb-4 flex gap-2">
              <button
                onClick={() => handleEdit(product)}
                className="flex-1 flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-semibold py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-edit-line text-sm"></i>
                Edit
              </button>
              <button
                onClick={() => setDeleteConfirm(product.id)}
                className="flex-1 flex items-center justify-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-semibold py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-delete-bin-line text-sm"></i>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
