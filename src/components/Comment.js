import React from 'react';

function Comment({ comment }) {
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
    <div className="comment">
      <p>{comment.text}</p>
      <div className="comment-meta">
        {formatDate(comment.createdAt)}
      </div>
    </div>
  );
}

export default Comment;