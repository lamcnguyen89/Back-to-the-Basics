import React, { useState, useEffect } from 'react';
import './sidebarstyle.css';
import Card from './Card';
import blogPost from '../data/blog.json';
import Pagination from './Pagination';
import PostLinks from './PostLinks'

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    
    
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await blogPost.data;
            setPosts(res);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return(
      <div className="sidebarContainer" style={{
          width: props.width,
      }}>
            <Card className="cardStyles" style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="/images/Lam_Profile.jpg" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Lam Nguyen. I'm a full stack developer skilled in React JS, Node JS, MySQL and Mongo DB.</p>
                </div>
            </Card>

            {/* 
                <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                    <div className="cardHeader">
                        <span>Social Network</span>
                    </div>
                </Card> 
            */}

            <Card className="cardStyles" style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    <PostLinks posts={currentPosts} loading={loading} />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar