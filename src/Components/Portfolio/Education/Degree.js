import React, { Component } from 'react';
import '../../../assets/css/portfolio_components/Education.css'
import axios from 'axios';
import Stripe from '../../utils/Stripe';
import { Col } from 'react-bootstrap';

class Degree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: {},
            courses: [],
            api_url: "https://yathavanparamesh.ca",
            dataLoaded: false,
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        await this.getSchool();
    }

    getSchool = async () => {
        await axios.get(
            "/api/education/getSchoolByID",
            {
                params: {
                    id: this.props.degree.school_id
                }
            }
        ).then((response) => {
            this.setState({
                school: response.data[0],
                dataLoaded: true
            });
        }).catch((err) => {
            console.log("Error: " + err);
        });
    };

    render() {
        return this.state.dataLoaded ? (
            <div className="degree_panel">
                <Col md={3} className="animateEntrySlideLR">
                    <img id='school_logo' src={this.state.api_url + "/static/" + this.state.school.logo_path} />
                    <div id="degree_tag" style={{ color: this.state.school.colour }}>
                        <p><strong>{this.props.degree.type}</strong> in {this.props.degree.name}</p>
                    </div>
                </Col>
                <Col md={5} className="animateEntrySlideRL">
                    {this.props.courses}
                </Col>
            </div >
        ) : <p>Data Loaded...</p>
    }
}

export default Degree;