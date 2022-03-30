import React from 'react';

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
          <div className="logo">
            <a href="/">
              <img src="./assets/img/logo.png" alt="logo" />
            </a>
          </div>
          <div className="currency_icon">
            <p>$</p>
            <button>v</button>
          </div>
          <div className="cart_icon">
            <a href="/cart">
              <img src="./assets/img/logo.png" alt="cart" />
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
