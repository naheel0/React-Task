// components/bloglist.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const getBlogs = () => {
    const blogs = localStorage.getItem('blogs');
    return blogs ? JSON.parse(blogs) : [];
  };

  const deleteBlog = (id) => {
    const blogs = getBlogs();
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    // Refresh the page to show updated list
    window.location.reload();
  };

  const confirmDelete = (blog) => {
    if (window.confirm(`Are you sure you want to delete "${blog.title}"?`)) {
      deleteBlog(blog.id);
    }
  };

  const blogs = getBlogs();

  return (
    <div className="blog-list">
      <div className="blog-header">
        <h2>All Blog Posts</h2>
        <Link to="/createblog" className="create-new-btn">
          Create New Blog
        </Link>
      </div>
      
      {blogs.length === 0 ? (
        <div className="no-blogs">
          <p>No blog posts yet.</p>
          <Link to="/createblog">Create your first blog post!</Link>
        </div>
      ) : (
        <div className="blogs-container">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <div className="blog-header-row">
                <h3 className="blog-title">
                  <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </h3>
                <button 
                  className="delete-btn"
                  onClick={() => confirmDelete(blog)}
                  title="Delete blog"
                >
                  ×
                </button>
              </div>
              <p className="blog-preview">
                {blog.body.substring(0, 150)}...
              </p>
              <div className="blog-meta">
                <span className="blog-date">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
                <div className="blog-actions">
                  <Link to={`/blogs/${blog.id}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;