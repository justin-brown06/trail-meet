import React, { Component } from "react";
import axios from "axios";

class API extends Component {
    constructor() {
        super();
        this.state = {
            trailNames: [],
        };
    };


    componentDidMount() {
        axios.get('https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200394657-1ebddf3d823768d96c230dd00cd31c30')
            .then((data) => {
                console.log(data);
                for (let i = 0; i < data.data.trails.length; i++) {
                    console.log(data.data.trails[i].name)
                };

                let trailNames = data.data.trails.map((trail) => {
                    return (
                        <div key={trail.name}>
                            <img src={trail.imgSmall} />
                        </div>
                    )
                });
                this.setState({ trailNames: trailNames });
                console.log("state", this.state.trailNames);
            });
    };

    render() {
        return (
            <div>
                {this.state.trailNames}
            </div>
        )
    };
};

export default API;