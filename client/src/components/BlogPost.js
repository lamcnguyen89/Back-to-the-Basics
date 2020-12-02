import React, { useState, useEffect } from 'react';
import './blogpoststyle.css';
import Card from './Card';
import blogPost from '../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

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
    const [slug, setSlug] = useState('');
    
    
    useEffect(() => {
        const slug = props.match.params.slug;
        const post = blogPost.data.find(post => post.slug === slug);
        setPost(post);
        setSlug(slug)
    }, [post, props.match.params.slug]);

    if(post.blogImage === "") return null;

  return(
        <div className="blogPostContainer">
            <Card className="cardStyles">
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                            <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
                </div>

                <div className="postImageContainer">
                    <img src={require('../images/blogPostImages/' + post.blogImage)} alt="Post Image" />
                    
                </div>
                <div className="postVideo">
                    {/* I need a couple divs where I can upload links to videos */}
                    <iframe 
                        width="95%" 
                        height="315" 
                        src= {post.blogVideo}
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>

                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogParagraph}</p>
                    <p>{post.blogParagraph2}</p>
                    <p>{post.blogParagraph3}</p>

                </div>

                
                
            </Card>
        </div>
   )

 }

export default BlogPost