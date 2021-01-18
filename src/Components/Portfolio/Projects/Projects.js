import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OutlineCard from './OutlineCard';

export default function Main() {
    const [projects, setProjects] = useState([]);

    useEffect(async () => {
        axios.get(
            "/api/experience/getProjects"
        ).then((response) => {
            setProjects(response.data);
        });
    }, []);

    return (
        <Col md={12} style={{ backgroundColor: 'white' }}>
            <Container fluid>
                <Row>
                    {
                        projects.map((item, num) => {
                            return <OutlineCard project={item} />
                        })
                    }
                </Row>
            </Container>
        </Col>

    );
}