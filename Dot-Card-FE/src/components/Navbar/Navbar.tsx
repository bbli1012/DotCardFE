import "./Navbar.css"
import { logoDark, cart } from "../../assets"
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="container">Navbar
        <div className="navbar">
            <Link to="/">
                <img src={logoDark} alt="logo" />
            </Link>
            <Link to="/cart">
                <button className="cart-btn">
                    <img className="cart-btn-item" src={cart} alt="Cart" /> View Cart 
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar