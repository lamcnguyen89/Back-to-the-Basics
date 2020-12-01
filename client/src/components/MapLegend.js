import React from "react";
import beach from "../images/icons/beach.jpg";
import dispensary from "../images/icons/weed.jpg";
import gun from "../images/icons/gun.jpg";
import nationalPark from "../images/icons/nationalPark.png";
import shopping from "../images/icons/shopping.jpg";
import statePark from "../images/icons/statePark.jpg";
import farm from "../images/icons/farm.png";


function Legend() {
    return (
    <div className="card container m-2">
      <div className="card-body">

        <h1 className="card-title">Legend</h1>

        <ul class="list-group">
          <li class="list-group-item">
            Beaches
            <img src={beach} class="legendIcon" alt="beach icon" />
          </li>
          <li class="list-group-item">
            Dispenseries
            <img src={dispensary} class="legendIcon" alt="dispensary icon" />
          </li>
          <li class="list-group-item">
            Gun Stores
            <img src={gun} class="legendIcon" alt="gun store icon" />
          </li>
          <li class="list-group-item">
            Outdoor Stores
            <img src={shopping} class="legendIcon" alt="outdoor store icon" />
          </li>
          <li class="list-group-item">
            National Parks
            <img src={nationalPark} class="legendIcon" alt="national park icon" />
          </li>
          <li class="list-group-item">
            State Parks
            <img src={statePark} class="legendIcon" alt="statePark icon" />
          </li>
          <li class="list-group-item">
            Farms
            <img src={farm} class="legendIcon" alt="farm icon" />
          </li>
        </ul>

      </div>
    </div>
  );
}
export default Legend;
