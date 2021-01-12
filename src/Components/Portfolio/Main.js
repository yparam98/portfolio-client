import React from 'react';
import Canvas from './Canvas';

import Education from './Education'
import { default as Skills } from './Skills';

import '../../assets/css/Portfolio.css'

export default function Main() {
    let h = document.body.clientHeight;
    let w = document.body.clientWidth;

    return (
        <div id="portfolio_container">
            <Canvas />
            <Education />
            {/* <Skills /> */}
        </div>
    );
}