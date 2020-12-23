import React, { Component } from 'react';
import './Clear.css'

class Clear extends Component {
    constructor(props) {
        super(props);
    }

    clearInput = () => {
        console.log('Clearing input');
    }

    render() {
        return (
            <div>
                <button type="button" id="clear-btn" onClick={this.clearInput}><h1>CLEAR</h1></button>
            </div>
        );
    }
}

export default Clear;