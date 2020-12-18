import React, { Component } from 'react';
import './Clear.css'

class Clear extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button type="button" id="clear-btn"><h1>CLEAR</h1></button>
            </div>
        );
    }
}

export default Clear;