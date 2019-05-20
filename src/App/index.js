import React, { Component } from "react";
import "./style.css";
import axiod from 'axios
'
class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <input type="text" name="city" value="" placeholder="city" id="city"/>
  	      <input type="submit" value="Get Weather" id="getTemp"/>
        </form>
      </div>
    )
  }

export default App; 

//with help from Linda Chin's code//