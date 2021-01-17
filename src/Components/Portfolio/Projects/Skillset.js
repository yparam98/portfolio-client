import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import moment from 'moment';

import Skill from './Skill';

import "../../../assets/css/project_components/Project.css";

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
                        return <Skill skill={item} />
                    })
                }
            </Row>
        </Container>
    );
}