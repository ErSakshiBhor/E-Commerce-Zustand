import { FaShoppingCart, FaStar } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import useCartStore from "../strore/cartStore";
import CategoryFilter from "../components/CategoryFilter";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    search,
  } = useCartStore();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(res.data);
    } catch (err) {
      console.error("Error", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900">
            Shop the latest picks
          </h1>
          <p className="text-slate-600 mt-2">
            Browse top-rated items and add them to your cart for a seamless checkout.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-100 px-5 py-4 shadow-sm text-slate-700">
          <span className="font-semibold">In cart:</span> {cart.length} item{cart.length !== 1 ? 's' : ''}
        </div>
      </div>

      <CategoryFilter
        categories={[...new Set(products.map((product) => product.category))]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {products
          .filter((product) =>
            product.title
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .filter((product) =>
            selectedCategory === "All"
              ? true
              : product.category === selectedCategory
          )
          .map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="group rounded-[32px] bg-white p-6 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative mb-5 overflow-hidden rounded-[28px] bg-slate-50 p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="mx-auto h-44 w-auto object-contain"
                  />
                </div>

                <div className="space-y-4 text-left">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      {product.rating.count} reviews
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl font-bold text-emerald-600">
                      ₹{product.price.toFixed(2)}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                      <FaStar /> {product.rating.rate}
                    </span>
                  </div>

                  <div className="flex justify-center">
                    {cartItem ? (
                      <div className="flex items-center justify-center gap-3 rounded-2xl bg-slate-100 px-4 py-3 text-slate-700">
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="h-10 w-10 rounded-2xl bg-red-500 text-white transition hover:bg-red-600"
                        >
                          -
                        </button>

                        <span className="min-w-[30px] text-center text-lg font-semibold">
                          {cartItem.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="h-10 w-10 rounded-2xl bg-emerald-600 text-white transition hover:bg-emerald-700"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product as any)}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-700"
                      >
                        <FaShoppingCart />
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
