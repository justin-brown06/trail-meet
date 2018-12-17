import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { toggleModal } from "../../../actions";
import "./style/style.css"

import { Link } from "react-router-dom";
// import Geocode from "react-geocode";

class API extends Component {
    constructor() {
        super();
        this.state = {
            trails: [],
            lat: "",
            lon: "",
        };
    };

    componentDidMount() {

        navigator.geolocation.getCurrentPosition((position) => {
            let location = "lat=" + position.coords.latitude +
                "&lon=" + position.coords.longitude;

            axios.get('https://www.hikingproject.com/data/get-trails?' + location + '&maxDistance=10&key=200394657-1ebddf3d823768d96c230dd00cd31c30')
                .then((data) => {
                    console.log(data);
                    for (let i = 0; i < data.data.trails.length; i++) {
                        // console.log(data.data.trails[i].name)
                    };
                    this.setState({
                        trails: data.data.trails
                    });
                });
            //   axios.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyD7XeO6If1j_8pp2FQeG7bgd6EUp-92ER0&callback=initMap") .then((geocoder, map, infowindow) => {
            //         const lat = trail.latitude;
            //         const lng = trail.longitude;
            //         let latlngStr = lat + ", " + lng;
            //         let latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
            //         geocoder.geocode({'location': latlng}, function(results, status){
            //             if(status === "OK"){
            //                 if(results[0]){
            //                     map.setZoom(11);
            //                     let marker = new google.maps.Marker({
            //                         position: latlng,
            //                         map: map
            //                     })
            //                     infowindow.setContent(result[0].formatted_address);
            //                 }
            //             }
            //         })
            //   })  
        });
    };

    render() {
        return (
            <div className="App">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th><abbr title="Trail">Trail Name</abbr></th>
                            <th onClick={this.props.DifficultyModal}><abbr title="Difficulty"> <a className="is-white">Difficulty</a></abbr></th>
                            <th><abbr title="Length">Length (miles)</abbr></th>
                            <th><abbr title="Location">Location </abbr></th>
                            <th><abbr title="image">Image</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trails.map(trail => {
                            return (
                                <tr>
                                    <td>
                                        <Link to={`/${trail.id}`}> {trail.name}</Link>
                                        <a target="_blank" rel="noopener noreferrer" href={"https://www.hikingproject.com/trail/" + trail.id}> {trail.name} </a>
                                    </td>
                                    <td >{trail.difficulty}</td>
                                    <td>{trail.length}</td>
                                    <td>{trail.latitude}, {trail.longitude}</td>
                                    <td><img src={trail.imgSqSmall} alt=""/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    };
};

function mapDispatchToProps(dispatch) {
    return {
        DifficultyModal() {
            console.log(toggleModal("DifficultyModal"))
            dispatch(toggleModal("DifficultyModal"));
        }
    }
}

export default connect(null, mapDispatchToProps)(API);
