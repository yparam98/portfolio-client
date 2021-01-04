import React, { Component } from 'react';
import '../../assets/css/portfolio_components/Education.css'
import axios from 'axios';
import { default as Courses } from './Courses';

class DegreePanel extends Component {
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
        // this.getCourses();
        this.getData();
    }

    getData = async () => {
        await this.getSchool();
    }

    getSchool = async () => {
        await axios.get(
            this.state.api_url + "/api/education/getSchoolByID",
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
            <div className="degree_panel col-md-5" style={{ backgroundColor: this.state.school.colour }}>
                <img id="school_logo" src={this.state.api_url + "/static/" + this.state.school.logo_path} />
                <hr />
                <div>
                    <div className="deets">
                        <p id="degree_title">{this.props.degree.type} in {this.props.degree.name} ({this.props.degree.duration})</p>
                        <p><a href={"https://www.google.com/maps/place/" + this.state.school.address} style={{ color: 'inherit' }}>{this.state.school.address}</a></p>
                        <p><a href={"tel:" + this.state.school.phone_num} style={{ color: 'inherit' }}>{this.state.school.phone_num}</a></p>
                    </div>
                    <Courses degree={this.props.degree} />
                </div>
            </div>
        ) : <p>Data Loaded...</p>
    }
}

export default DegreePanel;