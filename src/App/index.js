import React, { Component } from "react";
import "./style.css";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     zipcode: ""
    }

    this.fetchWeather = this.fetchWeather.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  async fetchWeather(event) {
    event.preventDefault();
    const inputZipcode = this.state.zipcode;
    const url = "http://api.openweathermap.org/data/2.5/weather?zip=";
    const api_key = "0073d067c1ec39cd7867800a9600025e";
    const res = await axios(`${url}${inputZipcode},us&APPID=${api_key}`);
    console.log(res.data);
  }

  render() {
//https://openweathermap.org/current
// URL listed for getting zipcode//
//help from Andy Jeong code//

    
    return (
      <div className="App">
       <form onSubmit={this.fetchWeather}>
          <input type="text" name="zipcode" value={this.state.zipcode} placeholder="zipcode" id="zipcode" onChange={this.handleInputChange}/>
  	      <input type="submit" value="Get Weather" id="getTemp"/>
        </form>
      </div>
    )
  }
}
export default App; 

//with help from Linda Chin's code//
