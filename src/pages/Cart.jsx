import React from "react";
import productE from '../assets/img/productE.png';

class Cart extends React.Component {
  visible = true
  render() {
    return (
      <div className="container">
        <div className="cart_page">
        {this.visible && <div className="overlay"></div>}
          <div className="cart_page_header">
            <p>Cart</p>
          </div>

          <div className="cart_page_line"></div>

          <div className="cart_page_product_wrapper">
            <div className="cart_page_product_info">
              <div className="cart_page_product_title">
                <p>Jupiter</p>
                <p>Wayfarer</p>
              </div>

              <div className="cart_page_price">
                <p>$75.00</p>
              </div>

              <div className="cart_page_size">
                <ul>
                  <li>S</li>
                  <li className="chosen_size_button">M</li>
                </ul>
              </div>
            </div>

            <div className="cart_page_img_block">
              <div className="cart_page_quantity_block">
                <button>+</button>
                <p>1</p>
                <button>-</button>
              </div>

              <div className="cart_page_img_wrapper">
                <img src={ productE } alt="product" className="cart_page_img"/>
              </div>
            </div>
          </div>


          <div className="cart_page_line"></div>

          <div className="cart_page_product_wrapper">
            <div className="cart_page_product_info">
              <div className="cart_page_product_title">
                <p>Jupiter</p>
                <p>Wayfarer</p>
              </div>

              <div className="cart_page_price">
                <p>$75.00</p>
              </div>

              <div className="cart_page_size">
                <ul>
                  <li>S</li>
                  <li className="chosen_size_button">M</li>
                </ul>
              </div>
            </div>

            <div className="cart_page_img_block">
              <div className="cart_page_quantity_block">
                <button>+</button>
                <p>1</p>
                <button>-</button>
              </div>

              <div className="cart_page_img_wrapper">
                <img src={ productE } alt="product" className="cart_page_img"/>
              </div>
            </div>
          </div>

          <div className="cart_page_line"></div>
        </div>
      </div>
    );
  }
}

export default Cart;
