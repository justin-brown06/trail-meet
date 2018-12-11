import React from "react";
import API from './API'
import Table from "../../common/Bulma/Table"


function Home(props){
  return(
    <div>
      Welcome to the Home Page!
      <API />
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Trail Meet's Home Page!
              </h1>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-12 is-vertical is-parent">
                <div className="tile is-child box">
                  <h1 className="title is-4"> All near by hikes.</h1>
                  <Table />
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

