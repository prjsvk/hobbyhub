import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost({ addPost }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert('Please enter a title for your post');
      return;
    }

    addPost(formData);
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="text-center">Create New Post</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Post Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="What's your post about?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content (Optional)</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Share more details about your hobby..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL (Optional)</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <button type="submit" className="btn">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;