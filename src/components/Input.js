import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" name="number-input" id="input-box" />
            </div>
        );
    }
}

export default Input;