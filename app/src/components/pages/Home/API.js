import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { toggleModal } from "../../../actions";
import "./style/style.css";

import trail1 from './assets/trail1.jpg'
import trail2 from './assets/trail2.jpg'
import trail3 from './assets/trail3.jpg'
import trail4 from './assets/trail4.jpg'
import trail5 from './assets/trail5.jpg'
import trail6 from './assets/trail6.jpg'
import trail7 from './assets/trail7.jpg'
import trail8 from './assets/trail8.jpg'
import trail9 from './assets/trail9.jpg'
import trail10 from './assets/trail10.jpg'


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
      location: [],
      address: []
    };
  };

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        location: [position.coords.latitude, position.coords.longitude]
      });
      this.getHikes()
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  };

  getHikes() {
    let location = `lat=${this.state.location[0]}&lon=${this.state.location[1]}`;

    fetch(
      "https://www.hikingproject.com/data/get-trails?" + location + "&maxDistance=10&key=200394657-1ebddf3d823768d96c230dd00cd31c30"
    )
      .then(res => res.json())
      .then(data => {
        for (let i = 0; i < data.trails.length; i++) {
          // console.log(data.data.trails[i].name)
          let coords = [data.trails[i].latitude, data.trails[i].longitude]
          // console.log(coords);
          this.getAddress(coords);
        }
        this.setState({
          trails: data.trails
        });
      });
  }

  handleSaveHike = trail => {
    const { id } = trail;
    axios
      .put("/v1/saveHike/", {
        id
      })
      .then(res => {
        // console.log(res.data);
      });
  };
  handleSubmit = event => {
    event.preventDefault();
    fetch (
        `https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=${this.state.zip}&key=zlysdycvm08e9fnk`,
        {
          headers: { Accept: "application/json" }
        }
      )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          location: [data.output[0].latitude, data.output[0].longitude]
        });
        this.getHikes();
      })
  };

  getAddress(coords) {
    let location = `${coords[0]},${coords[1]}`
    this.setState({
      address:[]
    })

    fetch ("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + location + "&key=AIzaSyD7XeO6If1j_8pp2FQeG7bgd6EUp-92ER0")
      .then( res => res.json())
      .then((data) => {
        // console.log(data.results[0].formatted_address)
        this.setState({
          address: [...this.state.address, data.results[0].formatted_address]
        })
      });
  };

<<<<<<< HEAD
    checkImg = (trail) => {
        var altImg = [trail1, trail2, trail3, trail4, trail5, trail6, trail7, trail8, trail9, trail10];
        var img = altImg[Math.floor(Math.random() * altImg.length)];
        return trail.imgSqSmall ? trail.imgSqSmall : img;
    };

    render() {
        return (
            <div className="App">
                <div>
                    <input id="zipcode" className="input" value={this.state.zip} type="text" name="zip" onChange={this.handleInputChange} placeholder="Enter Zip Code" />
                    <button className="button" onClick={this.handleSubmit} >Submit</button>
                </div>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th><span>Trail Name</span></th>
                            <th onClick={this.props.DifficultyModal}><abbr title="Select for Difficulty Legend"> <span className="is-white">Difficulty</span></abbr></th>
                            <th><span>Length (miles)</span></th>
                            <th><span>Location </span></th>
                            <th><span>Image</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trails.map(trail => {
                            return (
                                <tr>
                                    <td>
                                        <Link to={`/${trail.id}`}> <h1>{trail.name}</h1></Link>
                                        <a target="_blank" rel="noopener noreferrer" href={"https://www.hikingproject.com/trail/" + trail.id}>
                                            <br />
                                            <button className="button is-rounded is-dark is-small">Additional Information</button></a>
                                    </td>
                                    <td >{trail.difficulty}</td>
                                    <td>{trail.length}</td>
                                    <td>{trail.latitude}, {trail.longitude}</td>
                                    <td><img src={this.checkImg(trail)} alt="" className="alt-img" /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    };
=======
  render() {
    return (
      <div className="App">
      <section className="level">
      <div className="title level-left">Find a Trail!</div>
        <div id="zip" className="level-right">
          <input id="zipcode" className="input" value={this.state.zip} type="text" name="zip" onChange={this.handleInputChange} placeholder="Enter Zip Code" />
          <button className="button is-info" onClick={this.handleSubmit} >Submit</button>
        </div>
        </section>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>
                <span title="save">Save Hike</span>
              </th>
              <th><span>Trail Name</span></th>
              <th onClick={this.props.DifficultyModal}><abbr title="Select for Difficulty Legend"> <span className="is-white">Difficulty</span></abbr></th>
              <th><span>Length (miles)</span></th>
              <th><span>Location </span></th>
              <th><span>Image</span></th>
            </tr>
          </thead>
          <tbody>
            {this.state.trails.map((trail, i) => {
              return (
                <tr>
                  <td>
                    <button
                      onClick={() => this.handleSaveHike(trail)}
                      className="button is-info"
                    >
                      {" "}
                      Save
                    </button>
                  </td>
                  <td>
                    <Link to={`/${trail.id}`}> <h1>{trail.name}</h1></Link>
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.hikingproject.com/trail/" + trail.id}>
                      <br />
                      <button className="button is-rounded is-dark is-small">Additional Information</button></a>
                  </td>
                  <td >{trail.difficulty}</td>
                  <td>{trail.length}</td>
                  <td>{this.state.address[i]}</td>
                  <td><img src={trail.imgSqSmall} alt="" /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  };
>>>>>>> 3856b5d17bc55bde0d1ca4309aa9f73a0d528eb4
};

function mapDispatchToProps(dispatch) {
  return {
    DifficultyModal() {
      console.log(toggleModal("DifficultyModal"));
      dispatch(toggleModal("DifficultyModal"));
    }
  };
}

<<<<<<< HEAD
export default connect(null, mapDispatchToProps)(API);
=======
export default connect(
  null,
  mapDispatchToProps
)(API);
>>>>>>> 3856b5d17bc55bde0d1ca4309aa9f73a0d528eb4
