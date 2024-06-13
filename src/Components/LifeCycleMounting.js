import React, { Component } from "react";

class Mounting extends Component {
    constructor() {
        super();
        console.log("A-Constructor block");

        this.state = {
            name: "k",
            age: "o"
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("A-getDerivedStateFromProps block");
       // console.log(props);

        // Return an object to update the state, or null to update nothing.
        return {
            name: props.name,
            age: props.age
        };

       // console.log(state);

    }

    render() {
        console.log("A-render Block");
        return (
            <div>
                <h2>Mounting Stage</h2>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
            </div>
        );
    }

    componentDidMount() {
        console.log("A-compDidMount Block");
    }
}

export default Mounting;
