import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Link to={`/post/${post.id}`} className="post-card">
      <h3 className="post-title">{post.title}</h3>
      
      <div className="post-meta">
        <span>{formatDate(post.createdAt)}</span>
        <div className="upvotes">
          <span>▲</span>
          <span>{post.upvotes}</span>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;