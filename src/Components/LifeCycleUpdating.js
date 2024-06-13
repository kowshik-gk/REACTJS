import React, { Component } from "react";

class Updating extends Component {
    constructor() {
        super();
        this.state = {
            name: "k",
            age: "o"
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            name: props.name,
            age: props.age
        };
    }

    getSnapshotBeforeUpdate(PrevProbs,PrevState){
        console.log("PrevProb"+PrevProbs);
        console.log("PrevState"+PrevState);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate block");
        // Only update if name or age changes
        return nextProps.name !== this.props.name || nextProps.age !== this.props.age;
    }

    render() {
        console.log("Render Block");
        return (
            <div>
                <h2>Updating Stage</h2>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount Block");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate Block");
    }
}

export default Updating;
