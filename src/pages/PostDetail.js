import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Comment from '../components/Comment';

function PostDetail({ posts, upvotePost, addComment, updatePost, deletePost }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [commentText, setCommentText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container">
        <div className="text-center">
          <h2>Post not found</h2>
          <button onClick={() => navigate('/')} className="btn">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleUpvote = () => {
    upvotePost(post.id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      addComment(post.id, commentText.trim());
      setCommentText('');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({
      title: post.title,
      content: post.content,
      image: post.image
    });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    updatePost(post.id, editData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditData({});
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(post.id);
      navigate('/');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container">
      <div className="post-detail">
        {isEditing ? (
          <form onSubmit={handleSaveEdit}>
            <div className="form-group">
              <input
                type="text"
                value={editData.title}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                className="form-group input"
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                value={editData.content}
                onChange={(e) => setEditData({ ...editData, content: e.target.value })}
                className="form-group textarea"
              />
            </div>
            
            <div className="form-group">
              <input
                type="url"
                value={editData.image}
                onChange={(e) => setEditData({ ...editData, image: e.target.value })}
                className="form-group input"
                placeholder="Image URL"
              />
            </div>
            
            <div className="post-actions">
              <button type="submit" className="btn">Save</button>
              <button type="button" onClick={handleCancelEdit} className="btn">Cancel</button>
            </div>
          </form>
        ) : (
          <>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span>Posted on {formatDate(post.createdAt)}</span>
              <div className="upvotes">
                <button 
                  onClick={handleUpvote}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    fontSize: '1.2rem', 
                    cursor: 'pointer' 
                  }}
                >
                  ▲
                </button>
                <span>{post.upvotes}</span>
              </div>
            </div>

            {post.image && (
              <img 
                src={post.image} 
                alt={post.title}
                className="post-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}

            {post.content && (
              <div className="post-content">
                <p>{post.content}</p>
              </div>
            )}

            <div className="post-actions">
              <button onClick={handleEdit} className="btn">Edit Post</button>
              <button onClick={handleDelete} className="btn btn-danger">Delete Post</button>
            </div>
          </>
        )}
      </div>

      <div className="comments-section">
        <h3>Comments ({post.comments.length})</h3>
        
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <div className="form-group">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
              rows="3"
            />
          </div>
          <button type="submit" className="btn">Add Comment</button>
        </form>

        <div className="comments-list">
          {post.comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            post.comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PostDetail;