import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';

function UseEffectFetchHttp() {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setPosts(response.data);
        setLoading(!loading)
        console.log(response.data); // Log the fetched data
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // empty dependency array to run once on mount

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    maxHeight: '90vh', // Ensure the container has a limited height to allow scrolling
    minWidth:'300vh',
    marginLeft:'200vh',
    padding: '10px',
    display:'Block'
  };

  const itemStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '5px',
    width: 'calc(100% / 4 - 20px)', // Adjust the width based on how many items you want per row
    boxSizing: 'border-box',
  };

  return (
    <div>
      <h1>Posts</h1>
      <div style={containerStyle}>
        {!loading && posts.map(post => (
          <div key={post.id} style={itemStyle}>
            {post.id} - {post.title}
          </div>
        ))}
        {
          loading && <h1>loading</h1>
        }
      </div>
    </div>
  );
}

export default UseEffectFetchHttp;
