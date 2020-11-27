import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import forest from "../../../src/images/forest.jpeg";

// const ab = {
//     width: "55%",
//     height: "55%",
//     background: "Red",
// }


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
        <div className="message">
            <Message className="message-container" size="huge" secondary="true">
                {/* <Header size="huge" 

                >Back to the Basics Florida
                <br />
                <img
                className="ab"
                src={forest}
                style={ab}
                ></img>
                </Header>
                 */}
                <p >Make the outdoors great again!</p>
                <p>...Except for all the deerflies, mosquitoes, poisonous plants, dangerous animals, poop, extreme heat and cold, rain, no electricity, and lack of toilets....</p>
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
                
            </Message>


        </div>
    )
};

export default Home;
