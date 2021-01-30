import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import SkillPanel from './Skillset';

export default function DetailsPanel(props) {
    const [project, setProject] = useState(null);
    const [projectImageList, setProjectImageList] = useState(null);
    // const [images, setImages] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(async () => {
        axios.get("/api/experience/getProjectDetails", {
            params: { id: props.project.id }
        }).then((response) => {
            setProject(response.data[0]);

            axios.get("/api/experience/getProjectImages", {
                params: { id: props.project.id }
            }).then((response) => {
                setProjectImageList(response.data);
            });

            setDataLoaded(true);
        });
    }, []);

    return dataLoaded ? (
        <Modal show={props.show} onHide={() => { props.close(false) }}>
            <Modal.Header>
                <Modal.Title>{project.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {project.description}
            </Modal.Body>
            <Modal.Footer>
                <SkillPanel id={project.id} />
                <Carousel>
                    {
                        projectImageList.map((item, index) => {
                            return <Carousel.Item><img className="d-block w-100" src={"/static/images/project/" + props.project.id + "/" + item} /></Carousel.Item>
                        })
                    }
                </Carousel>
            </Modal.Footer>
        </Modal>
    ) : <p>Loading...</p>;
}