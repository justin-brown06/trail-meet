import React from "react";
import API from './API'
import "./style/style.css"
import ZipCode from "../../Zipcode";


function Home(props) {
  return (
    <div>
      <div className="App">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <br />
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
                    <ZipCode />
                    <h1 className="title is-4 "> All near by hikes.</h1>
                    <API />
                </div>
                </div>
              </div>
            </div>
            </section>
        </div>
      </div >
      )
    
  }
  
  export default Home;
  
