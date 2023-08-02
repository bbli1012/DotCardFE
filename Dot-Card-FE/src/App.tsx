import './App.css'
import Home from './pages/Home/Home.tsx'
import Cart from './pages/Cart/Cart.tsx'
import Product from './pages/Product/Product.tsx'
import { Footer, Navbar } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
