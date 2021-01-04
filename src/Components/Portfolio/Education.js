import React, { Component } from 'react';
import axios from 'axios';

import '../../assets/css/portfolio_components/Education.css'
import DegreePanel from './DegreePanel';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            degree: []
        };
    }

    getDegrees = async () => {
        await axios.get("https://yathavanparamesh.ca/api/education/getDegrees")
            .then((response) => {
                for (let instance of response.data) {
                    this.state.degree.push(instance);
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
        this.getDegrees();
    }

    render() {
        if (!this.state.dataLoaded) {
            this.initializeData();
        }

        return (
            <div>
                {
                    this.state.dataLoaded ? (
                        <div className="degree_container">
                            {
                                this.state.degree.map((val, ind) => {
                                    return <DegreePanel degree={val} />
                                })
                            }
                        </div>
                    ) : <p>Loading...</p>
                }
            </div >
        )
    }
}

export default Education;