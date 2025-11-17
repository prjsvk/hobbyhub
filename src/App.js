import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Load posts from localStorage on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('hobbyhub-posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem('hobbyhub-posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    const post = {
      id: Date.now().toString(),
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
      upvotes: 0,
      comments: [],
      createdAt: new Date().toISOString()
    };
    setPosts([post, ...posts]);
  };

  const updatePost = (postId, updatedData) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, ...updatedData } : post
    ));
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const addComment = (postId, commentText) => {
    const newComment = {
      id: Date.now().toString(),
      text: commentText,
      createdAt: new Date().toISOString()
    };
    
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, newComment] }
        : post
    ));
  };

  const upvotePost = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, upvotes: post.upvotes + 1 }
        : post
    ));
  };

  return (
    <div className="App">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              posts={posts}
              searchTerm={searchTerm}
              sortBy={sortBy}
            />
          } 
        />
        <Route 
          path="/create" 
          element={
            <CreatePost addPost={addPost} />
          } 
        />
        <Route 
          path="/post/:id" 
          element={
            <PostDetail 
              posts={posts}
              upvotePost={upvotePost}
              addComment={addComment}
              updatePost={updatePost}
              deletePost={deletePost}
            />
          } 
        />
      </Routes>
    </div>
  );
}

// MAKE SURE THIS EXPORT IS PRESENT
export default App;