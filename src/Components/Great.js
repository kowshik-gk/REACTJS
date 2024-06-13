import React, { useState } from "react";


//props (passed from app.js) contains all htmls elements properties in app.js
function Great(props){
   // useState.name="useState variable";
    var content= <h1> HI soldiers {props.name}</h1>;
 //   content.textContent+=useState.name;
    return content;

}

export default Great;