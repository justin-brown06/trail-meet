import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { toggleModal } from "../../../actions";
import "./style/style.css";

import { Link } from "react-router-dom";
// import Geocode from "react-geocode";

class API extends Component {
  constructor() {
    super();
    this.state = {
      trails: [],
      lat: "",
      lon: "",
      zip: "",
      location: []
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let location =
        "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;

      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          location: [position.coords.latitude, position.coords.longitude]
        });
        this.getHikes();
      });
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getHikes() {
    let location =
      "lat=" + this.state.location[0] + "&lon=" + this.state.location[1];

    fetch(
      "https://www.hikingproject.com/data/get-trails?" +
        location +
        "&maxDistance=10&key=200394657-1ebddf3d823768d96c230dd00cd31c30"
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        for (let i = 0; i < data.trails.length; i++) {
          // console.log(data.data.trails[i].name)
        }
        this.setState({
          trails: data.trails
        });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios
      .get(
        `https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=${
          this.state.zip
        }&key=zlysdycvm08e9fnk`,
        {
          headers: { Accept: "application/json" }
        }
      )
      .then(res => {
        this.setState({
          location: [res.data.output[0].latitude, res.data.output[0].longitude]
        });
        this.getHikes();
      });
  };

  handleSaveHike = trail => {
    const { id } = trail;
    axios
      .put("/v1/saveHike/", {
        id
      })
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="App">
        <div>
          <input
            id="zipcode"
            className="input"
            value={this.state.zip}
            type="text"
            name="zip"
            onChange={this.handleInputChange}
            placeholder="Enter Zip Code"
          />
          <button className="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr title="save">Save Hike</abbr>
              </th>
              <th>
                <span>Trail Name</span>
              </th>
              <th onClick={this.props.DifficultyModal}>
                <abbr title="Select for Difficulty Legend">
                  {" "}
                  <span className="is-white">Difficulty</span>
                </abbr>
              </th>
              <th>
                <span>Length (miles)</span>
              </th>
              <th>
                <span>Location </span>
              </th>
              <th>
                <span>Image</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.trails.map(trail => {
              return (
                <tr>
                  <td>
                    <a
                      onClick={() => this.handleSaveHike(trail)}
                      className="button is-info"
                    >
                      {" "}
                      Save
                    </a>
                  </td>
                  <td>
                    <Link to={`/${trail.id}`}>
                      {" "}
                      <h1>{trail.name}</h1>
                    </Link>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"https://www.hikingproject.com/trail/" + trail.id}
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
                    {trail.latitude}, {trail.longitude}
                  </td>
                  <td>
                    <img src={trail.imgSqSmall} alt="" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    DifficultyModal() {
      console.log(toggleModal("DifficultyModal"));
      dispatch(toggleModal("DifficultyModal"));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(API);
