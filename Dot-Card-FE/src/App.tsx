import './App.css'
import Home from './pages/home/Home.tsx'
import Cart from './pages/cart/Cart.tsx'
import Product from './pages/product/Product.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
