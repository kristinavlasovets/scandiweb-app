import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={this.props.toPath}><button className={`button ${this.props.btnClass}`}>{this.props.btnText}</button></Link>
        )
    }
}

export default Button;