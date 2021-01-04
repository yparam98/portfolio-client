import axios from 'axios';
import React, { useEffect, useState } from 'react';

import "../../assets/css/portfolio_components/Skills.css";

function Skills(props) {
    const [skills, setSkills] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        async function getData() {
            axios.get(
                "https://yathavanparamesh.ca/api/expertise/getSkillsByCategory",
                {
                    params: {
                        id: props.category
                    }
                }
            ).then((response) => {
                for (let instance of response.data) {
                    setSkills(skills => [...skills, instance]);
                }
                setDataLoaded(true);
            }).catch((err) => {
                throw err;
            });
        }

        getData();
    }, []);

    return (
        <div>
            {
                dataLoaded ? (
                    <ul className="skill-list">
                        {
                            skills.map((val, ind) => {
                                return <li>{val.name}</li>
                            })
                        }
                    </ul>
                ) : <p>Data Loading...</p>
            }
        </div>
    );
};

export default function SkillDisplay() {
    const [skillsCategory, setSkillsCat] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        async function getData() {
            axios.get(
                "https://yathavanparamesh.ca/api/expertise/getSkillCategories",
            ).then((response) => {
                for (let instance of response.data) {
                    setSkillsCat(skillsCategory => [...skillsCategory, instance]);
                }
                setDataLoaded(true);
            }).catch((err) => {
                throw err;
            });
        }

        getData();
    }, []);


    return (
        <div>
            {
                dataLoaded ? (
                    <div className="skill-list">
                        <p><u>Skills</u></p>
                        {
                            skillsCategory.map((val, ind) => {
                                return (
                                    <div>
                                        <p>{val.name}</p>
                                        <Skills category={val.cat_id} />
                                    </div>
                                );
                            })
                        }
                    </div>
                ) : <p>Data Loading...</p>
            }
        </div>
    );
};

