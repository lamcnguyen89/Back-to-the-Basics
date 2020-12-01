import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import RecentPosts from '../components/RecentPosts';
import blogData from '../data/blog.json';
import Layout from '../components/Layout';

const SideImage = props => {
    return (
        <div style={{ height: `${props.height}px`  }}>
            <img src={props.src} alt="" />
        </div>
    );
}

const ImageGallery = props => (
    <div className="galleryPost" style={props.galleryStyle}>
            <section style={{ width: props.largeWidth }}>
                <div className="mainImageWrapper">
                    <img src={require('../blogPostImages/' + props.imagesArray[1])} alt="" />
                </div>
            </section>
            <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
                {
                    props.imagesArray.map(image => 
                        <SideImage
                            key={image} 
                            height={props.sideImageHeight}
                            src={require('../blogPostImages/' + image)}
                            alt="" />
                    )
                }
            </section>
    </div>
);


export const Home = (props) => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const galleryHeight = 200;
    const galleryStyle = {
        height: galleryHeight+'px',
        overflow: 'hidden'
    }
    const sideImageHeight = galleryHeight / 3;
    const imgAr = blogData.data.map(post => post.blogImage)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            )
        }
    }

    return (
        <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Message className="message-container" size="huge" secondary="true">
                            <Header size="huge"> 
                                <h1>Back to the Basics Florida</h1>
                            </Header>
                            <p>
                                Make the outdoors great again!
                            </p>
                            <p>
                                ...Except for all the deerflies, mosquitoes, poisonous plants, dangerous animals, poop, extreme heat and cold, rain, no electricity, and lack of toilets....
                            </p>
                            <Link to="/login">
                                {showLoginBtn()}
                            </Link>
                        </Message> 
                        <Layout>
                            <RecentPosts style={{width: '70%'}}/>
                        </Layout>
                    </div>
                </div>
        </div>


    )
};

export default Home;

