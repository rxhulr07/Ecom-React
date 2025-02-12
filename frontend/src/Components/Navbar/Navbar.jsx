import React, { useState ,useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css';
import logo from '../Assets/Assets/logo.png';
import cartlogo from '../Assets/Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const {getTotalItemsIncart} = useContext(ShopContext);

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src={logo} alt="Shop Logo" />
        <div>
          <p>Pay Now</p>
          {/* <h5>Shop Later</h5> */}
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className="nav-menu">
        <li onClick={() => setMenu('shop')}>
          <Link to="/" style={{textDecoration:'none'}}>Shop</Link>
          {menu === 'shop'&&<hr/>}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link to="/mens" style={{textDecoration:'none'}}>Men</Link>
          {menu === 'mens' && <hr />}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link to="/womens" style={{textDecoration:'none'}}>Women</Link>
          {menu === 'womens' && <hr />}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link to="/kids" style={{textDecoration:'none'}}>Kids</Link>
          {menu === 'kids' && <hr />}
        </li>
      </ul>

      {/* Login and Cart Section */}
      <div className="nav-login-cart">
        <button>
          <Link to="/loginSign" style={{textDecoration:'none'}}>Login</Link>
        </button>
        <Link to="/cart" style={{textDecoration:'none'}}>
          <img src={cartlogo} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-counter">{getTotalItemsIncart()}</div>
      </div>
    </div>
  );
};
