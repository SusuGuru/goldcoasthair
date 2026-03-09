import React, { useEffect, useState } from "react";
import "../styles/Home.css";

const Home = () => {
  const [navbar, setNavbar] = useState("");

  useEffect(() => {
    fetch("../components/navbar")
      .then((res) => res.text())
      .then((data) => setNavbar(data));
  }, []);

  return (
    <div className="home-container">
      <div dangerouslySetInnerHTML={{ __html: navbar }} /> 

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg">
            <div className="hero-gradient"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZfGiHqplt3Oyvqm-9ANqZYbaUTkoyHlXuevmmITxSmDwOeWNgd3NUI5mUXV1j2b6kqNl-dAB6Za-dzY99asbTxEyTY1-YyIQHAnMGpE1OVqN1Zp-Zuu9nrtHMJOLZE-dnfHGR5LIHCO-oQrnYPcmlS3mZwRTJcF3nPwm75OLzPAIt8GnGdFKOpXQ8YKdvy0Sm5x-tsBwJL_vhT01B4j86ncQ7391BQV6MwSeBaUhyxr292d_gw-eamWDD5XFLhLRg3EyFl1mHhFM"
              alt="Luxury hair model"
              className="hero-image"
            />
          </div>

          <div className="hero-content">
            <span className="hero-badge">
              Premium Collection 2024
            </span>
            <h1 className="hero-title">
              Redefine Your <span className="hero-primary-text">Beauty</span>
            </h1>
            <p className="hero-text">
              Experience the pinnacle of luxury with our ethically sourced, premium human hair extensions and hand-tied wigs.
            </p>
            <div className="hero-buttons">
              <a className="btn-primary" href="#">
                Shop The Collection
              </a>
              <a className="btn-secondary" href="#">
                View Lookbook
              </a>
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="features-bar">
          <div className="features-grid">
            <div className="feature-item">
              <span className="material-symbols-outlined feature-icon">verified</span>
              <div>
                <h3 className="feature-title">100% Remy Hair</h3>
                <p className="feature-text">Purest quality, ethically sourced</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="material-symbols-outlined feature-icon">face</span>
              <div>
                <h3 className="feature-title">Natural Looking</h3>
                <p className="feature-text">Seamless blend with your hair</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="material-symbols-outlined feature-icon">timer</span>
              <div>
                <h3 className="feature-title">Long Lasting</h3>
                <p className="feature-text">Durability that exceeds 12 months</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="featured-categories">
          <div className="categories-header">
            <h2>Shop by Category</h2>
            <p>Discover your perfect match from our curated selections</p>
          </div>
          <div className="categories-grid">
            {/* Category 1 */}
            <a className="category-item" href="#">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr9MdGhYa3Cy3FLqsp0GuHni1-WbzBEeU6CEhrJh9gJCjYNiwQHi9Z32wS0kA3NJcszEuSoX-A0TimKWv2isLjOECm8XIGOIU5_ie5S17Ji8ImfKbik77I6kTKTWOzu8ZSbnkvD-duzXwx1Rk3bmYH-xY57mbG1GFKzChhedEdneRg_U-9f5eLDaLjVdbOXMkn1O1AH0museHm6nJu9mKREE-918iddFc-jAuhp0T0BadKnDZ35Sl3PrOOpCvw1TFv-dPtIYQ4Fjs"
                alt="Human Hair Wigs"
                className="category-image"
              />
              <div className="category-overlay"></div>
              <div className="category-content">
                <h3>Human Hair Wigs</h3>
                <span>Explore <span className="material-symbols-outlined">arrow_forward</span></span>
              </div>
            </a>
            {/* Category 2 */}
            <a className="category-item" href="#">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDvGRtRVlLK6Rx7aAmEJm5yovrbf7UZDacOusrrfmRmnYjAsWYZGSNmckc4plk8KoKBuEWQLwh5Cbz5VUEv5AQpr62siNn__kdXO5pemSTeeIvxCVKoRkIkvmQ6s_K3vZ-CIfIVPTaeYQMber0JTAKdxASg0M9PDc9wYn6x9ay7--maP8r_XfL8VSwVQJMiGiMCN5woUcdab1Agry9kdAJlZY759vmSYhbYlpH0-ozqAdlfZ0sfKt6Km8RNaIbF9jM2vnyk6We1Kc"
                alt="Synthetic Wigs"
                className="category-image"
              />
              <div className="category-overlay"></div>
              <div className="category-content">
                <h3>Synthetic Wigs</h3>
                <span>Explore <span className="material-symbols-outlined">arrow_forward</span></span>
              </div>
            </a>
            {/* Category 3 */}
            <a className="category-item" href="#">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOmG-VLTPnuVuq0zXO64YPmM8vZGd9XEVKYdt9quSKUyf1L9ppKFtLrwMG1LgiLdTzT9f2HlJqbXjyxx9m1sxNvVa0BEo1NTz7Xwk4vjr_Gmf0fgQBK--YbhMLI9R7zpLePAQa6J_MUbUo-Q228I5NSvP1P9nIAMms55nUfzBAaEomFU8IOt_knYXCer_sSsO_w7C6q6WSLKdHVouT_iiMNeQthGxiTArDB3ikrIPhFaCDh6cSqXFJLw6TQqYET1DCM0aUhk6oNCY"
                alt="Hair Extensions"
                className="category-image"
              />
              <div className="category-overlay"></div>
              <div className="category-content">
                <h3>Hair Extensions</h3>
                <span>Explore <span className="material-symbols-outlined">arrow_forward</span></span>
              </div>
            </a>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="best-sellers-section">
          <div className="best-sellers-container">
            <div className="best-sellers-header">
              <div>
                <h2>Best Sellers</h2>
                <p>Our most-loved styles, trending right now</p>
              </div>
              <div className="best-sellers-nav">
                <button className="nav-btn">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="nav-btn">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            <div className="best-sellers-grid">
              {/* Product 1 */}
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAum12n94b8wPeAVWq3ZRjOO7N6GTEB6HqAx7rPSExXBKkFPqegBP-5Pgtjnc1yypZifFA-7seA1XD1bnWI7GbmYMGQ8QmNjipfsfgmYEiPJig1VFXseyCdIcooF7CGrUi4FZ2zY0wTZSSADZRdhmSaRwjl7Rsl5MBw7L3wZwRkw9sujfxxy50V2C2BjPl51ON68Funj03Zbc_SOB9gA_5aVMvLzjpS6W_nmAbF8WXkn1phZ9faKjwTSPT0NDQXS8ffIMKb5F37J5U"
                    alt="Luxe Lace Front"
                    className="product-image"
                  />
                  <button className="favorite-btn">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <h4 className="product-title">Luxe Lace Front</h4>
                <p className="product-price">$299.00</p>
                <button className="add-cart-btn">Add to Cart</button>
              </div>

              {/* Product 2 */}
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSk-kXHnSA6on8b5mz8-6LJrn545XaLWLuwzjwx4AHzzdqaFjXtdABuUC2_hAxsjdCdFs1LTFhNLmUy76Tvh1b4eYbFpqvvSmcabsyzWuCgf_wG0a9mcYW9eq4o-0dy0Mf_0-jeFSyum5wPB0qTW2tERylupQZtZaSUTxoQ6E8c6DNpUZQ6qD2ZakqRc8RBOJTx4FOXpCGK3pMNIojSqW3a5N0BMIy1VPx66-Cj4cyxaMxx1HXWKrukjb7yo6x0qDeYcxhxNJXPGU"
                    alt="Clip-in Extensions"
                    className="product-image"
                  />
                  <button className="favorite-btn">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <h4 className="product-title">Silk Seamless Clip-ins</h4>
                <p className="product-price">$145.00</p>
                <button className="add-cart-btn">Add to Cart</button>
              </div>

              {/* Product 3 */}
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA07hDD8BPIqylEtXQh1FGAUUSiqQ6N_utETB-1pc3A2KBtAsPsTgfT6YWDgDyHl5EDuFfYVfFky3HEuVtetaBOBbWzdvX4MZTKjd5G5_e9KcxbgSOclWTFtlv9bpoTjByJFFKS9fkchqX0i2eD2WLhqCXcETk0sN5BK4axTQzrHsEhN4sloAdaIaNYJQxGuSgxgzBXXF2xGXiGeV_G41Rk2Gu84lhplrxDS29_6Fcrzus9nrUiSmrV2yNZsbLQa5hGgd_8mxWO194"
                    alt="Full Volume Wig"
                    className="product-image"
                  />
                  <button className="favorite-btn">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <h4 className="product-title">Bouncy Curls Wig</h4>
                <p className="product-price">$320.00</p>
                <button className="add-cart-btn">Add to Cart</button>
              </div>

              {/* Product 4 */}
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJULNuQdm5p6s0LxUP-70cK2sOkRHBcdetU_cA1NsIt5oGq6t9X7BbV9wWGH_kmPQ82KJw1g5tHj3uD_NZ0m1FzD6IQ98h4V0nQHzp3a34O4Jg5zFG7ey1ncyX6jRry0pLd0DkxV3QLnOXaURmhuJHpNHhI0UOq3d8FZp2kYJ2uWz9MFj1R-7ej_LrVZfxSL3v2Vn-kQ5LgA5b9T6PpKzwtcyFbX5xuQtLx5Zr6h1NHq6-0LhJXD1IlO0iXuk2HkP_yLqvNm5UXqzO-PRjlhyXUj-Zh5xTRpL9"
                    alt="Straight Wig"
                    className="product-image"
                  />
                  <button className="favorite-btn">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <h4 className="product-title">Sleek Straight Wig</h4>
                <p className="product-price">$280.00</p>
                <button className="add-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </section>

        {/* Luxe Standard Section */}
        <section className="luxe-standard-section">
          <div className="luxe-standard-container">
            <div className="luxe-standard-row">
              <div className="luxe-standard-image-wrapper">
                <img
                  className="luxe-standard-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg9Te45TSJlCgBYEWMKhLdkO-AnyNTipYSCkfpoDuXcrnuapW0yit-dFX1XR-BJUTT-IGzBr0t_LXJpmizKTny9QUe-r-E3Kh5SFlko_BJA2_uQ9JU9inq3ko3usjgwhxfy1-M-J2ejDFEczmMPBUA8UxIsl3nFibxmj5p5uZICBbI6QaDJ_sl4O1d0_SMPdm__4xeimD9KomChLU7aoVC8v1IZlkX7OyHTbwVJVxTaExQabrQBAa44kaj_UDN6dcEDPbb9O_HhIU"
                  alt="Luxe Standard"
                />
                <div className="luxe-glow-1"></div>
                <div className="luxe-glow-2"></div>
              </div>

              <div className="luxe-standard-content">
                <h2 className="luxe-standard-title">
                  The <span className="luxe-primary">LUXE</span> Standard
                </h2>
                <p className="luxe-standard-text">
                  We believe everyone deserves the confidence that comes with beautiful hair. That's why we source only the finest materials and employ expert artisans for every piece.
                </p>

                <div className="luxe-feature">
                  <div className="luxe-feature-icon">
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <div>
                    <div className="luxe-feature-title">Unmatched Shine</div>
                    <div className="luxe-feature-text">
                      Our hair retains its natural cuticle and luster even after multiple washes.
                    </div>
                  </div>
                </div>

                <div className="luxe-feature">
                  <div className="luxe-feature-icon">
                    <span className="material-symbols-outlined">handshake</span>
                  </div>
                  <div>
                    <div className="luxe-feature-title">Ethically Sourced</div>
                    <div className="luxe-feature-text">
                      100% transparent supply chain ensuring fair treatment of donors.
                    </div>
                  </div>
                </div>

                <div className="luxe-feature">
                  <div className="luxe-feature-icon">
                    <span className="material-symbols-outlined">brush</span>
                  </div>
                  <div>
                    <div className="luxe-feature-title">Custom Styling</div>
                    <div className="luxe-feature-text">
                      Heat-resistant and dye-friendly for unlimited styling options.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

{/* Testimonials Section */}
<section className="testimonials-section">

  <div className="stars">★★★★★</div>

  <h2 className="testimonials-title">
    "Life changing confidence in every strand."
  </h2>

  <div className="testimonials-grid">

    <div className="testimonial-card">
      <p>
        "I've tried so many brands but LUXE HAIR is in a league of its own.
        The blends is so seamless no one believes it's not my hair!"
      </p>
      <span className="testimonial-author">— Sarah M.</span>
    </div>

    <div className="testimonial-card">
      <p>
        "The quality of the Remy hair is outstanding.
        After 6 months, it still feels as soft and tangle-free as day one."
      </p>
      <span className="testimonial-author">— Jessica R.</span>
    </div>

    <div className="testimonial-card">
      <p>
        "Customer service helped me pick the perfect shade.
        It was a perfect match! Highly recommend to all my stylist friends."
      </p>
      <span className="testimonial-author">— Elena G.</span>
    </div>

  </div>

</section>


{/* Join the Inner Circle Section */}
<section className="inner-circle-section">

  <div className="inner-circle-card">

    <div className="inner-circle-text">
      <h2>Join the Inner Circle</h2>
      <p>
        Subscribe for exclusive early access to product launches,
        styling tips from pro stylists, and 15% off your first order.
      </p>
    </div>

    <form className="inner-circle-form">
      <input
        type="email"
        placeholder="Your email address"
        className="inner-circle-input"
      />

      <button className="inner-circle-btn">
        Subscribe Now
      </button>
    </form>

  </div>

</section>
</main>

{/* Footer Section */}
<footer className="footer-section">

  <div className="footer-grid">

    <div className="footer-brand">
      <h3>LUXE HAIR</h3>
      <p>
        Premium hair solutions for the modern woman who refuses
        to compromise on quality and style.
      </p>
    </div>

    <div>
      <h4>Shop</h4>
      <ul>
        <li>Wigs</li>
        <li>Clip-ins</li>
        <li>Tape-ins</li>
        <li>Accessories</li>
      </ul>
    </div>

    <div>
      <h4>Customer Care</h4>
      <ul>
        <li>Shipping Policy</li>
        <li>Returns & Exchanges</li>
        <li>Color Matching</li>
        <li>Contact Us</li>
      </ul>
    </div>

    <div>
      <h4>Company</h4>
      <ul>
        <li>Our Story</li>
        <li>Ethics</li>
        <li>Careers</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div className="footer-help">
      <span>NEED HELP?</span>
      <p>1-800-LUXE-HAIR</p>
    </div>

  </div>

  <div className="footer-bottom">
    {"\u00A9 2024 LUXE HAIR Global. All rights reserved."}
  </div>
</footer>
);
};

export default Home;