import { useState } from "react";

export default function ReviewsManager({ reviews, onDelete }) {
  const [filterRating, setFilterRating] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const categories = [
    "all",
    ...Array.from(new Set(reviews.map((r) => r.productCategory))),
  ];

  const filtered = reviews.filter((r) => {
    const matchRating =
      filterRating === "all" || r.rating === Number(filterRating);
    const matchCat =
      filterCategory === "all" || r.productCategory === filterCategory;
    const matchSearch =
      !search ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.productName.toLowerCase().includes(search.toLowerCase()) ||
      r.title.toLowerCase().includes(search.toLowerCase());
    return matchRating && matchCat && matchSearch;
  });

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(
        1,
      )
    : "0.0";

  const fiveStars = reviews.filter((r) => r.rating === 5).length;

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1
            className="text-2xl font-bold text-stone-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reviews
          </h1>
          <p className="text-stone-400 text-sm mt-1">
            {reviews.length} customer reviews
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-stone-900">{avgRating}</div>
            <div className="flex items-center gap-0.5 justify-center">
              {[1, 2, 3, 4, 5].map((s) => (
                <i
                  key={s}
                  className={
                    parseFloat(avgRating) >= s
                      ? "ri-star-fill text-amber-400 text-xs"
                      : "ri-star-line text-amber-400 text-xs"
                  }
                />
              ))}
            </div>
            <div className="text-xs text-stone-400 mt-0.5">avg rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-stone-900">{fiveStars}</div>
            <div className="text-xs text-stone-400 mt-1">5-star reviews</div>
          </div>
        </div>
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
            placeholder="Search reviews..."
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
        <select
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
          className="border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 bg-white focus:outline-none focus:border-rose-400 cursor-pointer"
        >
          <option value="all">All Ratings</option>
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>
              {r} Stars
            </option>
          ))}
        </select>
      </div>

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
            <h3 className="font-bold text-stone-900 text-lg mb-2">
              Delete Review?
            </h3>
            <p className="text-stone-500 text-sm mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  onDelete(deleteConfirm);
                  setDeleteConfirm(null);
                }}
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

      {/* Reviews List */}
      <div className="flex flex-col gap-4">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-stone-400">
            <i className="ri-star-line text-5xl mb-3 block"></i>
            <p>No reviews found</p>
          </div>
        )}
        {filtered.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl border border-stone-100 p-5 flex gap-4"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-stone-100">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <span className="font-bold text-stone-900 text-sm">
                    {review.name}
                  </span>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {review.location} · {review.date}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i
                      key={s}
                      className={
                        review.rating >= s
                          ? "ri-star-fill text-amber-400 text-xs"
                          : "ri-star-line text-amber-400 text-xs"
                      }
                    />
                  ))}
                  <button
                    onClick={() => setDeleteConfirm(review.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 hover:bg-red-100 text-red-400 cursor-pointer transition-colors"
                  >
                    <i className="ri-delete-bin-line text-sm"></i>
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                  {review.productName}
                </span>
              </div>
              <h4 className="font-semibold text-stone-800 text-sm mt-2">
                {review.title}
              </h4>
              <p className="text-stone-500 text-sm mt-1 leading-relaxed">
                {review.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
