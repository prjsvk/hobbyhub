import React from 'react';
import { Link } from 'react-router-dom';

function Header({ searchTerm, setSearchTerm, sortBy, setSortBy }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            HobbyHub
          </Link>
        </div>
        
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
        </nav>
        
        <div className="controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="sort-select">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="most-upvotes">Most Upvotes</option>
              <option value="least-upvotes">Least Upvotes</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;