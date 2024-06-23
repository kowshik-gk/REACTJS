import React, { useState } from 'react';
import './App.css';
import Great from './Components/Great';
import Welcome from './Components/Welcome';
import EventBinding from './Components/EventBinding';
import RenderList from './Components/RenderList';
import { FromComponent } from './Components/FormComponent';
import Mounting from './Components/LifeCycleMounting';
import Updating from './Components/LifeCycleUpdating';
import FragmentDemo from './Components/FragmentDemo';
import MyPureComponent from './Components/MyPureComponent';
import MemoComponent from './Components/MemoComponent';
import { RefComponent } from './Components/RefComponent';
import { RefForwarding } from './Components/RefForwarding';
import Hooks from './Components/Hooks';
import ToDoList from './Components/ToDoList';
import MapComponent from './Components/MapComponent';
import Proj1 from './Components/Proj1';
import Home from './PakageApp1/Home';
import About from './PakageApp1/About';
import NewPost from './PakageApp1/NewPost';
import PostPage from './PakageApp1/PostPage';
import PostDetail from './PakageApp1/PostDetails';
import ContextComponent1 from './Components/ContextComponent1';
import PostList from './Components/PostList';
import UseEffectFetchHttp from './Components/CUseEffectFetchHttp';
import {CounterOne} from './Components/CounteruseReducehook';
import CounteruseCallback from './Components/CounteruseCallback';
import CounteruseMemo from './Components/CounteruseMemo';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

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
          <Proj1/>
         <MapComponent/>
         
          <ContextComponent1/>
          <ToDoList/>
          <PostList/>
          <useEffectFetchHttp/>
          <CounterOne/>
           <CounteruseCallback/>
        */
      }
     
       <CounteruseMemo/>
      {/*<BrowserRouter>
        <div className="MainContainer">
          <nav>
            <h3>SPWA</h3>
            <ul>
              <li style={{ marginLeft: '60%' }}><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li style={{ marginLeft: '80%' }}><Link to="/NewPost">NewPost</Link></li>
              <li style={{ marginLeft: '90%' }}><Link to="/PostPage">PostPage</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/NewPost" element={<NewPost addPost={addPost} />} />
          <Route path="/PostPage" element={<PostPage posts={posts} />} />
          <Route path="/PostPage/:postId" element={<PostDetail posts={posts} />} />
        </Routes>
      </BrowserRouter>
      */}
    </div>
  );
}

export default App;
