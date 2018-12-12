import React from "react";
import API from './API'
import "./style/style.css"

function Home(props) {
  return (
    <div>
      <div className="App">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
            <br/>
              <h1 className="title has-text-white">
                Trail Meet's Home Page!
              </h1>
            </div>
          </div>
        </section>
        <br />
        <section>
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-12 is-vertical is-parent">
                <div className="tile is-child box">
                  <h1 className="title is-4 "> All near by hikes.</h1>
                  <API />
                </div>
                <div className="tile is-child box">
                  <h1 className="title is-4">Hike you have selected</h1>
                </div>

              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home;

