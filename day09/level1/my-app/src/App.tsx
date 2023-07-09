import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/navBar/navBar";
import "./App.css";
import Props from "./propsType/propsType";
import Button from "./components/navBar/Button";

export class App extends Component {
  state = 
  {
    PageMode: "Dark Mode",
    BackGroundColor:"#ffffff",
    Color:"#18122B"
  }
DarkModeHandler = () => 
{
    if (this.state.BackGroundColor === "#ffffff")
    {
      this.setState({BackGroundColor: "#18122B"});
      this.setState({Color: "#ffffff"});
      this.setState({PageMode:"Light Mode"});
    }
    else if (this.state.BackGroundColor === "#18122B")
    {
      this.setState({BackGroundColor: "#ffffff"});
      this.setState({Color: "#18122B"});
      this.setState({PageMode:"Dark Mode"});
    }
}
  render() {
    return (
      <div className="App">
        <NavBar mode={this.state.PageMode}
                BackGroundColor={this.state.BackGroundColor}
                OnClick={this.DarkModeHandler}
                Color={this.state.Color}
        />
      </div>
    );
  }
}
export default App;
