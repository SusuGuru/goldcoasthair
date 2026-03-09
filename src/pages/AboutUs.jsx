import React from "react";

function About() {
  return (
    <div className="bg-background-light text-slate-900">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            <div className="flex items-center gap-3">
              <span className="text-xl font-extrabold">LUXE HAIR</span>
            </div>

            <nav className="flex items-center gap-8">
              <a href="/shop" className="text-sm font-semibold hover:text-yellow-500">Shop</a>
              <a href="/collections" className="text-sm font-semibold hover:text-yellow-500">Collections</a>
              <a href="/about" className="text-sm font-semibold text-yellow-500">About</a>
              <a href="/care" className="text-sm font-semibold hover:text-yellow-500">Care</a>
              <a href="/reviews" className="text-sm font-semibold hover:text-yellow-500">Reviews</a>
            </nav>

          </div>
        </div>
      </header>


      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          className="absolute w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpt79cMpKwB8FAdjFfq_d3Zd6KtC6PRXl-m51ILA0_d6OKEhnx3QWYoiptNYR_BRI69Zciyw2KGqmroPwjOjhyKkS6s6jCedqxO1E8vJ43jBDEiuyQGMMsAhNXOs8w01smo3PqZN4GkJt0C9TjfcNQNvJjXGIioIaUy9a6KnmPDAQZrcQAIY3rHJTH2c6ckxILGnZg6tDI8y1eNVlaYSYNb3B6V8x1IWOiIJUbGzY74EYJUGvQfOnQAAUxUmIP3TTQELxHmtkFX-A"
          alt="Luxury Hair Model"
        />

        <div className="relative text-center text-white">
          <h1 className="text-6xl font-extrabold mb-6">Our Story</h1>

          <p className="text-xl max-w-xl mx-auto">
            Redefining elegance through premium, ethically sourced hair
            extensions and wigs designed for the modern woman.
          </p>
        </div>
      </section>


      {/* MISSION */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-yellow-500 text-sm font-bold uppercase mb-4">
            The Luxe Standard
          </h2>

          <h3 className="text-4xl font-extrabold mb-6">
            Commitment Beyond Beauty
          </h3>

          <p className="text-gray-600 max-w-3xl mx-auto">
            At Luxe Hair, we are dedicated to empowering women by providing
            the finest quality hair. Our commitment to ethical sourcing
            ensures every piece is a masterpiece.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mt-16">

            <div>
              <h4 className="text-xl font-bold mb-2">Ethically Sourced</h4>
              <p className="text-gray-500">
                We partner directly with communities to ensure fair
                compensation and sustainable practices.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">Premium Quality</h4>
              <p className="text-gray-500">
                Only the healthiest Remy human hair makes it through
                our rigorous selection process.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">Empowering Women</h4>
              <p className="text-gray-500">
                Restoring confidence and self-expression for women
                everywhere.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* PROCESS */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">

          <div className="flex-1">
            <img
              className="rounded-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-qSnBNPdpz-nEnk4EjoBFPbOxOaDlSy4qSsR75jgk0CNDx19QJbAClA7iLc9oZFoGfUURcABwXKBf-2q5-bfdYVOkFfa_xNTkAJLlHOBpxcr_Y8kZM8tVn9ubY2lMUdZrevHp_h1YOJI2RzOEt8GDMvICoWeZ1IqzdrOhX0AFI-yyQl3tYsAiQqbJHEG3ec4UkDvyj7Ralh7Nv2iz2HD6kT4f5nUpundxRwVcsySv_m_HztCr5s1qHzCAuFcTCyg8F07CeMvNPJ8"
              alt="Hair stylist"
            />
          </div>

          <div className="flex-1">

            <h3 className="text-4xl font-extrabold mb-8">
              The Luxe Process
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-bold text-xl">Virgin Selection</h4>
                <p className="text-gray-500">
                  We source only the highest grade temple hair ensuring
                  cuticles remain aligned.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xl">Gentle Treatment</h4>
                <p className="text-gray-500">
                  Our coloring process gently lifts pigments without
                  damaging the hair structure.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xl">Triple Check QC</h4>
                <p className="text-gray-500">
                  Every bundle is inspected for weight and consistency
                  before packaging.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* FOUNDER */}
      <section className="py-24 bg-white text-center">

        <img
          className="w-48 h-48 rounded-full object-cover mx-auto mb-6"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-WBRG4hXqar4ou2c-D_E1IfnWaeAcu7-AfPmmQB9EkieR0HGNeAzIWs5AmRXD7T1rLird-YMRws9Ode3HIQq3JlnWCcOrC7a2zcnpazalxUi6TYKTuRE7eIhvTRDo6mzigi6r0bmlzXh_Zgf8zl5cyFJ8q-bLldrOxO904yYuipnDEcbFoXW5Ihv_zEBXCHyTR8jLAOFmqpO169jq9IIRtmtynyjppZSBBcQbLnoWNebmMFnbEKYopkPyCQ8XhoqXNPPy_DKpL7w"
          alt="Founder"
        />

        <h3 className="text-3xl font-extrabold">Elena Rossi</h3>

        <p className="text-yellow-500 mb-4">Founder & Creative Director</p>

        <p className="max-w-2xl mx-auto text-gray-600 italic">
          Luxe Hair was born from frustration with inconsistent quality
          in the hair market. Luxury should be a promise kept in every
          package we ship.
        </p>

      </section>


      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h4 className="text-white text-xl font-bold mb-4">
            LUXE HAIR
          </h4>

          <p className="mb-6">
            Providing the world's most luxurious hair extensions
            and wigs.
          </p>

          <div className="flex justify-center gap-8 mb-6">

            <a href="#" className="hover:text-yellow-500">
              Instagram
            </a>

            <a href="#" className="hover:text-yellow-500">
              Twitter
            </a>

          </div>

          <p className="text-sm">
            © 2024 Luxe Hair Extensions. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}

export default About;