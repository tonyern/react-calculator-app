import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <div>
                <div>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.addNumber("7")}><h1>7</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.addNumber("8")}><h1>8</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.addNumber("9")}><h1>9</h1></button>
                    <button type="button" className="calculator-btn operator"
                        onClick={() => this.props.operation('/')}><h1>÷</h1></button>
                </div>

                <div>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.addNumber("4")}><h1>4</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.addNumber("5")}><h1>5</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.addNumber("6")}><h1>6</h1></button>
                    <button type="button" className="calculator-btn operator"
                        onClick={() => this.props.operation('*')}><h1>×</h1></button>
                </div>

                <div>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.addNumber("1")}><h1>1</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.addNumber("2")}><h1>2</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.addNumber("3")}><h1>3</h1></button>
                    <button type="button" className="calculator-btn operator"
                        onClick={() => this.props.operation('+')}><h1>+</h1></button>
                </div>

                <div>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.addNumber('.')}><h1>.</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.addNumber("0")}><h1>0</h1></button>
                    <button type="button" className="calculator-btn"
                        onClick={() => this.props.evaluate('=')}><h1>=</h1></button>
                    <button type="button" className="calculator-btn operator"
                        onClick={() => this.props.operation('-')}><h1>-</h1></button>
                </div>
            </div>
        );
    }
}

export default Button;