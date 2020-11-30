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
      <div className="card-body">
        <h1 className="card-title">Legend</h1>
        <ul>
          <li>
            Beaches
            <img
              className="icon"
              src={beach}
              style={icon}
            ></img>
          </li>
          <li>
            Marijuana Dispensary
            <img
              className="icon"
              src={weed}
              style={icon}
            ></img>
          </li>
          <li>
            Firearm Shops
            <img
              className="icon"
              src={gun}
              style={icon}
            ></img>
          </li>
          <li>
            National Parks
            <img
              className="icon"
              src={nationalPark}
              style={icon}
            ></img>
          </li>
          <li>
            Outdoor Stores
            <img
              className="icon"
              src={shopping}
              style={icon}
            ></img>
          </li>
          <li>
                 State Parks
                 <img className = "icon"
                 src={statePark}
                 style={icon}
                 ></img>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Legend;
