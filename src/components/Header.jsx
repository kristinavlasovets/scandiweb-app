import React from 'react';
import logo from '../assets/img/logo.png';
import cart from '../assets/img/cart.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="header_wrapper">
            <nav>
              <ul>
                <li>WOMEN</li>
                <li>MEN</li>
                <li>KIDS</li>
              </ul>
            </nav>
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="cart_block">
              <div className="currency_icon">
                <p>$</p>
                <a href="#" className="currency_arrow"></a>
              </div>
              <div className="cart_icon">
                <a href="/cart">
                  <img src={cart} alt="cart" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
