import { instagram, twitter, youtube, logoLight } from "../../assets";
import "./Footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer">
        <Link to="/">
            <img className="logo" alt="Logo" src={logoLight} />
        </Link>
        <p className="dot-cards-text">© 2023 dot.cards text task. All rights reserved</p>
        <div className="social-links">
            <Link to="https://www.instagram.com/" target="_blank">
            <img src={instagram} className="social-icons" />
            </Link>
            <Link to="https://twitter.com/" target="_blank">
            <img src={twitter} className="social-icons" />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
            <img src={youtube} className="social-icons" />
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Footer