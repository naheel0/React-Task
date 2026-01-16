// components/blogdetail.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getBlogs = () => {
    const blogs = localStorage.getItem('blogs');
    return blogs ? JSON.parse(blogs) : [];
  };

  const deleteBlog = (blogId) => {
    const blogs = getBlogs();
    const updatedBlogs = blogs.filter(blog => blog.id !== blogId);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    navigate('/blogs');
  };

  const confirmDelete = (blog) => {
    if (window.confirm(`Are you sure you want to delete "${blog.title}"? This action cannot be undone.`)) {
      deleteBlog(blog.id);
    }
  };

  const blogs = getBlogs();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="blog-detail">
        <div className="error-message">
          <h2>Blog Post Not Found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="back-link">
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="blog-detail-header">
        <Link to="/blogs" className="back-link">
          ← Back to All Blogs
        </Link>
        <button 
          className="delete-btn-large"
          onClick={() => confirmDelete(blog)}
        >
          Delete Blog
        </button>
      </div>
      
      <article className="blog-article">
        <h1 className="blog-detail-title">{blog.title}</h1>
        
        <div className="blog-meta">
          <time dateTime={blog.createdAt}>
            Published on {new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        
        <div className="blog-content">
          {blog.body.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;