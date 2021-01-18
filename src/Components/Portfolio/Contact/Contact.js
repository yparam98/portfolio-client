import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function sendMessage(data) {
    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
    }).then((res) => {
        alert("Message sent!");
    }).catch((err) => {
        alert(err);
    });
}

export default function Contact() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: yup.object({
            name: yup.string().required("Don't forget your name!"),
            email: yup.string().email('Invalid email address').required("Don't forget your email!"),
            message: yup.string(),
        }),
        onSubmit: values => {
            sendMessage(JSON.stringify(values));
        },
    });


    return (
        <Container fluid style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', padding: 10 }}>
            <Col md={9}>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={formik.values.name}
                            placeholder="Enter your name"
                            onChange={formik.handleChange}
                            isValid={formik.touched.name && !formik.errors.name}
                            isInvalid={!!formik.errors.name}
                        />
                        <Form.Control.Feedback type="valid">
                            Valid!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                            type="text"
                            value={formik.values.email}
                            placeholder="Enter your email"
                            onChange={formik.handleChange}
                            isValid={formik.touched.email && !formik.errors.email}
                            isInvalid={!!formik.errors.email}

                        />
                        <Form.Control.Feedback type="valid">
                            Valid!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="message">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={formik.values.message}
                            rows={5}
                            onChange={formik.handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Container>
    );
};