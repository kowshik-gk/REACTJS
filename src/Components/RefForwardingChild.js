import React, { Component } from "react";
import './Style/style.css';

export class RefForwardingChild extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef(); // Create a ref for the input element
    }

    displayName = (event) => {
        event.preventDefault();
        const { paragraphRef } = this.props; // Get the forwarded ref from props
        if (paragraphRef.current) {
            paragraphRef.current.textContent = this.inputRef.current.value; // Change the text of the <p> element
        }
    }

    render() {
        return (
            <div>
                <form>
                    <h2>Enter Credentials</h2>
                    <input type="text" ref={this.inputRef} placeholder="Enter Name" onChange={this.displayName}/>
                    <br /><br />
                    <button onClick={this.displayName} type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
