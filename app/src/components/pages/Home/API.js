import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
<<<<<<< HEAD
import Axios from "axios";
=======
import { toggleModal } from "../../../actions";
import "./style/style.css"

import { Link } from "react-router-dom";
>>>>>>> 7c9b3b45b2a2c3688e2d32b84b5bda04f9a49e0a
// import Geocode from "react-geocode";

class API extends Component {
  constructor() {
    super();
    this.state = {
      trails: [],
      lat: "",
      lon: ""
    };
  }

<<<<<<< HEAD
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let location =
        "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
      axios
        .get(
          "https://www.hikingproject.com/data/get-trails?" +
            location +
            "&maxDistance=10&key=200394657-1ebddf3d823768d96c230dd00cd31c30"
        )
        .then(data => {
          console.log(data);
          for (let i = 0; i < data.data.trails.length; i++) {}
          this.setState({
            trails: data.data.trails
          });
=======
    componentDidMount() {

        navigator.geolocation.getCurrentPosition((position) => {
            let location = "lat=" + position.coords.latitude +
                "&lon=" + position.coords.longitude;

            axios.get('https://www.hikingproject.com/data/get-trails?' + location + '&maxDistance=10&key=200394657-1ebddf3d823768d96c230dd00cd31c30')
                .then((data) => {
                    console.log(data);
                    for (let i = 0; i < data.data.trails.length; i++) {
                        // console.log(data.data.trails[i].name)

                    };
                    this.setState({
                        trails: data.data.trails
                    });
                });
>>>>>>> 7c9b3b45b2a2c3688e2d32b84b5bda04f9a49e0a
        });
    });
  }

<<<<<<< HEAD
  handleSaveHike = trail => {
    const { id } = trail;
    Axios.put("/v1/saveHike/", {
      id
    }).then(res => {
      console.log(res.data);
    });
  };

  render() {
    return (
      <div className="App">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr title="save">Save Hike</abbr>
              </th>
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
            {this.state.trails.map(trail => {
              return (
                <tr>
                  <td>
                    <a
                      onClick={() => this.handleSaveHike(trail)}
                      className="button is-info"
                    >
                      Save
                    </a>
                  </td>
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
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default API;
=======
    render() {
        return (
            <div className="App">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th><abbr title="Trail">Trail Name</abbr></th>
                            <th onClick={this.props.DifficultyModal}><abbr title="Difficulty"> <a className="is-white">Difficulty</a></abbr></th>
                            <th><abbr title="Length">Length (miles)</abbr></th>
                            <th><abbr title="Location">Location </abbr></th>
                            <th><abbr title="image">Image</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trails.map(trail => {
                            return (
                                <tr>
                                    <td>
                                        <Link to={`/${trail.id}`}> {trail.name}</Link>
                                        <a target="_blank" rel="noopener noreferrer" href={"https://www.hikingproject.com/trail/" + trail.id}> <button className="button is-rounded is-dark is-small">Additional Information</button></a>
                                    </td>
                                    <td >{trail.difficulty}</td>
                                    <td>{trail.length}</td>
                                    <td>{trail.latitude}, {trail.longitude}</td>
                                    <td><img src={trail.imgSqSmall} alt=""/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    };
};

function mapDispatchToProps(dispatch) {
    return {
        DifficultyModal() {
            console.log(toggleModal("DifficultyModal"))
            dispatch(toggleModal("DifficultyModal"));
        }
    }
}

export default connect(null, mapDispatchToProps)(API);
>>>>>>> 7c9b3b45b2a2c3688e2d32b84b5bda04f9a49e0a
