import React, { useEffect, useLayoutEffect, useState } from 'react';
import '../../assets/css/portfolio_components/Canvas.css';
import Transition from 'react-transition-group/Transition';
import Splash from '../Splash/Splash';

export default function Canvas() {
    const [state_height, setHeight] = useState(document.body.clientHeight);
    const [state_width, setWidth] = useState(document.body.clientWidth);

    return (
        // Fade
        <div className="canvas" style={{ height: state_height, width: state_width }}>
            <p id="splashtag">Yathavan Parameshwaran</p>
            <Splash/>
        </div>
    );
}