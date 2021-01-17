import React, { useRef, useState } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';
import moment from 'moment';

export default function Skill(props) {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <div>
            <p ref={target} id="project_skills" onMouseEnter={() => { setShow(true); }} onMouseLeave={() => { setShow(false); }}>{props.skill.name}</p>
            <Overlay target={target.current} show={show} placement="top">
                <Tooltip id="skill-tooltip">
                    Years of Experience: {moment().year() - props.skill.learned}
                </Tooltip>
            </Overlay>
        </div>
    )
}