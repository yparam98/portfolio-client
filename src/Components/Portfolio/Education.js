import React, { Component } from 'react';
import axios from 'axios';

import '../../assets/css/portfolio_components/Education.css'
import School from './SchoolPanel';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            school: []
        };
    }

    getSchools = async () => {
        await axios.get("https://yathavanparamesh.ca/api/education/schools")
            .then((response) => {
                for (let instance of response.data) {
                    this.state.school.push(instance);
                }
                this.setState({
                    dataLoaded: true
                });
            })
            .catch((err) => {
                console.log("Error: " + err);
            });
    }

    initializeData = async () => {
        this.getSchools();
        // this.getCourses();

    }

    render() {
        if (!this.state.dataLoaded) {
            this.initializeData();
        }

        return (
            <div>
                {
                    this.state.dataLoaded ? (
                        <School school={this.state.school[0]} />
                    ) : <p>Loading...</p>
                }
            </div >
        )
    }
}

export default Education;