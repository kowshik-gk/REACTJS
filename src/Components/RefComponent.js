import { Component } from "react";
import React from "react";
import './Style/style.css';
import { RefChildComponent } from "./RefChildComponent";

export class RefComponent extends Component {

    constructor(props) {
        super(props);

        // Initialize refs directly on the component instance
        this.inputRef1 = React.createRef();
        this.FocusRef = React.createRef();

        this.DisplayName = this.DisplayName.bind(this);
    }

    DisplayName(event) {
        event.preventDefault();

        // Correctly call the focus method
        this.FocusRef.current.focus();

        alert("Hello " + this.inputRef1.current.value);
    }

    render() {
        return (
            <div>
                <form>
                    <h2>Enter Credentials</h2>
                    <input type="text" ref={this.inputRef1} placeholder="Enter Name" />
                    <br /><br />
                    <RefChildComponent FocusRef={this.FocusRef} />
                    <button onClick={this.DisplayName} type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default RefComponent;
