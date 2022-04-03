import React from 'react';
import productC from '../assets/img/productC.png';

class ProductCard extends React.Component {
  render() {
    return (
      <div className="product_card_wrapper">
        <div className="product_card_img">
          <img src={productC} alt="product" />
        </div>
        <div className="product_card_description">
          <h1>Apollo Running Shirt</h1>
          <h2>$50.00</h2>
        </div>
      </div>
    );
  }
}

export default ProductCard;
