import React, { Component } from "react";
import "./style.css";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
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
    const inputCity = this.state.city;
    const url = "http://api.openweathermap.org/data/2.5/weather?q=";
    const api_key = "0073d067c1ec39cd7867800a9600025e";
    const res = await axios(`${url}${inputCity}&APPID=${api_key}`);
    console.log(res.data);
  }

  render() {



    
    return (
      <div className="App">
       <form onSubmit={this.fetchWeather}>
          <input type="text" name="city" value={this.state.city} placeholder="city" id="city" onChange={this.handleInputChange}/>
  	      <input type="submit" value="Get Weather" id="getTemp"/>
        </form>
      </div>
    )
  }
}
export default App; 

//with help from Linda Chin's code//
