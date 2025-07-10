import React, { useState } from 'react';
import { assets } from '../../assets/frontend asset/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';
import "../../index.css"; // adjust path based on file location

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="logo-text">
        <span className="khana">Khana</span>
        <span className="khazana">Khazana</span>
      </div>

      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/" onClick={() => setMenu("home")}>Home</Link>
        </li>
        <li className={menu === "Menu" ? "active" : ""}>
          <a href="#explore-menu" onClick={() => setMenu("Menu")}>Menu</a>
        </li>
        <li className={menu === "Contact Us" ? "active" : ""}>
          <a href="#footer" onClick={() => setMenu("Contact Us")}>Contact Us</a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
