// import React from "react";
// import axios from "axios";

// //zip code will override current location pull
//  class ZipCode extends React.Component {
//   state = {
//     zip: ""
//   }

//   handleInputChange = event => {
//     const { name, value } = event.target
//     this.setState({
//     [name]: value
//   });
//   }

//   getHikes(){
//     axios.get(`https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=${this.state.zip}&key=zlysdycvm08e9fnk`) 
//     .then(res => 
//       console.log(res.data.output[0].latitude, res.data.output[0].longitude)
//     )
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(event)
//     this.getHikes();
//   }


//   render() {
//     return (
//       <div>
//       <input id="zipcode" className="input" value={this.state.zip} type="text" name="zip" onChange={this.handleInputChange} placeholder="Enter Zip Code" />
//       <a className="button" onClick={this.handleSubmit} >Submit</a>
//       </div>
//     )
//   }
// }

// export default ZipCode;