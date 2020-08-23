import React from "react";

function Legend() {
  
    return (
    <div className="card" style="width: 18rem;">
      <div className="card-body">
        <h5 className="card-title">Legend</h5>
        <ul>
          <li>
            Beaches
            <img
              className="icon"
              src="../../public/images/icons/beach.jpg"
              style="width: 20px, height: 20px;"
            ></img>
          </li>
          <li>
            Marijuana Dispensary
            <img
              classNameName="icon"
              src="../../public/images/icons/weed.jpg"
              style="width: 20px; height: 20px;"
            ></img>
          </li>
          <li>
            Firearm Shops
            <img
              classNameName="icon"
              src="../../public/images/icons/gun.jpg"
              style="width: 20px; height: 20px;"
            ></img>
          </li>
          <li>
            National Parks
            <img
              classNameName="icon"
              src="../../public/images/icons/nationalPark.png"
              style="width: 20px; height: 20px;"
            ></img>
          </li>
          <li>
            Outdoor Stores
            <img
              classNameName="icon"
              src="../../public/images/icons/shopping.jpg"
              style="width: 20px; height: 20px;"
            ></img>
          </li>
          <li>
                 State Parks
                 <img classNameName = "icon"
                 src="../../public/images/icons/statePark.jpg"
                 style="width: 20px; height: 20px;"
                 ></img></li>
        </ul>
      </div>
    </div>
  );
}

export default Legend;
