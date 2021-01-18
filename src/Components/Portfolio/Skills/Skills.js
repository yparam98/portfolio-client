import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import moment from 'moment';
// import * as Recharts from "recharts/umd/Recharts";
import { BarChart, Tooltip, XAxis, YAxis, Bar } from "recharts/umd/Recharts";

import "../../../assets/css/portfolio_components/Skills.css";
import { Col } from 'react-bootstrap';

export default function Skills() {
    const [skills, setSkills] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(async () => {
        const result = await axios("/api/expertise/getNeededSkills");

        result.data.forEach((instance) => {
            instance.learned = (moment().year() - instance.learned);
        });
        setSkills(result.data);
        setDataLoaded(true);
    }, []);

    return (
        <div>
            {
                dataLoaded ? (
                    <Col md={12} style={{ backgroundColor: 'white' }}>
                        <BarChart height={document.body.clientHeight} width={document.body.clientWidth - 20} data={skills} layout="vertical">
                            <defs>
                                <linearGradient id="green_fade" x1="1" y1="0" x2="0" y2="0">
                                    <stop offset="0%" stopColor="#2da6e3" stopOpacity={0.8} />
                                    <stop offset="100%" stopColor="#2da6e3" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis type="number" />
                            <YAxis width={200} type="category" dataKey="name" />
                            <Tooltip formatter={(v, n, p) => { return v + " years"; }} />
                            <Bar dataKey="learned" fillOpacity={0.9} fill="url(#green_fade)" barSize={25} />
                        </BarChart>
                    </Col>
                ) : <p>Data Loading...</p>
            }
        </div>
    );
};
