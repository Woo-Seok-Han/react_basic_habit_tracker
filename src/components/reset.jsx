import React, { Component } from 'react'
import './reset.css';

export default class Reset extends Component {
    reset = () => this.props.onReset();

    render() {
        return (
            <button className='reset-button' onClick={this.reset}>Reset</button>
        )
    }
}
