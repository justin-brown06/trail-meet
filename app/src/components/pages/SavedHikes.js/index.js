import React from "react";


function SavedHikes(props){
  return(
    <div>
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Trail Meet!
              </h1>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-12 is-vertical is-parent">
                <div className="tile is-child box">
                  <h1 className="title is-4">Saved Hikes</h1>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default SavedHikes;
