import React from 'react';
import { Header, Message } from "semantic-ui-react";
import GoogleMaps from '../../components/Data';
import Legend from '../../components/Legend';
import Forest from "../../../src/images/forest.jpeg";
import Sunset from "../../../src/images/sunset.jpg";
import beach from "../../images/icons/beach.jpg";
import weed from "../../images/icons/weed.jpg";
import gun from "../../images/icons/gun.jpg";
import nationalPark from "../../images/icons/nationalPark.png";
import shopping from "../../images/icons/shopping.jpg";
import statePark from "../../images/icons/statePark.jpg";
import farm from "../../images/icons/farm.png";

// styles
const icon = {
    width: "25px",
    height: "25px",
};
const card = {
width: "18rem",
}
export const displaymap = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                
                <Header size="huge"> Back to the Basics Florida</Header>
                <p>Make the outdoors great again!</p>
                <p>...Except for all the deerflies, mosquitoes, poisonous plants, dangerous animals, poop, extreme heat and cold, rain, no electricity, and lack of toilets....</p>
            </Message>
            <Legend />      
            <GoogleMaps />
           
        </>
    )
}

export default displaymap;
