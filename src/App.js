import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      minVal: "",
      maxVal: "",
      number: 0
    }
  }

  getMinVal = (e) => {
    let newMinVal = Number(e.target.value)
    this.setState({minVal: newMinVal})
  }

  getMaxVal = (e) => {
    let newMaxVal = Number(e.target.value)
    this.setState({maxVal: newMaxVal})
  }

  generateNum = () => {
    const {minVal, maxVal} = this.state
    if (minVal < maxVal) {
      let randomNum = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
      this.setState({ number: randomNum})
    } else {
      alert("invalid input")
    }
  }

  clear = () => {
    this.setState({
      minVal: "",
      maxVal: "",
      number: 0
    })
  }

  render() {
    const { number, minVal, maxVal } = this.state;
    return (
      <div className="container">
        <h1>{number}</h1>
        <Input labelName="lower value" func={this.getMinVal} value={minVal}/>

        <Input labelName="upper value" func={this.getMaxVal} value={maxVal}/>
        <Button name="generate" func={this.generateNum}/> 
        <Button name="clear" func={this.clear}/> 
      </div>
    );
  }
}

//create Input component pass all necessary data with props
//create Button component pass all info with props and render dynamically
