import React from "react";
import API from "./API";
import "./style/style.css";



function Home(props) {
  return (
    <div>
      <div className="App">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <br />
              <h1 className="title has-text-white">Trail Meet's Home Page!</h1>
            </div>
          </div>
        </section>
      </div>
      <br />
      <section>
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-12 is-vertical is-parent">
              <div className="tile is-child box">
                <API />
              </div>
            </div>
          </div>
        </div >
      </section>
<<<<<<< HEAD
      </div>
      )
    
  }
  
  export default Home;
  
=======
    </div>
  );
}

export default Home;
>>>>>>> 3856b5d17bc55bde0d1ca4309aa9f73a0d528eb4
