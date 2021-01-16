import React, { useEffect, useLayoutEffect, useState } from 'react';
import '../../assets/css/portfolio_components/Canvas.css';
import Transition from 'react-transition-group/Transition';

export default function Canvas() {
    const [state_height, setHeight] = useState(document.body.clientHeight);
    const [state_width, setWidth] = useState(document.body.clientWidth);

    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            setHeight(state_height - window.scrollY);
        });
    }, []);

    // const duration = 300;

    // const defaultStyle = {
    //     transition: `opacity ${duration}ms ease-in-out`,
    //     opacity: 0,
    // }

    // const transitionStyles = {
    //     entering: { opacity: 1 },
    //     entered: { opacity: 1 },
    //     exiting: { opacity: 0 },
    //     exited: { opacity: 0 },
    // };

    // const Fade = ({ in: inProp }) => (
    //     <Transition in={inProp} timeout={duration}>
    //         {state => (
    //             <div style={{
    //                 ...defaultStyle,
    //                 ...transitionStyles[state]
    //             }}>
    //                 I'm a fade Transition!
    //             </div>
    //         )}
    //     </Transition>
    // );

    // const Parking = <p>Parking</p>

    return (
        // Fade
        <div className="canvas" style={{ height: state_height, width: '100%' }}>
            <p id="splashtag">Yathavan Parameshwaran</p>
        </div>
    );
}