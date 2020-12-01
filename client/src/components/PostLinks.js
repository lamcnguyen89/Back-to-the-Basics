import React from 'react';
import { NavLink } from 'react-router-dom';

const PostLinks = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    posts.map(post => {
        return (
            <NavLink key={post.id} to={`/post/${post.slug}`}>
                <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                </div>
            </NavLink>
        );
    })
  );
};

export default PostLinks;