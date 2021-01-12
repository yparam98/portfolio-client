import React, { useEffect, useLayoutEffect, useState } from 'react';
import '../../assets/css/portfolio_components/Canvas.css';
import { PtsCanvas, QuickStartCanvas } from 'react-pts-canvas';
import { Line, Num, Util } from 'pts';
import { render } from 'react-dom';

export default function Canvas() {
    const [height, setHeight] = useState(document.body.clientHeight);
    const [width, setWidth] = useState(document.body.clientWidth);

    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            setHeight(height - window.scrollY);
            console.info(window.scrollY);
        });
    }, []);

    return (
        <div className="canvas" style={{ height: height, width: width }}>
            <p id="splashtag">Yathavan Parameshwaran</p>
        </div>
    );
}