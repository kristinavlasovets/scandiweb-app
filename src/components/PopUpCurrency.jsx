import React from 'react';

class PopUpCurrency extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="popup_currency_wrapper">
              <div className="popup_currency_line">
                  <p>$</p>
                  <p>USD</p>
              </div>
              <div className="popup_currency_line">
                  <p>€</p>
                  <p>EUR</p>
              </div>
              <div className="popup_currency_line">
                  <p>¥</p>
                  <p>JPY</p>
              </div>

          </div>
       
      </div>
    );
  }
}

export default PopUpCurrency;
