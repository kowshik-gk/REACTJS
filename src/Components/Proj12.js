import Proj1 from "./Proj1";
import React, { useRef, useState,useEffect } from 'react'
import "./Style/style.css";

function Proj12({setColor}) {

  const [color,colorset]=useState('red')
  const [buttonClicked, setButtonClicked] = useState(false);
  const inputRef=useRef();
function UpdateColor(event){
  const {value}=event.target;
 
  colorset(value)
 // setColor(value)
 
}

function UpdateColor2(event){
  event.preventDefault();
  inputRef.current.focus();
  setButtonClicked(!buttonClicked)
  setColor(color)
 
}

useEffect(()=>{
      console.log(color)//only print based on dependancy(buttonClicked) changes its state
},[buttonClicked])

  return (
    <div>
      <form>
      <input type="text" onChange={UpdateColor} placeholder="Enter Color : " ref={inputRef}></input>
      <button onClick={UpdateColor2} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Proj12