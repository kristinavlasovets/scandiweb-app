import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
    render() {
        return (
            <Link to="/cart"><button className="button">view bag</button></Link>
        )
    }
}

export default Button;