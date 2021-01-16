import React, { Component } from 'react';
import axios from 'axios';

import '../../assets/css/portfolio_components/Education.css'
import Degree from './Degree';
import { default as Courses } from './Courses';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            degree: [],
        };
    }

    getDegrees = async () => {
        await axios.get("https://yathavanparamesh.ca/api/education/getDegrees", {


        }).then((response) => {
            for (let instance of response.data) {
                this.state.degree.push(instance);
            }
            this.setState({
                dataLoaded: true
            });
        }).catch((err) => {
            console.info("Error: " + err);
        });
    }

    initializeData = async () => {
        this.getDegrees();
    }

    render() {
        if (!this.state.dataLoaded) {
            this.initializeData();
        }

        return (
            <div style={{backgroundColor: 'white'}}>
                {/* <h1 id="education_heading">Education</h1> */}
                {
                    this.state.dataLoaded ? (
                        <div className="degree_container">
                            { this.state.degree.map((val, ind) => {
                                return <Degree degree={val} courses={<Courses degree={val} />} />
                            })}
                        </div>
                    ) : <p></p>
                }
            </div >
        )
    }
}

export default Education;