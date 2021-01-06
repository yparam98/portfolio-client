import React from 'react';

import Education from './Education'
import { default as Skills } from './Skills';

export default function Main() {
    return (
        <div>
            {/* <p style={{ fontFamily: 'monospace', color: 'red' }}><strong>PORTFOLIO UNDER CONSTRUCTION</strong></p> */}
            <Education />
            {/* <Skills /> */}
        </div>
    );
}