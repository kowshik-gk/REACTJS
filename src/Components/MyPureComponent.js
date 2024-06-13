import React,{PureComponent } from "react";
import MemoComponent from "./MemoComponent";

class MyPureComponent extends PureComponent{

    constructor(Props){
        super(Props);

        this.state={
            name1:"xx"
        }
    }



    componentDidMount(){
        setInterval(()=>{ this.setState({
            name1:"aa" // rerender
          //  name1:"xx" //not rerender
           })},2000)
       
    }


  
    //rerender only execute when  above shouldComponentUpdate returns true else no rerender
    // but in regular component rerender occurs unconditionally while calling them 
    render() {
    
        console.log("*********PureComponent********** NAME="+this.state.name1 );
        return(
            <div>
            <MemoComponent name12="mmm"></MemoComponent>
            PureComponent
            </div>
        );
        
    }
}
export default MyPureComponent;