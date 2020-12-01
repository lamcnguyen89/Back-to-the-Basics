import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from '../components/Layout';
import RecentPosts from '../components/RecentPosts';


 const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

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
        <>
            <div className="message">
                <Message className="message-container" size="huge" secondary="true">
                    <Header size="huge"> 
                        <h1>Back to the Basics Florida</h1>
                    </Header>
                    <p >Make the outdoors great again!</p>
                    <p>...Except for all the deerflies, mosquitoes, poisonous plants, dangerous animals, poop, extreme heat and cold, rain, no electricity, and lack of toilets....</p>
                    <Link to="/login">
                        {showLoginBtn()}
                    </Link> 
                </Message>
            </div>
            {/* <Layout>
                <RecentPosts style={{width: '70%'}}/>
            </Layout> */}
        </>
    )
};

export default Home;
