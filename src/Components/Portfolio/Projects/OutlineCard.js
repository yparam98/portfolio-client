import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import DetailsPanel from './DetailsPanel';

export default function OutlineCard(props) {
    const [show, setShow] = useState(false);

    return (
        <Col lg={3}>
            <Card style={{ margin: '10px' }} onClick={() => setShow(true)}>
                <Card.Body>
                    <Card.Title>{props.project.name}</Card.Title>
                    <Card.Text>{props.project.summary}</Card.Text>
                </Card.Body>
            </Card>
            <DetailsPanel project={props.project} show={show} close={setShow} />
        </Col>
    );
}