// import React from 'react'
import useCartStore from "../strore/cartStore"
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

  const navigate = useNavigate();
  const { cart, search, setSearch } = useCartStore();
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur-xl shadow-[0_25px_50px_-35px_rgba(0,0,0,0.8)]">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-400/30">
            Z
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Zustand</p>
            <p className="text-xs text-slate-400">Premium Shop</p>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-between gap-3 sm:justify-center">
          <button
            onClick={() => navigate("/")}
            className="rounded-full px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/products")}
            className="rounded-full px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Products
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            🛒 Cart ({cart.length})
          </button>
        </div>

        <div className="order-3 w-full sm:order-2 sm:w-auto">
          <div className="flex h-12 min-w-[240px] items-center rounded-full bg-white px-4 shadow-[0_15px_35px_-25px_rgba(255,255,255,0.9)]">
            <FaSearch className="text-slate-500 mr-3" />
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full bg-transparent text-slate-900 placeholder-slate-500 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
