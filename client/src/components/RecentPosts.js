import React, { useState, useEffect } from 'react';
import Card from './Card';
import blogPost from '../data/blog.json';
import { NavLink, Link } from 'react-router-dom';
import './recentpostsstyle.css';


/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {

    const [post, setPost] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        blogImage: "" ,
        blogParagraph: "",
        blogParagraph2: "",
        blogParagraph3: "",
        blogVideo: ""
    });
    
    useEffect(() => {
        const data = blogPost.data
        const post = data[data.length-1]
        setPost(post);
  
    }, [post]);

    if(post.blogImage === "") return null;

  return(
    <div style={props.style}>
        <Card className="cardStyles" style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
<<<<<<< HEAD
                <img className="mt-3" src={require('../blogPostImages/' + post.blogImage)} alt="Post Image" />
=======
                {/* <img src={require('../blogPostImages/' + post.blogImage)} alt="Post Image" /> */}
>>>>>>> de7d346fe39d172cdef736caeb2c71af0ad28d54
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Latest Post</span>
                <h2>{post.blogTitle}</h2>
                <span>posted on {post.postedOn} by {post.author}</span>
                <p>{post.blogParagraph}...</p>

                {/* <button>
                    <NavLink key={post.id} to={`/post/${post.slug}`}>
                        Read More
                    </NavLink>
                </button>      */}
              <Link to={`/post/${post.slug}`}>
                <button color="white" className="is-rounded">
                  <span className="readMore">Read More</span>
                </button>
              </Link>
       

            </div>

        </Card>
    </div>
   )

 }

export default RecentPosts