import React from 'react';
import {ReactComponent as Logo} from '../assets/img/logo.svg';
import {ReactComponent as CartIcon} from '../assets/img/cart_icon.svg';
import PopUpCart from './PopUpCart';
import PopUpCurrency from './PopUpCurrency';

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
                <Logo alt="logo" className="logo_icon" />
              </a>
            </div>
            <div className="cart_block">
              <div className="currency_icon">
                <p>$</p>
                <a href="#" className="currency_arrow"></a>
              </div>
              <div className="cart_icon_wrapper">
                <a href="/cart">
                  <CartIcon alt="cart" className="cart_icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <PopUpCart />
        <PopUpCurrency/>
      </header>
    );
  }
}

export default Header;
