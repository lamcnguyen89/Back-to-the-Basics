import React from "react";
import beach from "../images/icons/beach.jpg";
import weed from "../images/icons/weed.jpg";
import gun from "../images/icons/gun.jpg";
import nationalPark from "../images/icons/nationalPark.png";
import shopping from "../images/icons/shopping.jpg";
import statePark from "../images/icons/statePark.jpg";

const icon = {
    width: "25px",
    height: "25px",
};

const card = {
width: "18rem",

}

function Legend() {
    return (
    <div className="card">
      <div className="card-body"
      style={{
        backgroundColor:"#909497",
        textAlign:"center",
        color:"white"
      }}
      >
        <h1 className="card-title">Legend</h1>
        <ul>
          <li 
          style={{
            listStyleType: "none",
            color: "white",
            fontSize:"20pt",
          }}
          >
            Beaches
            <img
              className="icon"
              src={beach}
              style={icon}
            ></img>
          </li>
          <li
          style={{
            listStyleType: "none",
            color:"white",
            fontSize:"20pt",
          }}
          >
            Marijuana Dispensary
            <img
              classNameName="icon"
              src={weed}
              style={icon}
            ></img>
          </li>
          <li
          style={{
            listStyleType: "none",
            color:"white",
            fontSize:"20pt",
          }}
          >
            Firearm Shops
            <img
              classNameName="icon"
              src={gun}
              style={icon}
            ></img>
          </li>
          <li
          style={{
            listStyleType: "none",
            color:"white",
            fontSize:"20pt",
          
          }}
          >
            National Parks
            <img
              classNameName="icon"
              src={nationalPark}
              style={icon}
            ></img>
          </li>
          <li
          style={{
            listStyleType: "none",
            color:"white",
            fontSize:"20pt",
          
          }}
          >
            Outdoor Stores
            <img
              classNameName="icon"
              src={shopping}
              style={icon}
            ></img>
          </li>
          <li
          style={{
            listStyleType: "none",
            color:"white",
            fontSize:"20pt",
          
          }}
          >
                 State Parks
                 <img classNameName = "icon"
                 src={statePark}
                 style={icon}
                 ></img></li>
        </ul>
      </div>
    </div>
  );
}
export default Legend;
