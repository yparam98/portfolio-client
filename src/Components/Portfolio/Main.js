import React from 'react';
import Canvas from './Canvas';

import Education from './Education'
import { default as Skills } from './Skills';

import '../../assets/css/Portfolio.css'

export default function Main() {
    return (
        <div id="portfolio_container">
            <Canvas />
            <Education />
            <Skills />
        </div>
    );
}