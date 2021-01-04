import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
// import * as Recharts from "recharts/umd/Recharts";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts/umd/Recharts";

import "../../assets/css/portfolio_components/Skills.css";

function Skills(props) {
    const [skills, setSkills] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(async () => {
        const result = await axios("https://yathavanparamesh.ca/api/expertise/getSkillsByCategory", {
            params: { id: props.category }
        });

        result.data.forEach((instance) => {
            instance.learned = (moment().year() - instance.learned);
        });

        // console.info(result.data);
        setSkills(result.data);
        setDataLoaded(true);
    }, []);

    return (
        <div>
            {
                dataLoaded ? (
                    <ResponsiveContainer height={400} width={600}>
                        <RadarChart cy={200} outerRadius={150} width={400} height={200} data={skills}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="name" />
                            <PolarRadiusAxis />
                            <Radar dataKey="learned" stroke="#004d00" fill="#008000" fillOpacity={0.5} />
                        </RadarChart>
                    </ResponsiveContainer>
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
                    <div className="skill-graph-container">
                        {
                            skillsCategory.map((val, ind) => {
                                return (
                                    <div className="skill_panel">
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

