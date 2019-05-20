import React, { Component } from "react";
import "./style.css";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     zipcode: "",
  
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
    const res = await axios(`${url}${inputZipcode},us&units=imperial&APPID=${api_key}`);
    //https://openweathermap.desk.com/customer/en/portal/articles/1996493-switching-between-temperature-units
    console.log(res.data);
    this.setState({
      city: res.data.name,
      currentTemp: res.data.main.temp,
      description: res.data.weather[0].description,
      minTemp: res.data.main.temp_min,
      maxTemp: res.data.main.temp_max,
      sunrise: res.data.sys.sunrise,
      sunset: res.data.sys.sunset
//
  })
  }
//help from Sejla Ali code//
  render() {
//https://openweathermap.org/current
// URL listed for getting zipcode//
//help from Andy Jeong code//

    
    return (
      <div className="App">
       <form onSubmit={this.fetchWeather}>
          <input type="text" name="zipcode" value={this.state.zipcode} placeholder="zipcode" id="zipcode" onChange={this.handleInputChange}/>
  	      <input type="submit" value="Get Weather" id="getTemp"/>
          <h1>{this.state.city}</h1>
          <h2>{this.state.currentTemp}</h2>
          <h3>{this.state.description}</h3>
          <h2>Min Temp: {this.state.minTemp}</h2>
          <h2>Max Temp: {this.state.maxTemp}</h2>
          <h3>Sunrise: {this.state.sunrise}</h3>
          <h3>Sunset: {this.state.sunset}</h3>
        </form>
      </div>
    )
  }
}
export default App; 

//with help from Linda Chin's code//
