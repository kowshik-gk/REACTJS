import React, { Component } from "react";

class EventBinding extends Component {

    constructor() {
        super()
        this.state = {
            message: "Hello"
          
        }
        this.changeContent=this.changeContent.bind(this);
    }
    changeContent() {
        this.setState({ message: "Good bye" })
    }

    render() {
        return (<div>
            <h3>{this.state.message}</h3>
          {/*  <button onClick={this.changeContent.bind(this)}>subscribe</button>*/ /* this also works , but dont need the last declaration in constructor  ,THIS METHOD IS TAKE PERFORMANE*/ }
          <button onClick={this.changeContent}>subscribe</button> {/**  better approach*/}

          {
            /** 2nd approach also better which is in Welcome */
            /* Last approach is declare changeContent as annonymase function,no need constructor binding*/
            /* this also better abroach*/
          }

        </div>)
        //  return React.createElement('div',{id:"hello"},React.createElement('h2',null,"Hello A2d"));
    }
}

export default EventBinding;