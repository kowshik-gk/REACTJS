// src/Components/ContextComponent2.js
import React, { useContext } from 'react';
import { UserConsumer } from './CUserContext';
import ContextComponent3 from './ContextComponent3';
import { contextState } from './CounteruseReducehook'


function ContextComponent2() {
  ContextComponent2.contextType = UserConsumer
  const {count,dispatch}=useContext(contextState)
  return (
    <>
      <h1>ContextComp2</h1>
      <div>
      <button onClick={()=>dispatch('inc')}>Increament</button>
        <button onClick={()=>dispatch('dec')}>Decreament</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
      </div>
      <ContextComponent3 />
    </>
  );

}

export default ContextComponent2;
