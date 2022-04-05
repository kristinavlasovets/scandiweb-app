import React from 'react';
import productA from '../assets/img/productA.png';
import productB from '../assets/img/productB.png';
import Button from '../components/Button';

class ProductPage extends React.Component {
  render() {
    return (
      <div className="container">
        
        <div className="product_page">
          
           
           <div className="product_page_carousel">
             <img src={ productA } alt="product" className="product_page_carousel_img" />
             <img src={ productA } alt="product" className="product_page_carousel_img" />
             <img src={ productA } alt="product" className="product_page_carousel_img" />
           </div>

           <div className="product_page_card">
             <div className="product_page_img_wrapper">
               <img src={ productB } alt="product" className="product_page_img" />
             </div>

             <div className="product_page_info">
               <div className="product_page_title">
                 <p>Apollo</p>
                 <p>Running Shirt</p>
               </div>

               <div className="product_page_size_wrapper">
                 <p>Size:</p>
                 <ul>
                   <li className="disabled_size_button">XS</li>
                   <li className="chosen_size_button">S</li>
                   <li>M</li>
                   <li>L</li>
                 </ul>
               </div>

               <div className="product_page_price">
                 <p>price</p>
                 <p>$50.00</p>
               </div>

               {/* <Button toPath="#" btnClass="button check_out_button" btnText="add to cart"/> */}

               <div className="product_page_decscription">
                 <p>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
                 </div>

             </div>

           </div>

          
        </div>

      </div>
    );
  }
}

export default ProductPage;
