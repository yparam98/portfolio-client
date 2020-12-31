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
                <p style={{ fontFamily: 'monospace', color: 'red' }}>CURRENTLY IN PROGRESS</p>
                <Education />
            </div>
        )
    }
}

export default Main;