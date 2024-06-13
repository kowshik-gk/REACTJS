import React from 'react'
import { useState } from 'react'


function Hooks() {

  const[count,newCount]=useState(10);

  function Increament(){
   newCount((count)=>{return(count+1)})
  }

  function Decreament(){
    newCount((count)=>{return(count-1)})
   }

  return (
    <div>HookuseState
     <p>{count}</p>

     <button onClick={Increament} type='submit'>+</button>
     <button onClick={Decreament} type="submit">-</button>
     
    </div>
  )
}

export default Hooks