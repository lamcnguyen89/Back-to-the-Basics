import React from "react";
import beach from "../images/icons/beach.png";
import dispensary from "../images/icons/weed.png";
import gun from "../images/icons/gun.png";
import nationalPark from "../images/icons/nationalPark.png";
import shopping from "../images/icons/shopping.png";
import statePark from "../images/icons/statePark.png";
import farm from "../images/icons/farm.png";
import event from "../images/icons/event.png";


function Legend() {
    return (
    <div className="card container m-2">
      <div className="card-body">

        <h1 className="card-title">Legend</h1>

        <ul className="list-group">
          <li className="list-group-item">
            Beaches
            <img src={beach} className="legendIcon" alt="beach icon" />
          </li>
          <li className="list-group-item">
            Dispenseries
            <img src={dispensary} className="legendIcon" alt="dispensary icon" />
          </li>
          <li className="list-group-item">
            Gun Stores
            <img src={gun} className="legendIcon" alt="gun store icon" />
          </li>
          <li className="list-group-item">
            Outdoor Stores
            <img src={shopping} className="legendIcon" alt="outdoor store icon" />
          </li>
          <li className="list-group-item">
            National Parks
            <img src={nationalPark} className="legendIcon" alt="national park icon" />
          </li>
          <li className="list-group-item">
            State Parks
            <img src={statePark} className="legendIcon" alt="statePark icon" />
          </li>
          <li className="list-group-item">
            Farms
            <img src={farm} className="legendIcon" alt="farm icon" />
          </li>
          <li className="list-group-item">
            Events
            <img src={event} className="legendIcon" alt="farm icon" />
          </li>
        </ul>

      </div>
    </div>
  );
}
export default Legend;
