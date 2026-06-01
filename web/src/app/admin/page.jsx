"use client";

import { useState, useEffect } from "react";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardOverview from "@/components/admin/DashboardOverview";
import OrdersManager from "@/components/admin/OrdersManager";
import ProductsManager from "@/components/admin/ProductsManager";
import ReviewsManager from "@/components/admin/ReviewsManager";
import { mockOrders } from "@/mocks/orders";
import { mockProducts } from "@/mocks/products";
import { mockReviews } from "@/mocks/reviews";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [orders, setOrders] = useState(mockOrders);
  const [products, setProducts] = useState(mockProducts);
  const [reviews, setReviews] = useState(mockReviews);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAdmin = sessionStorage.getItem("gch_admin") === "1";
      setIsAuthenticated(isAdmin);
    }
  }, []);

  const handleLogin = () => setIsAuthenticated(true);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("gch_admin");
    }
    setIsAuthenticated(false);
  };

  // Orders
  const handleAddOrder = (order) => setOrders((prev) => [order, ...prev]);
  const handleUpdateStatus = (id, status) =>
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));

  // Products
  const handleAddProduct = (product) =>
    setProducts((prev) => [product, ...prev]);
  const handleUpdateProduct = (id, updated) =>
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p)),
    );
  const handleDeleteProduct = (id) =>
    setProducts((prev) => prev.filter((p) => p.id !== id));

  // Reviews
  const handleDeleteReview = (id) =>
    setReviews((prev) => prev.filter((r) => r.id !== id));

  const stats = {
    products: products.length,
    orders: orders.length,
    pendingOrders: orders.filter((o) => o.status === "pending").length,
    reviews: reviews.length,
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-[#F9F7F4]">
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
        stats={stats}
      />

      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === "dashboard" && (
          <DashboardOverview
            orders={orders}
            products={products}
            reviews={reviews}
            onNavigate={setActiveTab}
          />
        )}

        {activeTab === "orders" && (
          <OrdersManager
            orders={orders}
            onAddOrder={handleAddOrder}
            onUpdateStatus={handleUpdateStatus}
          />
        )}

        {activeTab === "products" && (
          <ProductsManager
            products={products}
            onAdd={handleAddProduct}
            onUpdate={handleUpdateProduct}
            onDelete={handleDeleteProduct}
          />
        )}

        {activeTab === "reviews" && (
          <ReviewsManager reviews={reviews} onDelete={handleDeleteReview} />
        )}
      </main>
    </div>
  );
}
