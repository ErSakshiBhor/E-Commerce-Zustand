const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold mb-3">Zustand Shop</h2>
          <p className="text-sm text-gray-300 leading-6">
            Modern ecommerce store built with React, Zustand, and Tailwind CSS.
            Discover products, view your cart, and shop with confidence.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">About us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300 leading-6">
            Email: support@zustand-shop.com
          </p>
          <p className="text-sm text-gray-300 leading-6 mt-2">
            Phone: +1 (800) 123-4567
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
        © 2026 Zustand Ecommerce. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
