import React, { useEffect, useLayoutEffect, useState } from 'react';
import '../../assets/css/portfolio_components/Canvas.css';
import { PtsCanvas, QuickStartCanvas } from 'react-pts-canvas';
import { Line, Num, Util } from 'pts';
import { render } from 'react-dom';

export default function Canvas() {
    const [state_height, setHeight] = useState(document.body.clientHeight);
    const [state_width, setWidth] = useState(document.body.clientWidth);

    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            if (state_height > 0) {
                setHeight(state_height - window.scrollY);
                console.log("height: " + state_height);
            }            
        });
    }, []);

    return (
        <div className="canvas" style={{ height: state_height, width: state_width }}>
            <p id="splashtag">Yathavan Parameshwaran</p>
        </div>
    );
}