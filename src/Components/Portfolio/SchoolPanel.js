import React, { Component } from 'react';

import seneca_logo from '../../assets/logos/seneca.png'
import seneca_logo_white from '../../assets/logos/seneca_white.png'

import '../../assets/css/portfolio_components/Education.css'
import axios from 'axios';

class School extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount () {
        this.getCourses();
    }

    getCourses = async () => {
        await axios.get(
            "https://yathavanparamesh.ca/api/education/courses",
            {
                params: {
                    school: "Seneca"
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
            <div>
                <div class="schoolpanel">
                    <img src={seneca_logo_white} height='25%' width='25%' />
                    <div>
                        <p style={{ color: 'white' }}>{this.props.school.address}</p>
                        <a style={{ color: 'white' }} href={"tel:" + this.props.school.phone_num}>{this.props.school.phone_num}</a>
                        <ol>
                            {
                                this.state.dataLoaded ? (
                                    this.state.courses.map((val, ind) => {
                                        if (val.display == true) return <li>{val.description}</li>
                                    })
                                ) : <p>Loading...</p>
                            }
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default School;