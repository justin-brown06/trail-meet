import React from "react";
import axios from "axios";


 class ZipCode extends React.Component {
  state = {
    zip: []
  }

  componentDidMount() {
    axios.get(`https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=${this.state.zip}&key=zlysdycvm08e9fnk`)
      .then(res => {
        const zip = res.data;
      })
  }

  getHikes(){
    axios.get(`https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=${this.state.zip}&key=zlysdycvm08e9fnk`)
      .then(res => {
        const zip = res.data;
      })
  }

  //1. handleChange - model after sample code
  //2. handle submit - instead of this.getBooks() have it call function #3
  //3. getHikes - make a new function called getHikes that has the same axios call as the component did mount

  handleInputChange(event) {
    const { name, value } = event.target
    this.setState({
    [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    // this.setState({zip: event.target.value});
    this.getHikes();
  }


  render() {
    return (
      <div>
      <input id="zipcode" className="input" type="text" value={this.state.value} placeholder="Enter Zip Code" />
      <a className="button" onClick={this.handleSubmit} >Submit</a>
      </div>
    )
  }
}

export default ZipCode;

