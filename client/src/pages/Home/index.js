import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
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
        <div>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Back to the Basics</Header>
                <p style={{ marginBottom: "5px" }}>Life Outside Really is Great... Except for the heat, deerflies, cold, rain, mosquitoes, mud, lack of electricity, no cell phone chargers...</p>
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
            </Message>

        </div>
    )
};

export default Home;
