import React, {Component} from 'react';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import ProductPage from '../pages/ProductPage';
import {Route, Routes} from 'react-router-dom';

export default class AppRouter extends Component {
  publicRoutes = [
    {
      path: '/',
      element: Home,
    },
    {
      path: '/cart',
      element: Cart,
    },
    {
      path: '/productPage',
      element: ProductPage,
    },
    {
      path: '/*',
      element: Home,
    },
  ];

  render() {
    return (
      <Routes>
        {this.publicRoutes.map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}
      </Routes>
    );
  }
}
