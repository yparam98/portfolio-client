import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel, Col, Modal, Row } from 'react-bootstrap';
import SkillPanel from './Skillset';
import ProjectImages from './Images'

export default function DetailsPanel(props) {
    const [project, setProject] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(async () => {
        axios.get("/api/experience/getProjectDetails", {
            params: { id: props.project.id }
        }).then((response) => {
            setProject(response.data[0]);
            setDataLoaded(true);
        });
    }, []);

    return dataLoaded ? (
        <Modal size="lg" show={props.show} onHide={() => { props.close(false) }}>
            <Modal.Header>
                <Modal.Title>{project.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col lg={6}>
                        {project.description}
                    </Col>
                    <Col lg={6}>
                        <ProjectImages id={props.project.id} />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <SkillPanel id={project.id} />
            </Modal.Footer>
        </Modal>
    ) : <p>Loading...</p>;
}