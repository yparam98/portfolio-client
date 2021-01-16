import React from 'react';

import "../../../assets/css/portfolio_components/HeadingPanels.css";

export default function Panel(props) {
    return (
        <div className="panel">
            <p id="tag">{props.name}</p>
        </div>
    )
}