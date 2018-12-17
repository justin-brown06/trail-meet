import React from "react";
<<<<<<< HEAD

class Meetup extends React.Component {
    render(){
        return (
            <div>
                <div className="App">
                    <section className="hero">
                        <h1>Events to go here</h1>
                    </section>
    
                    <br />
    
                    <section>
                        <div className="container">
                            <h1 className="title is-4">Comments and replies to go here</h1>
                            <p>{this.props.match.params.id}</p>
                        </div>
                    </section>
    
                </div>
=======
import Events from "./Events";
import Comments from "./Comments";

class Meetup extends React.Component {
    render() {
        return (
            <div>
                <Events />
                <Comments />
>>>>>>> eb45d617047619d22abadeafc62b1d9a91c392a2
            </div>
        )
    }
}

export default Meetup;