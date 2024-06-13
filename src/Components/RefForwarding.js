import React, { Component } from "react";
import './Style/style.css';
import { RefForwardingChild } from "./RefForwardingChild";

export class RefForwarding extends Component {
    constructor(props) {
        super(props);
        this.paragraphRef = React.createRef(); // Create a ref for the <p> element
    }

    render() {
        return (
            <div>
                <h2>Parent in RefForwarding</h2>
                <p ref={this.paragraphRef}>This text will be changed</p>
                <RefForwardingChild paragraphRef={this.paragraphRef} />
            </div>
        );
    }
}
