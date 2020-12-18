import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <button type="button" className="calculator-btn"><h1>7</h1></button>
                    <button type="button" className="calculator-btn"><h1>8</h1></button>
                    <button type="button" className="calculator-btn"><h1>9</h1></button>
                    <button type="button" className="calculator-btn operator"><h1>/</h1></button>
                </div>

                <div>
                    <button type="button" className="calculator-btn"><h1>4</h1></button>
                    <button type="button" className="calculator-btn"><h1>5</h1></button>
                    <button type="button" className="calculator-btn"><h1>6</h1></button>
                    <button type="button" className="calculator-btn operator"><h1>X</h1></button>
                </div>

                <div>
                    <button type="button" className="calculator-btn"><h1>1</h1></button>
                    <button type="button" className="calculator-btn"><h1>2</h1></button>
                    <button type="button" className="calculator-btn"><h1>3</h1></button>
                    <button type="button" className="calculator-btn operator"><h1>+</h1></button>
                </div>

                <div>
                    <button type="button" className="calculator-btn"><h1>.</h1></button>
                    <button type="button" className="calculator-btn"><h1>0</h1></button>
                    <button type="button" className="calculator-btn"><h1>=</h1></button>
                    <button type="button" className="calculator-btn operator"><h1>-</h1></button>
                </div>
            </div>
        );
    }
}

export default Button;