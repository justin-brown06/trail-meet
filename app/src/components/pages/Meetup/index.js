import React from "react";

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
            </div>
        )
    }
}

export default Meetup;