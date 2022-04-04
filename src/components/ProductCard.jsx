import React from 'react';
import productC from '../assets/img/productC.png';
import {ReactComponent as GreenCartIcon} from '../assets/img/green_cart_icon.svg';

class ProductCard extends React.Component {
  render() {
    return (
      <div className="product_card_wrapper">
        <div className="product_card_img">
          <img src={productC} alt="product" className="out_of_stock_img" />
          <p className="out_of_stock_tag">out of stock</p>
          <GreenCartIcon className="green_cart_icon" />
        </div>
        <div className="product_card_description">
          <h1 className="out_of_stock_text" >Apollo Running Shirt</h1>
          <h2 className="out_of_stock_text">$50.00</h2>
        </div>
      </div>
    );
  }
}

export default ProductCard;
