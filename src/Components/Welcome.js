import React, { Component } from "react";
import './Style/style.css';

class Welcome extends Component {

    constructor() {
        super()
        this.state = {
            message: "Hi"
        }
    }
    changeContent() {
        this.setState({ message: "thank you for subscriping" })
    }

    render() {
        return (<div className="primary">
            <h3>{this.state.message}</h3>
            <button onClick={() => this.changeContent()}>subscribe</button>
        </div>)
        //  return React.createElement('div',{id:"hello"},React.createElement('h2',null,"Hello A2d"));
    }
}

export default Welcome;