// src/Components/ContextComponent1.js
import React from 'react';
import ContextComponent2 from './ContextComponent2';
import { UserProvider } from './CUserContext';

function ContextComponent1() {
  return (
    <>
      <h2>ContextComponent1</h2>
    {  /*<UserProvider value="Kowshik">
        <ContextComponent2 />
      </UserProvider>*/}
      <ContextComponent2></ContextComponent2>
    </>
  );
}

export default ContextComponent1;
