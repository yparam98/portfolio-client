import React, { Component } from 'react';
import '../../../assets/css/portfolio_components/Education.css'
import axios from 'axios';
import Stripe from '../../utils/Stripe';

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
            <div className="degree_panel">
                <div className="col-md-3 animateEntrySlideLR">
                    <img id='school_logo' src={this.state.api_url + "/static/" + this.state.school.logo_path} />
                    <div id="degree_tag" style={{ color: this.state.school.colour }}>
                        <p><strong>{this.props.degree.type}</strong> in {this.props.degree.name}</p>
                    </div>
                </div>
                <div className="col-md-5 animateEntrySlideRL">
                    {this.props.courses}
                </div>
                {/* <Stripe css_tag={"school_logo"} image_path={this.state.api_url + "/static/" + this.state.school.logo_path} school={this.state.school} /> */}
                {/* <hr /> */}
                {/* <div>
                    <div className="deets">
                        <p id="degree_title">{this.props.degree.type} in {this.props.degree.name} ({this.props.degree.duration})</p>
                        <p><a href={"https://www.google.com/maps/place/" + this.state.school.address} style={{ color: 'inherit' }}>{this.state.school.address}</a></p>
                        <p><a href={"tel:" + this.state.school.phone_num} style={{ color: 'inherit' }}>{this.state.school.phone_num}</a></p>
                    </div>
                    
                </div> */}
            </div >
        ) : <p>Data Loaded...</p>
    }
}

export default Degree;