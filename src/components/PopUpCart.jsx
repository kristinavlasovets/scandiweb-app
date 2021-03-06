import React from 'react';
import Button from './Button';
import productD from '../assets/img/productD.png';

class PopUpCart extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="popup_cart_wrapper">
          <div className="popup_cart_header">
            <p><span>My Bag,</span> 2 items</p>
          </div>
          <div className="popup_cart_product_block">
            <div className="popup_cart_product_decription">
              <p>Apollo Running Shirt</p>
              <p>
                <span>$50.00</span>
              </p>
              <div className="popup_cart_product_size_button_block">
                <button>S</button>
                <button className="disabled_size_button">M</button>
              </div>
            </div>
            <div className="popup_cart_product_quantity_block">
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </div>
            <div className="popup_cart_product_img_wrapper">
              <img
                src={productD}
                alt="product"
                className="popup_cart_product_img"
              />
            </div>
          </div>
          <div className="popup_cart_product_block">
            <div className="popup_cart_product_decription">
              <p>Apollo Running Shirt</p>
              <p>
                <span>$50.00</span>
              </p>
              <div className="popup_cart_product_size_button_block">
                <button>S</button>
                <button className="disabled_size_button">M</button>
              </div>
            </div>
            <div className="popup_cart_product_quantity_block">
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </div>
            <div className="popup_cart_product_img_wrapper">
              <img
                src={productD}
                alt="product"
                className="popup_cart_product_img"
              />
            </div>
          </div>
          <div className="popup_cart_product_total">
            <p>Total</p>
            <p>$100.00</p>
          </div>
          <div className="popup_cart_product_footer">
            <Button toPath="/cart" btnClass="button--view_bag_button" btnText="View bag"/>
            <Button toPath="/cart" btnClass="button--check_out_button" btnText="Check out"/>
            
          </div>
        </div>
      </div>
    );
  }
}

export default PopUpCart;
