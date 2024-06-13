import logo from './logo.svg';
import './App.css';
import Great from './Components/Great'
import Welcome from './Components/Welcome'
import EventBinding  from './Components/EventBinding';
import RenderList from './Components/RenderList';
import { FromComponent } from './Components/FormComponent';
import Mounting from './Components/LifeCycleMounting'
import Updating from './Components/LifeCycleUpdating';
//import { FragmentDemo } from './Components/FragmentDemo';
import FragmentDemo from './Components/FragmentDemo';
import MyPureComponent from './Components/MyPureComponent';

import MemoComponent from './Components/MemoComponent';
import { RefComponent } from './Components/RefComponent';

import React from 'react';
import { RefForwarding } from './Components/RefForwarding';
import Hooks from './Components/Hooks';
import ToDoList from './Components/ToDoList';
import MapComponent from './Components/MapComponent';


function App() {
  return (
    <div className="App">
      {
      /*<Great name="kowshik"></Great>
      <Welcome name="abc"/>
       <EventBinding/>
       <RenderList/>
      <FromComponent/>
      <Mounting name="kowshik" age="1"/>
      <Updating name="Updated" age="2"/>
      <FragmentDemo/>
      <MemoComponent name1="xx"> </MemoComponent>
      <MyPureComponent name1="bbbb" />  
      <RefComponent  />
      <RefForwarding/>
       <Hooks/>
       <ToDoList/>
      */
      }
      <MapComponent/>
    
      
     
      

      

    </div>
  );
}

export default App;
