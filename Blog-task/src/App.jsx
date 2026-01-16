// App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Change this line
import CreateBlog from './components/createblog.jsx';
import BlogList from './components/bloglist.jsx';
import BlogDetail from './components/blogdetail.jsx';
import './App.css';

function App() {
  return (
    <Router> {/* This now uses HashRouter */}
      <div className="App">
        <nav className="navbar">
          <h1>My Blog</h1>
          <div className="nav-links">
            <a href="/#/createblog">Create Blog</a> {/* Update links too */}
            <a href="/#/blogs">All Blogs</a>
          </div>
        </nav>
        
        <Routes>
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/" element={<BlogList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;