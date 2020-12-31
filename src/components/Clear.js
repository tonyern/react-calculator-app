import React, { Component } from 'react';
import './Clear.css'

class Clear extends Component {
    render() {
        return (
            <div>
                <button type="button" id="clear-btn" onClick={() => this.props.clear()}><h1>CLEAR</h1></button>
            </div>
        );
    }
}

export default Clear;