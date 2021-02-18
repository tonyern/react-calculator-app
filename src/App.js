import React, { Component } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Clear from "./components/Clear";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInput: "",
      currentEntry: "",
      number1: "",
      operator: "",
      number2: "",
    };
  }

  numberInput = (number) => {
    console.log(number + " was pressed");

    this.setState({
      displayInput: this.state.displayInput + number,
      currentEntry: this.state.currentEntry + number,
    });
  };

  decimalInput = (decimal) => {
    if (
      this.state.currentEntry.indexOf(".") === -1 ||
      this.state.displayInput.indexOf(".") === -1
    ) {
      this.setState({
        currentEntry: this.state.currentEntry + decimal,
        displayInput: this.state.displayInput + decimal,
      });
    }
  };

  operatorInput = (symbol) => {
    console.log(symbol + " was pressed");

    // As soon as operator is selected, set first number.
    this.setState({
      number1: this.state.currentEntry,
      currentEntry: "",
      displayInput: this.state.displayInput + symbol,
      operator: symbol,
    });
  };

  evaluateInput = () => {
    console.log("Evaluating inputs");

    let compute;
    if (this.state.operator === "+") {
      compute = parseInt(this.state.number1) + parseInt(this.state.number2);
    } else if (this.state.operator === "-") {
      compute = parseInt(this.state.number1) - parseInt(this.state.number2);
    } else if (this.state.operator === "*") {
      compute = parseInt(this.state.number1) * parseInt(this.state.number2);
    } else if (this.state.operator === "/") {
      if (this.state.number2 !== "0") {
        compute = parseInt(this.state.number1) / parseInt(this.state.number2);
      } else {
        compute = "Cannot divide by 0";
      }
    }

    if (typeof compute !== "undefined") {
      this.setState({
        number2: this.state.currentEntry,
        displayInput: compute.toString(),
        currentEntry: "",
      });
    }
  };

  clearInput = () => {
    console.log("Clearing input");
    this.setState({
      displayInput: "",
      currentEntry: "",
      number1: "",
      operator: "",
      number2: "",
    });
  };

  render() {
    return (
      <div>
        <Input>
          <strong>{this.state.displayInput}</strong>
        </Input>
        <Button
          addNumber={this.numberInput}
          addDecimal={this.decimalInput}
          operation={this.operatorInput}
          evaluate={this.evaluateInput}
        />
        <Clear clear={this.clearInput} />
      </div>
    );
  }
}

export default App;
