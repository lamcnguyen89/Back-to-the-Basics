import React from 'react';
import { Header, Message } from "semantic-ui-react";
import MapContainer from '../../components/GoogleMap';


export const PageOne = () => {
    return (
        <>
            <Message className="message-container" size="small" secondary="true">
                <Header size="huge"> Back to the Basics </Header>
                <p>Life Outside Really is Great!</p>
                <p>Except for the heat, deerflies, cold, rain, mosquitoes, mud, lack of electricity, no cell phone chargers...</p>
            </Message>
            <MapContainer />
        </>
    )
}

export default PageOne;
