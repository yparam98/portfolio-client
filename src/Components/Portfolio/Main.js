import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Education from './Education'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h5>Portfolio</h5>
                <Education />
            </div>
        )
    }
}

export default Main;