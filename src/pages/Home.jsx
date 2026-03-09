import React from "react";
import "../styles/Home.css"; // Make sure this path is correct

const Home = () => {
  return (
    <div className="home">
      {/* Navigation */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <span className="material-symbols-outlined">flare</span>
            <h1>LUXE HAIR</h1>
          </div>
          <nav className="nav-links">
            <a href="#">Wigs</a>
            <a href="#">Extensions</a>
            <a href="#">New Arrivals</a>
            <a href="#" className="sale">Sale</a>
          </nav>
          <div className="nav-actions">
            <input type="text" placeholder="Search collections..." />
            <button>
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
            <button>
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero">
          <div className="hero-overlay"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZfGiHqplt3Oyvqm-9ANqZYbaUTkoyHlXuevmmITxSmDwOeWNgd3NUI5mUXV1j2b6kqNl-dAB6Za-dzY99asbTxEyTY1-YyIQHAnMGpE1OVqN1Zp-Zuu9nrtHMJOLZE-dnfHGR5LIHCO-oQrnYPcmlS3mZwRTJcF3nPwm75OLzPAIt8GnGdFKOpXQ8YKdvy0Sm5x-tsBwJL_vhT01B4j86ncQ7391BQV6MwSeBaUhyxr292d_gw-eamWDD5XFLhLRg3EyFl1mHhFM"
            alt="Luxury hair model"
          />
          <div className="hero-text">
            <span>Premium Collection 2024</span>
            <h1>
              Redefine Your <span>Beauty</span>
            </h1>
            <p>
              Experience the pinnacle of luxury with our ethically sourced,
              premium human hair extensions and hand-tied wigs.
            </p>
            <div className="hero-buttons">
              <a href="#">Shop The Collection</a>
              <a href="#">View Lookbook</a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features">
          <div className="feature-item">
            <span className="material-symbols-outlined">verified</span>
            <h3>100% Remy Hair</h3>
            <p>Purest quality, ethically sourced</p>
          </div>
          <div className="feature-item">
            <span className="material-symbols-outlined">face</span>
            <h3>Natural Looking</h3>
            <p>Seamless blend with your hair</p>
          </div>
          <div className="feature-item">
            <span className="material-symbols-outlined">timer</span>
            <h3>Long Lasting</h3>
            <p>Durability that exceeds 12 months</p>
          </div>
        </section>

        {/* Categories */}
        <section className="categories">
          <a href="#" className="category">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr9MdGhYa3Cy3FLqsp0GuHni1-WbzBEeU6CEhrJh9gJCjYNiwQHi9Z32wS0kA3NJcszEuSoX-A0TimKWv2isLjOECm8XIGOIU5_ie5S17Ji8ImfKbik77I6kTKTWOzu8ZSbnkvD-duzXwx1Rk3bmYH-xY57mbG1GFKzChhedEdneRg_U-9f5eLDaLjVdbOXMkn1O1AH0museHm6nJu9mKREE-918iddFc-jAuhp0T0BadKnDZ35Sl3PrOOpCvw1TFv-dPtIYQ4Fjs" alt="Human Hair Wigs"/>
            <h3>Human Hair Wigs</h3>
          </a>
          <a href="#" className="category">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDvGRtRVlLK6Rx7aAmEJm5yovrbf7UZDacOusrrfmRmnYjAsWYZGSNmckc4plk8KoKBuEWQLwh5Cbz5VUEv5AQpr62siNn__kdXO5pemSTeeIvxCVKoRkIkvmQ6s_K3vZ-CIfIVPTaeYQMber0JTAKdxASg0M9PDc9wYn6x9ay7--maP8r_XfL8VSwVQJMiGiMCN5woUcdab1Agry9kdAJlZY759vmSYhbYlpH0-ozqAdlfZ0sfKt6Km8RNaIbF9jM2vnyk6We1Kc"/>
            <h3>Synthetic Wigs</h3>
          </a>
          <a href="#" className="category">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOmG-VLTPnuVuq0zXO64YPmM8vZGd9XEVKYdt9quSKUyf1L9ppKFtLrwMG1LgiLdTzT9f2HlJqbXjyxx9m1sxNvVa0BEo1NTz7Xwk4vjr_Gmf0fgQBK--YbhMLI9R7zpLePAQa6J_MUbUo-Q228I5NSvP1P9nIAMms55nUfzBAaEomFU8IOt_knYXCer_sSsO_w7C6q6WSLKdHVouT_iiMNeQthGxiTArDB3ikrIPhFaCDh6cSqXFJLw6TQqYET1DCM0aUhk6oNCY"/>
            <h3>Hair Extensions</h3>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Home;