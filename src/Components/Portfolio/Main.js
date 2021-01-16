import React, { Suspense, useEffect, useState } from 'react';
import Canvas from './Canvas';

import Education from './Education'
import { default as Skills } from './Skills';

import '../../assets/css/Portfolio.css'

export default function Main() {

    const [state_height, setHeight] = useState(document.body.clientHeight);
    const [state_width, setWidth] = useState(document.body.clientWidth);

    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            setHeight(state_height - window.scrollY);
            window.scrollTo({
                top: document.body.clientHeight,
                left: 0,
                behavior: 'smooth'
            });
        });
    }, []);

    return (
        // <div>
        //     <Canvas/>
        // </div>
        <div id="portfolio_container">
            <Canvas />
            <Education />
            <Skills />
        </div>
    );
}