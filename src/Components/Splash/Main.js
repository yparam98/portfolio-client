import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Menu</p>
                <Link to="/portfolio">Portfolio</Link>
            </div>
        )
    }
}

export default Main;