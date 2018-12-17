import React from "react";
import Events from "./Events";
import Comments from "./Comments";

class Meetup extends React.Component {
    render() {
        return (
            <div>
                <Events />
                <Comments />
            </div>
        )
    }
}

export default Meetup;