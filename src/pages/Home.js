import React from 'react';
import PostCard from '../components/PostCard';

function Home({ posts, searchTerm, sortBy }) {
  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort posts based on selected criteria
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt) - new Date(a.createdAt);
      case 'oldest':
        return new Date(a.createdAt) - new Date(b.createdAt);
      case 'most-upvotes':
        return b.upvotes - a.upvotes;
      case 'least-upvotes':
        return a.upvotes - b.upvotes;
      default:
        return 0;
    }
  });

  return (
    <div className="container">
      <div className="text-center mb-2">
        <h1>Welcome to HobbyHub</h1>
        <p>Share your passions with the community</p>
      </div>

      {sortedPosts.length === 0 ? (
        <div className="text-center">
          <h3>No posts found</h3>
          <p>Be the first to create a post about your hobby!</p>
        </div>
      ) : (
        <div className="posts-grid">
          {sortedPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;