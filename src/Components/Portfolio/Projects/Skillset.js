import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';

import moment from 'moment';

import "../../../assets/css/project_components/Project.css";

function showTooltip(skillObj) {

}

export default function SkillPanel(props) {
    const [skills, setSkills] = useState([]);

    useEffect(async () => {
        axios.get("https://yathavanparamesh.ca/api/expertise/getSkillsByProject", {
            params: { id: props.id }
        }).then((response) => {
            setSkills(response.data);
        });
    }, []);

    return (
        <Container fluid>
            <Row>
                {
                    skills.map((item, num) => {
                        return <p data-tip={"Years of Experience: " + (moment().year() - item.learned)} id="project_skills" onMouseEnter={() => {
                            showTooltip(item);
                        }}>{item.name}</p>
                    })
                }
                <ReactTooltip />
            </Row>
        </Container>
    );
}