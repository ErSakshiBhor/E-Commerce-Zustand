import useCartStore from "../strore/cartStore";
import { FaStar } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart } = useCartStore();

  // Grand Total
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8 rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-10 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)]">
        <h1 className="text-4xl font-extrabold mb-4">My Cart</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-950/70 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Total Items</p>
            <p className="text-3xl font-bold mt-2">{cart.length}</p>
          </div>
          <div className="rounded-3xl bg-slate-950/70 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Grand Total</p>
            <p className="text-3xl font-bold mt-2 text-emerald-400">₹ {totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
        <div className="xl:col-span-2 space-y-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col rounded-[32px] border border-slate-200/70 bg-white p-6 shadow-[0_30px_50px_-20px_rgba(15,23,42,0.15)] transition hover:-translate-y-1"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-36 w-full items-center justify-center rounded-[28px] bg-slate-100 p-4 sm:w-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-slate-500 mb-4 line-clamp-2">
                    A premium pick from the store, styled for comfort and performance.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                    <span className="rounded-full bg-slate-100 px-3 py-1">Qty: {product.quantity}</span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">Price: ₹{product.price.toFixed(2)}</span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">Total: ₹{(product.price * product.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                  <FaStar /> {product.rating.rate} / 5
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="rounded-3xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[32px] border border-slate-200/70 bg-slate-50 p-6 shadow-[0_30px_50px_-20px_rgba(15,23,42,0.15)]">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Order summary</h2>
          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 shadow-sm">
              <span>Items in cart</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 shadow-sm">
              <span>Estimated shipping</span>
              <span>Free</span>
            </div>
            <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 shadow-sm">
              <span>Taxes</span>
              <span>Calculated at checkout</span>
            </div>
          </div>

          <div className="mt-6 rounded-[28px] bg-slate-900 px-5 py-6 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Total payable</p>
            <p className="mt-3 text-3xl font-bold">₹ {totalPrice.toFixed(2)}</p>
            <p className="mt-2 text-sm text-slate-400">Proceed to checkout to complete your purchase.</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;