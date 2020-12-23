import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }

        this.inputRef = React.createRef();
    }

    componentDidMount = () => {
        if (this.inputRef) {
            this.inputRef.current.focus();
        }
    }

    render() {
        return (
            <div>
                <input type="text" name="number-input" id="input-box" ref={this.inputRef} />
            </div>
        );
    }
}

export default Input;