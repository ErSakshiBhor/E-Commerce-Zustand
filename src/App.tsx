// import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'

import './App.css'
import Home from './assets/pages/Home'
import Products from './assets/pages/Products'
import Cart from './assets/pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <div className='pt-20'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
