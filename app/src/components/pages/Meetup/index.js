import React from "react";
import Events from "./Events";
import Comments from "./Comments";

class Meetup extends React.Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Events />
                    <Comments />
                </div>
            </div>
        )
    }
}

export default Meetup;