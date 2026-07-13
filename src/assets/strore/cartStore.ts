import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "../types/cart";

interface CartStore {
  cart: CartItem[];

  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;

  search: string;
  setSearch: (value: string) => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      search: "",

      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      setSearch: (value) =>
        set({
          search: value,
        }),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity:
                    item.quantity > 0
                      ? item.quantity - 1
                      : 1,
                }
              : item
          ),
        })),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
      cart: state.cart,
    }),
    }
  )
);

export default useCartStore;