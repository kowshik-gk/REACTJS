import axios from 'axios';
import React, { Component } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            newPostTitle: '',
            editPostId: null,
            editPostTitle: '',
            postStatus: null,
        };
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);
                this.setState({ posts: response.data });
            })
            .catch(error => {
                console.error("There was an error fetching the posts!", error);
            });
    }

    handleInputChange = (event) => {
        this.setState({ newPostTitle: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { newPostTitle, posts } = this.state;

        const maxId = posts.length > 0 ? Math.max(...posts.map(post => post.id)) : 0;

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            id: maxId + 1,
            title: newPostTitle,
            body: 'This is a new post added via Axios POST',
            userId: 1
        })
        .then(response => {
            if (response.data) {
                console.log("Post added successfully:", response.data);
                const newPost = {
                    id: response.data.id,
                    title: response.data.title,
                    body: response.data.body
                };
                this.setState(prevState => ({
                    posts: [...prevState.posts, newPost],
                    newPostTitle: '',
                    postStatus: 'success'
                }));
                setTimeout(() => {
                    this.setState({ postStatus: null });
                }, 3000);
            } else {
                console.error("Empty response received from server");
                this.setState({ postStatus: 'error' });
                setTimeout(() => {
                    this.setState({ postStatus: null });
                }, 3000);
            }
        })
        .catch(error => {
            console.error("Error adding post:", error);
            this.setState({ postStatus: 'error' });
            setTimeout(() => {
                this.setState({ postStatus: null });
            }, 3000);
        });
    }

    handleDelete = (id) => {
        this.setState(prevState => ({
            posts: prevState.posts.filter(post => post.id !== id)
        }));
    }

    handleEdit = (id) => {
        const post = this.state.posts.find(post => post.id === id);
        if (post) {
            this.setState({
                editPostId: id,
                editPostTitle: post.title
            });
        }
    }

    handleEditInputChange = (event) => {
        this.setState({ editPostTitle: event.target.value });
    }

    handleUpdate = (event) => {
        event.preventDefault();
        const { editPostId, editPostTitle, posts } = this.state;

        axios.put(`https://jsonplaceholder.typicode.com/posts/${editPostId}`, {
            id: editPostId,
            title: editPostTitle,
            body: 'This post has been updated via Axios PUT',
            userId: 1
        })
        .then(response => {
            if (response.data) {
                console.log("Post updated successfully:", response.data);
                const updatedPosts = posts.map(post => 
                    post.id === editPostId ? { ...post, title: editPostTitle } : post
                );
                this.setState({
                    posts: updatedPosts,
                    editPostId: null,
                    editPostTitle: '',
                    postStatus: 'success'
                });
                setTimeout(() => {
                    this.setState({ postStatus: null });
                }, 3000);
            } else {
                console.error("Empty response received from server");
                this.setState({ postStatus: 'error' });
                setTimeout(() => {
                    this.setState({ postStatus: null });
                }, 3000);
            }
        })
        .catch(error => {
            console.error("Error updating post:", error);
            this.setState({ postStatus: 'error' });
            setTimeout(() => {
                this.setState({ postStatus: null });
            }, 3000);
        });
    }

    render() {
        const { posts, newPostTitle, editPostId, editPostTitle, postStatus } = this.state;

        const containerStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            overflowY: 'auto',
            maxHeight: '80vh', // Ensure the container has a limited height to allow scrolling
            padding: '10px',
            border: '1px solid #ccc',
            marginBottom: '20px'
        };

        const itemStyle = {
            border: '1px solid #ccc',
            padding: '10px',
            margin: '5px',
            width: 'calc(100% / 4 - 20px)', // Adjust the width based on how many items you want per row
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        };

        const iconContainerStyle = {
            display: 'flex',
            justifyContent: 'space-between',
        };
        const topping = {
            marginTop: '30%',
        
        };
        
        return (
            <div className='post-list-container'>
                <h2>Post List</h2>

                {/* Form to add new post */}
                <header>
                    <form onSubmit={this.handleSubmit} style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            value={newPostTitle}
                            onChange={this.handleInputChange}
                            placeholder="Enter new post title"
                            style={{ padding: '10px', width: '80%' }}
                        />
                        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>Add Post</button>
                    </form>
                </header>

                {/* Display success or error message */}
                {postStatus === 'success' && (
                    <div style={{ color: 'green', marginBottom: '20px' }}>Post added/updated successfully!</div>
                )}
                {postStatus === 'error' && (
                    <div style={{ color: 'red', marginBottom: '20px' }}>Error adding/updating post. Please try again later.</div>
                )}

                {/* List of posts */}
                <div style={topping}>
                <div style={containerStyle}>
                    {posts.map(post => (
                        <div key={post.id} style={itemStyle}>
                            {editPostId === post.id ? (
                                <form onSubmit={this.handleUpdate}>
                                    <input
                                        type="text"
                                        value={editPostTitle}
                                        onChange={this.handleEditInputChange}
                                        placeholder="Edit post title"
                                        style={{ padding: '10px', width: '100%' }}
                                    />
                                    <button type="submit" style={{ padding: '10px', marginTop: '10px' }}>Update Post</button>
                                </form>
                            ) : (
                                <>
                                    <div>
                                        <p>{post.id} - {post.title}</p>
                                    </div>
                                    <div style={iconContainerStyle}>
                                        <MdDelete className="icon" onClick={() => this.handleDelete(post.id)} style={{ cursor: 'pointer' }} />
                                        <MdEdit className="icon" onClick={() => this.handleEdit(post.id)} style={{ cursor: 'pointer' }} />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            </div>
        );
    }
}

export default PostList;
