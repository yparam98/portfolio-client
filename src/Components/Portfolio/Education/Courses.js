import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "../../../assets/css/portfolio_components/Education.css";

export default function Courses(props) {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [courses, setCourses] = useState([]);

    useEffect(async () => {
        const result = axios("https://yathavanparamesh.ca/api/education/getCoursesByDegree", {
            params: {
                id: props.degree.degree_id
            }
        });

        setCourses((await result).data);
        setDataLoaded(true);
    }, []);

    return dataLoaded ? (
        <div className="courses">
            {
                courses.map((val, ind) => {
                    if (val.display == true) return <p>{val.description}</p>
                })
            }
        </div>
    ) : <p>Loading...</p>;
}