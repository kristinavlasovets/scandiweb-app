import React from 'react';
import ProductCard from '../components/ProductCard';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="home">
          <h1>Category name</h1>
          <div className="home_wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
