import React from 'react';
import { Header, Message } from "semantic-ui-react";
import MapContainer from '../../components/GoogleMapMultiples';


export const PageOne = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Back to the Basics </Header>
                <p>Make the outdoors great again!</p>
                <p>...Except for all the deerflies, mosquitoes, poisonous plants, dangerous animals, poop, extreme heat and cold, rain, no electricity, and lack of toilets....</p>
            </Message>
            <MapContainer />
        </>
    )
}

export default PageOne;
