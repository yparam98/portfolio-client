import React, { Component } from 'react';

import seneca_logo from '../../assets/logos/seneca.png'
import seneca_logo_white from '../../assets/logos/seneca_white.png'

import '../../assets/css/portfolio_components/Education.css'
import axios from 'axios';

class School extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            api_url: "https://yathavanparamesh.ca",
        }
    }

    componentDidMount() {
        this.getCourses();
    }

    getCourses = async () => {
        await axios.get(
            this.state.api_url + "/api/education/courses",
            {
                params: {
                    school: this.props.school.name
                }
            }
        ).then((response) => {
            for (let instance of response.data) {
                this.state.courses.push(instance);
            }
            this.setState({
                dataLoaded: true
            });
        })
            .catch((err) => {
                console.log("Error: " + err);
            });
    }



    render() {
        return (
            <div className="schoolpanel" style={{ backgroundColor: this.props.school.colour }}>
                <img src={this.state.api_url + "/static/" + this.props.school.logo_path} height='25%' width='25%' />
                <div>
                    <div className="deets">
                        <p style={{fontSize: '24px'}}>{this.props.school.dates}</p>
                        <p>
                            {this.props.school.address}, <a href={"tel:" + this.props.school.phone_num} style={{ color: 'inherit' }}>{this.props.school.phone_num}</a>
                        </p>
                    </div>
                    <div className="courses">
                        {
                            this.state.dataLoaded ? (
                                this.state.courses.map((val, ind) => {
                                    if (val.display == true) return <p>{val.description}</p>
                                })
                            ) : <p>Loading...</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default School;