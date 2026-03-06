// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl">flare</span>
                <h1 className="text-xl font-extrabold tracking-tighter text-slate-900 dark:text-slate-100">
                  LUXE HAIR
                </h1>
              </div>
              <nav className="hidden md:flex items-center gap-8">
                <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Wigs</a>
                <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Extensions</a>
                <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">New Arrivals</a>
                <a className="text-sm font-semibold text-primary" href="#">Sale</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                <input
                  type="text"
                  placeholder="Search collections..."
                  className="bg-primary/5 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary w-48 lg:w-64"
                />
              </div>
              <button className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
                <span className="material-symbols-outlined">shopping_bag</span>
                <span className="absolute top-1 right-1 bg-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full text-background-dark">2</span>
              </button>
              <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined">person</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent z-10"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZfGiHqplt3Oyvqm-9ANqZYbaUTkoyHlXuevmmITxSmDwOeWNgd3NUI5mUXV1j2b6kqNl-dAB6Za-dzY99asbTxEyTY1-YyIQHAnMGpE1OVqN1Zp-Zuu9nrtHMJOLZE-dnfHGR5LIHCO-oQrnYPcmlS3mZwRTJcF3nPwm75OLzPAIt8GnGdFKOpXQ8YKdvy0Sm5x-tsBwJL_vhT01B4j86ncQ7391BQV6MwSeBaUhyxr292d_gw-eamWDD5XFLhLRg3EyFl1mHhFM"
              alt="Luxury hair model"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 mb-6 bg-primary/20 border border-primary/30 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                Premium Collection 2024
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Redefine Your <span className="text-primary italic">Beauty</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
                Experience the pinnacle of luxury with our ethically sourced, premium human hair extensions and hand-tied wigs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background-dark font-bold rounded-lg hover:scale-105 transition-transform">
                  Shop The Collection
                </a>
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-lg hover:bg-white/20 transition-all">
                  View Lookbook
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="bg-primary/10 border-y border-primary/20 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {[
                { icon: "verified", title: "100% Remy Hair", desc: "Purest quality, ethically sourced" },
                { icon: "face", title: "Natural Looking", desc: "Seamless blend with your hair" },
                { icon: "timer", title: "Long Lasting", desc: "Durability that exceeds 12 months" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center justify-center md:justify-start gap-4">
                  <span className={`material-symbols-outlined text-primary text-4xl`}>{feature.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
              <p className="text-slate-600 dark:text-slate-400">Discover your perfect match from our curated selections</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Human Hair Wigs", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr9MdGhYa3Cy3FLqsp0GuHni1-WbzBEeU6CEhrJh9gJCjYNiwQHi9Z32wS0kA3NJcszEuSoX-A0TimKWv2isLjOECm8XIGOIU5_ie5S17Ji8ImfKbik77I6kTKTWOzu8ZSbnkvD-duzXwx1Rk3bmYH-xY57mbG1GFKzChhedEdneRg_U-9f5eLDaLjVdbOXMkn1O1AH0museHm6nJu9mKREE-918iddFc-jAuhp0T0BadKnDZ35Sl3PrOOpCvw1TFv-dPtIYQ4Fjs" },
                { title: "Synthetic Wigs", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDvGRtRVlLK6Rx7aAmEJm5yovrbf7UZDacOusrrfmRmnYjAsWYZGSNmckc4plk8KoKBuEWQLwh5Cbz5VUEv5AQpr62siNn__kdXO5pemSTeeIvxCVKoRkIkvmQ6s_K3vZ-CIfIVPTaeYQMber0JTAKdxASg0M9PDc9wYn6x9ay7--maP8r_XfL8VSwVQJMiGiMCN5woUcdab1Agry9kdAJlZY759vmSYhbYlpH0-ozqAdlfZ0sfKt6Km8RNaIbF9jM2vnyk6We1Kc" },
                { title: "Hair Extensions", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOmG-VLTPnuVuq0zXO64YPmM8vZGd9XEVKYdt9quSKUyf1L9ppKFtLrwMG1LgiLdTzT9f2HlJqbXjyxx9m1sxNvVa0BEo1NTz7Xwk4vjr_Gmf0fgQBK--YbhMLI9R7zpLePAQa6J_MUbUo-Q228I5NSvP1P9nIAMms55nUfzBAaEomFU8IOt_knYXCer_sSsO_w7C6q6WSLKdHVouT_iiMNeQthGxiTArDB3ikrIPhFaCDh6cSqXFJLw6TQqYET1DCM0aUhk6oNCY" },
              ].map((cat, i) => (
                <a key={i} href="#" className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-200">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                    <span className="text-primary font-semibold flex items-center gap-2">
                      Explore <span className="material-symbols-outlined">arrow_forward</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers, Quality, Testimonials, Newsletter, Footer */}
        {/* Repeat same pattern: convert class → className, self-close tags */}
      </main>
    </div>
  );
};

export default Home;