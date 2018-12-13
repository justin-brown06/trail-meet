import React from "react";
// import Zipcode from "../../Zipcode";

import Geocode from "react-geocode"



function search(zip) {
    Geocode.fromAddress(zip).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
        },
        error => {
            console.error(error);
        }
    );
}

class location extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input
                    handleChange={props.handleChange}
                    class="input"
                    type="text"
                    name={props.name}
                    placeholder="Enter Zipcode" />
                <a class="button"
                    onClick={this.search()}
                >Submit</a>
            </div>
        )
    }
};

export default location;