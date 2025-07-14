import React, { useContext, useState } from 'react';
import { assets } from '../../assets/frontend asset/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';
import "../../index.css"; // adjust path based on file location
import { StoreContext } from '../../context/storeContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
const {getTotalCartAmount}=useContext(StoreContext)
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
       
        <div className="navbar-search-icon">
         <Link to='/cart' ><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
