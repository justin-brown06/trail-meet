import React, { Component } from "react";
import axios from "axios";


class API extends Component {
    constructor() {
        super();
        this.state = {
            trails: [],
            lat: "",
            lon: "",
            zip: "",
            location: [],
        };
    };

    //
    componentDidMount() {

        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                location:[position.coords.latitude, position.coords.longitude]
            });

           this.getHikes()
        });
    };

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    getHikes() {
               
        let currentLocation = "lat=" + this.state.location[0] +
        "&lon=" + this.state.location[1];
        axios.get('https://www.hikingproject.com/data/get-trails?' + currentLocation + '&maxDistance=10&key=200394657-1ebddf3d823768d96c230dd00cd31c30')
        .then((data) => {
            console.log(data);
            for (let i = 0; i < data.data.trails.length; i++) {
                // console.log(data.data.trails[i].name)
            };
            this.setState({
                trails: data.data.trails
            });
        });
            
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        axios.get(`https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=${this.state.zip}&key=zlysdycvm08e9fnk`)
        .then(res => {
            this.setState({location: [res.data.output[0].latitude, res.data.output[0].longitude]})

            this.getHikes(); 
        })
    }

    render() {
        return (
            <div className="App">
                <div>
                    <input id="zipcode" className="input" value={this.state.zip} type="text" name="zip" onChange={this.handleInputChange} placeholder="Enter Zip Code" />
                    <a className="button" onClick={this.handleSubmit} >Submit</a>
                </div>
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
                                    <td> <a target="_blank" rel="noopener noreferrer" href={"https://www.hikingproject.com/trail/" + trail.id}> {trail.name} </a></td>
                                    <td >{trail.difficulty}</td>
                                    <td>{trail.length}</td>
                                    <td>{trail.latitude}, {trail.longitude}</td>
                                    <td><img src={trail.imgSqSmall} /></td>
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