import React from 'react';
import { Link } from 'react-router-dom';

function PostPage({ posts }) {
  return (
    <main>
      <h2>Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul className="post-list">
          {posts.map((post, index) => (
            <li key={index} className="post-item">
              <Link to={`/PostPage/${index + 1}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default PostPage;
