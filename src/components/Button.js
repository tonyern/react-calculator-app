import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    numberPressedHandler = (key, value) => {
        console.log(value + " was pressed");
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", "7")}><h1>7</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", "8")}><h1>8</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", "9")}><h1>9</h1></button>
                    <button type="button" className="calculator-btn operator"
                        onClick={event => this.numberPressedHandler("input", "/")}><h1>÷</h1></button>
                </div>

                <div>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", "4")}><h1>4</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", "5")}><h1>5</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", "6")}><h1>6</h1></button>
                    <button type="button" className="calculator-btn operator"
                        onClick={event => this.numberPressedHandler("input", "*")}><h1>×</h1></button>
                </div>

                <div>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", "1")}><h1>1</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", "2")}><h1>2</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", "3")}><h1>3</h1></button>
                    <button type="button" className="calculator-btn operator"
                        onClick={event => this.numberPressedHandler("input", "+")}><h1>+</h1></button>
                </div>

                <div>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", ".")}><h1>.</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", "0")}><h1>0</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={event => this.numberPressedHandler("input", "=")}><h1>=</h1></button>
                    <button type="button" className="calculator-btn operator"
                        onClick={event => this.numberPressedHandler("input", "-")}><h1>-</h1></button>
                </div>
            </div>
        );
    }
}

export default Button;