import React from 'react';

import Header from './components/Header.jsx';
import AppRouter from './components/AppRouter.jsx';
import PopUpCart from './components/PopUpCart.jsx';


class App extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <PopUpCart />
                <AppRouter/>
                
            </div>
        )
    } 
};

export default App;