import React from 'react';

import Header from './components/Header.jsx';
import AppRouter from './components/AppRouter.jsx';


class App extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <AppRouter/>
                
            </div>
        )
    } 
};

export default App;