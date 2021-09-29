import React, { Component } from 'react'
import {
    FormControl,
  } from "react-bootstrap";

export class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state={}
    };

    render() {
        return (
            <div className="input-box-container">
                <div className="input-label">
                    {this.props.inputLabel}
                </div>
                <FormControl
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.props.inputOnChange(this.props.inputId, e.target.value)}
                    value={this.props.value}
                    id={this.props.inputId}
                    type="text"
                />
            </div>
        )
    }
}

export default InputBox
