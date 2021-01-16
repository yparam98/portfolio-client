import axios from 'axios';
import React, { useEffect, useState } from 'react';

import "../../assets/css/portfolio_components/Education.css";

export default function Stripe(props) {

    const [svgdata, setsvgdata] = useState("");
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(async () => {
        axios("https://yathavanparamesh.ca/api/utils/getScribble", {
            params: { id: props.school.school_id }
        }).then((response) => {
            console.info(response.data[0].viewbox);
            setsvgdata(response.data[0]);
            setDataLoaded(true);
        });
    }, []);

    return dataLoaded ? (
        <div style={{ width: 'auto', position: 'relative', display: 'flex', alignItems: 'center' }}>
            <img id="stripe_logo" src={props.image_path} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={svgdata.viewbox} style={{ display: 'block', zIndex: '-1', width: '40%' }}>
                <path fill={props.school.colour} d={svgdata.path} />
            </svg>
        </div>
    ) : <p>Loading</p>;
}
// Stripe.js:13 viewBox="0 0 555.58118 83.284981