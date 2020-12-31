import React, { Component } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Clear from './components/Clear';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInput: "",
      currentEntry: "",
      number1: "",
      operator: "",
      number2: "",
      result: ""
    };
  }

  numberInput = (number) => {
    console.log(number + ' was pressed');
    this.setState({
      displayInput: this.state.displayInput + number,
      currentEntry: this.state.currentEntry + number
    });
  }

  operatorInput = (symbol) => {
    console.log(symbol + ' was pressed');

    // As soon as operator is selected, set first number.
    this.setState({
      number1: this.state.currentEntry,
      currentEntry: "",
      displayInput: this.state.displayInput + symbol,
      operator: symbol
    });
  }

  evaluateInput = (equals) => {
    console.log('Evaluating inputs');
    this.setState({
      number2: this.state.currentEntry,
      currentEntry: "",
      result: parseInt(this.state.number1) + parseInt(this.state.number2),
      displayInput: this.state.displayInput + equals + this.state.result
    });
  }

  clearInput = () => {
    console.log('Clearing input');
    this.setState({
      displayInput: ""
    });
  }

  render() {
    return (
      <div>
        <Input><strong>{this.state.displayInput}</strong></Input>
        <Button addNumber={this.numberInput} operation={this.operatorInput} evaluate={this.evaluateInput} />
        <Clear clear={this.clearInput} />
      </div>
    );
  }
}

export default App;
