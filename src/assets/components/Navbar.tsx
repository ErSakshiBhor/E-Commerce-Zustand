// import React from 'react'
import useCartStore from "../strore/cartStore"
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

  const navigate = useNavigate();
  const { cart,search,setSearch } = useCartStore();
  // const {  } = useCartStore();
  return (
    <div>
      <nav>
        <ul className="fixed flex items-center bg-black text-white px-3 py-3 gap-6 cursor-pointer w-full">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/products")}>Products</li>
         


          <div
            onClick={() => navigate("/cart")}
            className="cursor-pointer"
          >
            🛒 Cart ({cart.length})
          </div>

        

        <div className="flex items-center bg-white rounded-lg px-2 py-2 border-1 w-100">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search Products..."
            className="outline-none text-black"
            value={search} onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        </ul>

      </nav>

    </div>
  )
}

export default Navbar
