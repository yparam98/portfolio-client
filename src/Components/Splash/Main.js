import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Splash.css';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="site-center stack">
                <div class="name-title">Yathavan Parameshwaran</div>                
                <button type="button" class="btn btn-outline-primary"><Link to="/portfolio">Portfolio</Link></button>
            </div>
        )
    }
}

export default Main;