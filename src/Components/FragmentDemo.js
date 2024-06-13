import React, { Component, Fragment } from "react";

function FragmentDemo(){

    return(
    <React.Fragment>       
        <td>Hello World</td>  {/*  Fragment Used to return any tag like column without row */}
        <td>Hi</td>
    </React.Fragment>);


}

export default FragmentDemo;