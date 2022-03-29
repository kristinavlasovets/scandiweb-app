import React, { Component } from 'react';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import ItemCard from '../pages/ItemCard';
import { Route, Routes } from 'react-router-dom';

export default class AppRouter extends Component {
    publicRoutes = [
        {
            path: '/',
            element: Home
        },
        {
            path: '/cart',
            element: Cart
        },
        {
            path: '/itemcard',
            element: ItemCard
        },
    ];


  render() {
    return (
      <Routes>{this.publicRoutes.map(route => <Route path={route.path} element={<route.element />}/>)}</Routes>
    )
  }
}
