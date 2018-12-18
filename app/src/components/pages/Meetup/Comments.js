import React, { Component } from "react";

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            hello: "World"
        };
    };

    render() {
        return (
            <div>
                <div className="App">
                    <section className="hero is-medium">
                        <div className="hero-body">
                            <div className="container">
                                <br />
                                <h1 className="title has-text-white">Trail Meet's Home Page!</h1>
                            </div>
                        </div>
                    </section>
                </div>
                <br />
                <h1>{this.state.hello}</h1>
            </div>
        );
    };
};

export default Comments;