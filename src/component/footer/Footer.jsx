import React from 'react';
import './Footer.css';
import { assets } from '../../assets/frontend asset/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      {/* Grouping all footer sections inside a wrapper */}
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="logo-text">
            <span className="khana">Khana</span>
            <span className="khazana">Khazana</span>
          </div>
          <p className="footer-description">
            Khana Khazana is your one-stop destination for delicious, fresh, and high-quality meals delivered straight to your doorstep. We blend tradition with taste, bringing you a curated menu loved by foodies across the city.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-3003-2090</li>
            <li>contact@khana-khazana.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className='footer-copyright'>
        Copyright © 2025 Khana Khazana.com — All rights reserved
      </p>
    </div>
  );
};

export default Footer;
