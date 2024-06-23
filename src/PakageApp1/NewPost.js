import React, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
function NewPost({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (

    <>
    <h2 style={{marginTop:'30%'}}>Add New Post</h2>
    
     
      <form onSubmit={handleSubmit} style={{width:'300%',marginLeft:'-60%'}}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    
    </>
  );
}

export default NewPost;
