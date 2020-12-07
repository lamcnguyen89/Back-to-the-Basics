import React, { useState, useEffect } from 'react';
import Card from './Card';
import blogPost from '../blogdata/blog.json';
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
    <div className="recentPost" style={props.style}>
        <Card className="cardStyles rounded" style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img className="mt-3 rounded" src={require('../images/blogPostImages/' + post.blogImage)} alt="Post Image" />
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