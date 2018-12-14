import React, { Component } from "react";
import axios from "axios";


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
                    })
                });
        });
    };

    render() {
        return (
            <div className="App">

                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th><abbr title="Trail">Trail Name</abbr></th>
                            <th><abbr title="Difficulty">Difficulty</abbr></th>
                            <th><abbr title="Length">Length (miles)</abbr></th>
                            <th><abbr title="Location">Location </abbr></th>
                            <th><abbr title="image">Image</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trails.map(trail => {
                            return (
                                <tr>
                                    <td>{trail.name}</td>
                                    <td>{trail.difficulty}</td>
                                    <td>{trail.length}</td>
                                    <td>{trail.latitude}, {trail.longitude}</td>
                                    <td><img src={trail.imgSqSmall}/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    };
};

export default API;