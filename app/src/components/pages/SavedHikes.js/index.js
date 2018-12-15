import React, { Component } from "react";
import axios from "axios";

class SavedHikes extends Component {
  constructor() {
    super();
    this.state = {
      SavedTrails: []
    };
  }

  componentDidMount() {
    const instance = axios.create({
      baseURL:
        "https://www.hikingproject.com/data/get-trails-by-id?ids=7001635,7002742,7000108,7002175,7005207&key=200394657-1ebddf3d823768d96c230dd00cd31c30",
      headers: { "Access-Control-Allow-Origin": "*" }
    });

    instance.get().then(data => {
      console.log(data);
      for (let i = 0; i < data.data.SavedTrails.length; i++) {}
      this.setState({
        trails: data.data.SavedTrails
      });
    });
  }

  render() {
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
            {this.state.SavedTrails.map(SavedTrails => {
              return (
                <tr>
                  <td>{SavedTrails.name}</td>
                  <td>{SavedTrails.difficulty}</td>
                  <td>{SavedTrails.length}</td>
                  <td>
                    {SavedTrails.latitude}, {SavedTrails.longitude}
                  </td>
                  <td>
                    <img src={SavedTrails.imgSqSmall} />
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

export default SavedHikes;
