import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <h1>0</h1>
        <div>
          <label htmlFor="">lower value</label>
          <input type="number" placeholder="enter lower value"/>
        </div>
        <div>
          <label htmlFor="">upper value</label>
          <input type="number" placeholder="enter upper value"/>
        </div>
        <button className="generate">generate</button>
        <button className="clear">clear</button>
      </div>
    );
  }
}
