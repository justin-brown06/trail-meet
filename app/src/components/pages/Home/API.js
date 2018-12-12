import React, { Component } from "react";
import axios from "axios";
// import Geocode from "react-geocode";

class API extends Component {
    constructor() {
        super();
        this.state = { 
            img: [],
            trailNames: [],
            lat: "",
            lon: "",
            difficulty: [],
            length: [],
            latitude: [],
            longitude: []
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
                        console.log(data.data.trails[i].name)
                    };
                    
                    let trailNames = data.data.trails.map((trail) => {
                        return (
                            <div key={trail.name}>
                                <p> {trail.name} </p>
                            </div>
                        )
                    });
                    this.setState({ trailNames: trailNames });
                    console.log("state", this.state.trailNames);
                    
                    
                    
                    let difficulty = data.data.trails.map((trail) => {
                        return (
                            <div key={trail.difficulty}>
                                <p> {trail.difficulty} </p>
                            </div>
                        )
                    });
                    this.setState({ difficulty: difficulty });
                    // console.log("state", this.state.difficulty);
                    
                    let length = data.data.trails.map((trail) => {
                        return (
                            <div key={trail.length}>
                                <p> {trail.length} </p>
                            </div>
                        )
                    });
                    this.setState({ length: length });
                    // console.log("state", this.state.difficulty);
                    
                    let latitude = data.data.trails.map((trail) => {
                        return (
                            <div key={trail.latitude}>
                                <p> {trail.latitude} </p>
                            </div>
                        )
                    });
                    this.setState({ latitude: latitude });
                    // console.log("state", this.state.difficulty);
                    
                    let longitude = data.data.trails.map((trail) => {
                        return (
                            <div key={trail.longitude}>
                                <p> {trail.longitude} </p>
                            </div>
                        )
                    });
                    this.setState({ longitude: longitude });
                    // console.log("state", this.state.difficulty);
                   
                    let img = data.data.trails.map((trail) => {
                        return (
                            <div key={trail.imgSqSmall}>
                                <img src={trail.imgSqSmall} />
                            </div>
                        )
                    });
                    this.setState({ img: img });
                    // console.log("state", this.state.difficulty);
                });
            });
        };
        

    render() {
        return (
            <div className="App">

                <table className="table is-fullwidth">
                    <thead className="">
                        <tr>
                            <th><abbr title="Trail">Trail Name</abbr></th>
                            <th><abbr title="Difficulty">Difficulty</abbr></th>
                            <th><abbr title="Length">Length (miles)</abbr></th>
                            <th><abbr title="Location">Location </abbr></th>
                            <th><abbr title="image"></abbr></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{this.state.trailNames[0]}</td>
                            <td>{this.state.difficulty[0]}</td>
                            <td>{this.state.length[0]}</td>
                            <td>{this.state.latitude[0]}, {this.state.longitude[0]}</td>
                            <td>{this.state.img[0]}</td>
                        </tr>
                        <tr>
                            <td>{this.state.trailNames[1]}</td>
                            <td>{this.state.difficulty[1]}</td>
                            <td>{this.state.length[1]}</td>
                            <td>{this.state.latitude[1]}, {this.state.longitude[1]}</td>
                            <td>{this.state.img[1]}</td>
                        </tr>
                        <tr>
                            <td>{this.state.trailNames[2]}</td>
                            <td>{this.state.difficulty[2]}</td>
                            <td>{this.state.length[2]}</td>
                            <td>{this.state.latitude[2]}, {this.state.longitude[2]}</td>
                            <td>{this.state.img[2]}</td>
                        </tr>
                        <tr>
                            <td>{this.state.trailNames[3]}</td>
                            <td>{this.state.difficulty[3]}</td>
                            <td>{this.state.length[3]}</td>
                            <td>{this.state.latitude[3]}, {this.state.longitude[3]}</td>
                            <td>{this.state.img[3]}</td>
                        </tr>
                        <tr>
                            <td>{this.state.trailNames[4]}</td>
                            <td>{this.state.difficulty[4]}</td>
                            <td>{this.state.length[4]}</td>
                            <td>{this.state.latitude[4]}, {this.state.longitude[4]}</td>
                            <td>{this.state.img[4]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
};



export default API;