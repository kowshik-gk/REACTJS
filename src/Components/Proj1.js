import React, { useEffect, useState } from 'react'
import Proj12 from './Proj12';
import './Style/MapStyle.css';

function Proj1() {
    
    const[currColor,setColor]=useState('red');
    // function UpdateColor(color){
    //     setColor(color);
    // }


  return (
    <>
    <div className="todo-container" style={ {backgroundColor:currColor,width:"40%" , height:"30%",textAlign:"center",fontSize:"60px"}}><span>{currColor}</span></div>
    <footer><Proj12 setColor={setColor}/></footer>
    
    </>
  )
}

export default Proj1