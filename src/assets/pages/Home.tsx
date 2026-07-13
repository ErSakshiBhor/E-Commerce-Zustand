import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_45%),_radial-gradient(circle_at_bottom_right,_rgba(79,70,229,0.25),_transparent_35%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-between px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-100 ring-1 ring-cyan-200/25">
                New Collection 2026
              </div>
              <div className="max-w-2xl space-y-6">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                  Elevate your everyday with premium, modern style.
                </h1>
                <p className="text-lg leading-8 text-slate-200 sm:text-xl">
                  Discover curated products, fast delivery, secure checkout, and effortless returns. Shop smarter with an elegant shopping experience.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  onClick={() => navigate("/products")}
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
                >
                  Shop Now
                </button>
                <button
                  onClick={() => navigate("/products")}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20"
                >
                  View All Products
                </button>
              </div>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="space-y-5">
                <div className="rounded-[32px] bg-slate-950/70 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Featured</p>
                  <h2 className="mt-4 text-3xl font-bold text-white">Shop top products</h2>
                  <p className="mt-3 text-slate-300">Fast delivery, premium quality, and a shopping experience designed to delight.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/70 p-5">
                    <p className="text-sm text-cyan-300">Smart Tech</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">Gadgets & Accessories</h3>
                  </div>
                  <div className="rounded-3xl bg-slate-950/70 p-5">
                    <p className="text-sm text-cyan-300">Home Living</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">Comfort Essentials</h3>
                  </div>
                  <div className="rounded-3xl bg-slate-950/70 p-5">
                    <p className="text-sm text-cyan-300">Fashion</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">Premium Looks</h3>
                  </div>
                  <div className="rounded-3xl bg-slate-950/70 p-5">
                    <p className="text-sm text-cyan-300">Wellness</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">Daily Essentials</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-[32px] bg-white/5 p-8 shadow-2xl shadow-slate-950/10">
              <h3 className="text-xl font-semibold text-white">Fast Delivery</h3>
              <p className="mt-3 text-slate-300">Get your orders delivered quickly with reliable shipping partners.</p>
            </div>
            <div className="rounded-[32px] bg-white/5 p-8 shadow-2xl shadow-slate-950/10">
              <h3 className="text-xl font-semibold text-white">Secure Payment</h3>
              <p className="mt-3 text-slate-300">Encrypted checkout and secure payment methods for every purchase.</p>
            </div>
            <div className="rounded-[32px] bg-white/5 p-8 shadow-2xl shadow-slate-950/10">
              <h3 className="text-xl font-semibold text-white">Easy Returns</h3>
              <p className="mt-3 text-slate-300">Hassle-free returns and 24/7 support for your peace of mind.</p>
            </div>
            <div className="rounded-[32px] bg-white/5 p-8 shadow-2xl shadow-slate-950/10">
              <h3 className="text-xl font-semibold text-white">Premium Quality</h3>
              <p className="mt-3 text-slate-300">Curated products that look great and perform even better.</p>
            </div>
          </section>

          <section className="mt-16 rounded-[40px] bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Testimonials</p>
              <h2 className="mt-4 text-4xl font-bold text-white">What happy customers say</h2>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-[28px] bg-slate-950/70 p-6 text-left">
                  <p className="text-slate-300">"Fast delivery and amazing product quality. Shopping here is always a pleasure."</p>
                  <p className="mt-4 font-semibold text-white">Sofia M.</p>
                </div>
                <div className="rounded-[28px] bg-slate-950/70 p-6 text-left">
                  <p className="text-slate-300">"The checkout was quick, and the customer support helped me choose the perfect item."</p>
                  <p className="mt-4 font-semibold text-white">Raj P.</p>
                </div>
                <div className="rounded-[28px] bg-slate-950/70 p-6 text-left">
                  <p className="text-slate-300">"Beautiful products and easy returns. I’ll definitely shop again."</p>
                  <p className="mt-4 font-semibold text-white">Aisha K.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
