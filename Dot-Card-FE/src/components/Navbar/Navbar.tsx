import "./Navbar.css"
import { logoDark, cart } from "../../assets"


const Navbar = () => {
  return (
    <div className="container">Navbar
        <div className="navbar">
            <img src={logoDark} alt="logo" />
            <button className="cart-btn">
                <img className="cart-btn-item" src={cart} alt="Cart" /> View Cart 
            </button>
        </div>
    </div>
  )
}

export default Navbar