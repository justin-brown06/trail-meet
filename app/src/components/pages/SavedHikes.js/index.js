import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";

class SavedHikes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      trails: []
    };
  }

  componentDidMount() {
    Axios.get("/v1/savedHikes").then(
      result => {
        console.log(result.data);
        this.setState({
          isLoaded: true,
          trails: result.data.trails
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render() {
    const { trails } = this.state;
    console.log(trails);
    return (
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-black">Saved Hikes</h1>
            </div>
          </div>
        </section>

        <br />
        <section>
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-12 is-vertical is-parent">
                <div className="tile is-child box">
                  <table className="table is-fullwidth">
                    <thead>
                      <tr>
                        <th>
                          <abbr title="Trail">Trail Name</abbr>
                        </th>
                        <th>
                          <abbr title="Difficulty">Difficulty</abbr>
                        </th>
                        <th>
                          <abbr title="Length">Length (miles)</abbr>
                        </th>
                        <th>
                          <abbr title="Location">Location </abbr>
                        </th>
                        <th>
                          <abbr title="image">Image</abbr>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.trails !== 0 &&
                        this.state.trails.map(trail => (
                          <tr key={trail.name}>
                            <td>{trail.name}</td>
                            <td>{trail.difficulty}</td>
                            <td>{trail.length}</td>
                            <td>
                              {trail.latitude}, {trail.longitude}
                            </td>
                            <td>
                              <img src={trail.imgSqSmall} />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(SavedHikes);
