import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SavedHikes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      trails: [],
      address: []
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

  handleRemoveHike = trail => {
    console.log(trail);
    const { id } = trail;
    Axios.delete("/v1/removeHike/" + id).then(res => {
      console.log(id);
    });
  };

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
                          <abbr title="remove">Remove Hike</abbr>
                        </th>
                        <th>
                          <abbr title="Trail">Trail Name</abbr>
                        </th>
                        <th onClick={this.props.DifficultyModal}>
                          <abbr title="Select for Difficulty Legend">
                            {" "}
                            <span className="is-white">Difficulty</span>
                          </abbr>
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
                        this.state.trails.map((trail, i) => (
                          <tr key={trail.name}>
                            <td>
                              <button
                                onClick={() => this.handleRemoveHike(trail)}
                                className="button is-info"
                              >
                                {" "}
                                Remove
                              </button>
                            </td>
                            <td>
                              <Link to={`/${trail.id}`}>
                                {" "}
                                <h1>{trail.name}</h1>
                              </Link>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={
                                  "https://www.hikingproject.com/trail/" +
                                  trail.id
                                }
                              >
                                <br />
                                <button className="button is-rounded is-dark is-small">
                                  Additional Information
                                </button>
                              </a>
                            </td>
                            <td>{trail.difficulty}</td>
                            <td>{trail.length}</td>
                            <td>
                              {this.state.address[i]}
                            </td>
                            <td>
                              <img src={trail.imgSqSmall} alt="" />
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
