import React from "react";

function location(props) {
    return (
        <div>
            <input
                handleChange={props.handleChange}
                class="input"
                type="text"
                name={props.name}
                placeholder="Enter Zipcode" />
            <a class="button">Submit</a>
        </div>
    )
};

export default location;