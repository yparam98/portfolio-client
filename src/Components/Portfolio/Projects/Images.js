import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

export default function ProjectImages(props) {
    const [projectImageList, setProjectImageList] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(async () => {
        axios.get("/api/experience/getProjectImages", {
            params: { id: props.id }
        }).then((response) => {
            setProjectImageList(response.data);
            setDataLoaded(true)
        }).catch((err) => {
            console.info(err);
        });
    }, []);

    return dataLoaded ? (
        <Carousel>
            {
                projectImageList.map((item, index) => {
                    return <Carousel.Item><img className="d-block w-100" src={"/static/images/project/" + props.id + "/" + item} /></Carousel.Item>
                })
            }
        </Carousel>
    ) : <p>Loading...</p>;
}