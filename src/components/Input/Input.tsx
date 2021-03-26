import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return <div id="input-box">{this.props.children}</div>;
  }
}

export default Input;
