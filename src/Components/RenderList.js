import React, { Component } from "react";

class RenderList extends Component{
    render(){
        var list=[{name:"kowshik",rollno:1},{name:"akash",rollno:2}];
        var content=list.map(list => <div><h2>{list.name} {list.rollno}</h2></div>);
        return content;
    }
}

export default RenderList;