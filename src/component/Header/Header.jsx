import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>From sizzling street snacks to chef-special meals — get hot, delicious food delivered fast to your door!</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
