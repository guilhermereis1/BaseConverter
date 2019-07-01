import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      decimal: 0,
      hexadecimal: ""
    };
  }

  componentDidMount() {
    const number = 123441;
    const conv = number.toString(16);
    this.setState({ decimal: conv });

    const hex = "1e231";
    const dec = parseInt(hex, 16);
    this.setState({ hexadecimal: dec });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Conversor de Bases</h2>
          <h3>Decimal para Hexa => {this.state.decimal}</h3>
          <br />
          <h3>Hexa para Decimal => {this.state.hexadecimal}</h3>
        </header>
      </div>
    );
  }
}
export default App;
