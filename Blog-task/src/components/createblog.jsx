// components/createblog.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const getBlogs = () => {
    const blogs = localStorage.getItem('blogs');
    return blogs ? JSON.parse(blogs) : [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newBlog = {
      id: Date.now(),
      title: title,
      body: body,
      createdAt: new Date().toISOString()
    };

    const existingBlogs = getBlogs();
    const updatedBlogs = [...existingBlogs, newBlog];
    
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    
    setTitle('');
    setBody('');
    navigate('/blogs');
  };

  return (
    <div className="create-blog">
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="body">Blog Content:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your blog post here..."
            rows="15"
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;