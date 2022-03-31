import React from "react";
import logo from "../assets/img/logo.png";
import cart from "../assets/img/cart.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href="/women">WOMEN</a>
            </li>
            <li>
              <a href="/men">MEN</a>
            </li>
            <li>
              <a href="/kids">KIDS</a>
            </li>
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
      </header>
    );
  }
}

export default Header;
